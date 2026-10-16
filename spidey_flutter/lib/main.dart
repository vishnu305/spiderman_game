import 'dart:async';
import 'dart:convert';
import 'dart:io' show Platform;
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'package:http/http.dart' as http;
import 'package:permission_handler/permission_handler.dart';
import 'package:speech_to_text/speech_recognition_error.dart';
import 'package:speech_to_text/speech_recognition_result.dart';
import 'package:speech_to_text/speech_to_text.dart';

const int kServerPort = 8642;
const String kStartUrl = 'http://localhost:$kServerPort/index.html?native=1';
const Color kBackground = Color(0xFF120A1E);

const String kGroqKey = String.fromEnvironment('GROQ_KEY');
const String kTavilyKey = String.fromEnvironment('TAVILY_KEY');

const String kDesktopUserAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
    '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

bool get _isMobile => !kIsWeb && (Platform.isAndroid || Platform.isIOS);
bool get _isWindows => !kIsWeb && Platform.isWindows;
String get _platformName => kIsWeb ? 'web' : Platform.operatingSystem;

InAppLocalhostServer? _localhostServer;

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (!kIsWeb) {
    _localhostServer = InAppLocalhostServer(
      documentRoot: 'assets/web',
      port: kServerPort,
    );
    try {
      // start() never completes if the port is already taken, so time-box it.
      await _localhostServer!.start().timeout(const Duration(seconds: 5));
    } catch (e) {
      debugPrint('Localhost server start problem: $e');
    }
  }

  await SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
  await SystemChrome.setPreferredOrientations(DeviceOrientation.values);

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Spidey 3D',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: kBackground,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFFE23636),
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
      ),
      home: const SpideyHomePage(),
    );
  }
}

class SpideyHomePage extends StatefulWidget {
  const SpideyHomePage({super.key});

  @override
  State<SpideyHomePage> createState() => _SpideyHomePageState();
}

class _SpideyHomePageState extends State<SpideyHomePage> {
  InAppWebViewController? _controller;
  bool _loading = true;

  // Text-to-speech
  final FlutterTts _tts = FlutterTts();
  final Random _rng = Random();
  Timer? _mouthTimer;
  bool _speaking = false;
  bool _speakInFlight = false;
  int _speakId = 0;

  // Speech-to-text
  final SpeechToText _stt = SpeechToText();
  Future<bool>? _sttInit;
  bool _sttAvailable = false;
  bool _wantListen = false;
  String? _listenLocale;
  Timer? _restartTimer;

  @override
  void initState() {
    super.initState();
    _requestPermissions();
    _initTts();
  }

  @override
  void dispose() {
    _wantListen = false;
    _restartTimer?.cancel();
    _mouthTimer?.cancel();
    _tts.stop();
    if (_isMobile) {
      _stt.cancel();
    }
    super.dispose();
  }

  // ---------------------------------------------------------------------------
  // Setup
  // ---------------------------------------------------------------------------

  Future<void> _requestPermissions() async {
    if (!_isMobile) return;
    try {
      await [Permission.microphone, Permission.speech].request();
    } catch (e) {
      debugPrint('Permission request failed: $e');
    }
  }

  Future<void> _initTts() async {
    try {
      if (!kIsWeb && Platform.isIOS) {
        await _tts.setSharedInstance(true);
        await _tts.setIosAudioCategory(
          IosTextToSpeechAudioCategory.playAndRecord,
          [
            IosTextToSpeechAudioCategoryOptions.allowBluetoothA2DP,
            IosTextToSpeechAudioCategoryOptions.mixWithOthers,
            IosTextToSpeechAudioCategoryOptions.defaultToSpeaker,
          ],
          IosTextToSpeechAudioMode.defaultMode,
        );
      }
    } catch (e) {
      debugPrint('TTS iOS audio setup failed: $e');
    }

    _tts.setProgressHandler((String text, int start, int end, String word) {
      _js('window.SpideyNative && window.SpideyNative.onWord && '
          'window.SpideyNative.onWord()');
    });
    _tts.setCompletionHandler(_onTtsFinished);
    _tts.setCancelHandler(_onTtsFinished);
    _tts.setErrorHandler((dynamic message) {
      debugPrint('TTS error: $message');
      _onTtsFinished();
    });
  }

  void _onTtsFinished() {
    // While a speak() call is awaiting, its `finally` block owns the mouth
    // (this also ignores late cancel events from the stop() before speaking).
    if (_speakInFlight) return;
    _speaking = false;
    _stopMouth();
  }

  // ---------------------------------------------------------------------------
  // JavaScript helpers
  // ---------------------------------------------------------------------------

  Future<void> _js(String source) async {
    final controller = _controller;
    if (controller == null || !mounted) return;
    try {
      await controller.evaluateJavascript(source: source);
    } catch (e) {
      debugPrint('evaluateJavascript failed: $e');
    }
  }

  void _pushLevel(double level) {
    final v = level.clamp(0.0, 1.0).toStringAsFixed(3);
    _js('window.SpideyNative && window.SpideyNative.onLevel && '
        'window.SpideyNative.onLevel($v)');
  }

  static Map<String, dynamic> _arg(List<dynamic> args) {
    if (args.isNotEmpty && args.first is Map) {
      return Map<String, dynamic>.from(args.first as Map);
    }
    return <String, dynamic>{};
  }

  static double _num(dynamic value, double fallback) {
    if (value is num) return value.toDouble();
    if (value is String) return double.tryParse(value) ?? fallback;
    return fallback;
  }

  static String? _str(dynamic value) {
    if (value == null) return null;
    final s = value.toString().trim();
    return s.isEmpty ? null : s;
  }

  void _registerHandlers(InAppWebViewController controller) {
    controller.addJavaScriptHandler(
      handlerName: 'capabilities',
      callback: (List<dynamic> args) async {
        final stt = _isMobile ? await _ensureStt() : false;
        return <String, dynamic>{
          'stt': stt,
          'tts': true,
          'fetch': true,
          'platform': _platformName,
        };
      },
    );

    controller.addJavaScriptHandler(
      handlerName: 'config',
      callback: (List<dynamic> args) {
        return <String, dynamic>{
          'groqKey': kGroqKey,
          'tavilyKey': kTavilyKey,
        };
      },
    );

    controller.addJavaScriptHandler(
      handlerName: 'speak',
      callback: (List<dynamic> args) => _speak(_arg(args)),
    );

    controller.addJavaScriptHandler(
      handlerName: 'stopSpeak',
      callback: (List<dynamic> args) async {
        _speakId++;
        _speakInFlight = false;
        try {
          await _tts.stop();
        } catch (e) {
          debugPrint('TTS stop failed: $e');
        }
        _speaking = false;
        _stopMouth();
        return true;
      },
    );

    controller.addJavaScriptHandler(
      handlerName: 'listenStart',
      callback: (List<dynamic> args) async {
        final a = _arg(args);
        _listenLocale = _str(a['lang'])?.replaceAll('-', '_');
        _wantListen = true;
        if (!_isMobile) return false;
        // Restart immediately so a new language takes effect.
        if (_stt.isListening) {
          try {
            await _stt.stop();
          } catch (_) {}
        }
        await _startListening();
        return true;
      },
    );

    controller.addJavaScriptHandler(
      handlerName: 'listenStop',
      callback: (List<dynamic> args) async {
        _wantListen = false;
        _restartTimer?.cancel();
        if (_isMobile) {
          try {
            await _stt.stop();
          } catch (e) {
            debugPrint('STT stop failed: $e');
          }
        }
        _sendSpeechState(false);
        return true;
      },
    );

    controller.addJavaScriptHandler(
      handlerName: 'fetchText',
      callback: (List<dynamic> args) => _fetchText(_arg(args)),
    );
  }

  // ---------------------------------------------------------------------------
  // Text-to-speech
  // ---------------------------------------------------------------------------

  Future<bool> _speak(Map<String, dynamic> a) async {
    final text = (a['text'] ?? '').toString();
    if (text.trim().isEmpty) return true;

    final lang = _str(a['lang']) ?? 'en-IN';
    final webRate = _num(a['rate'], 1.0);
    final pitch = _num(a['pitch'], 1.0).clamp(0.5, 2.0).toDouble();
    final rate = _isWindows
        ? webRate.clamp(0.5, 2.0).toDouble()
        : (webRate * 0.5).clamp(0.2, 1.0).toDouble();

    final id = ++_speakId;
    _speakInFlight = true;
    if (_speaking) {
      try {
        await _tts.stop();
      } catch (_) {}
    }
    try {
      await _tts.setLanguage(lang);
    } catch (e) {
      debugPrint('TTS setLanguage($lang) failed: $e');
    }
    try {
      await _tts.setSpeechRate(rate);
    } catch (e) {
      debugPrint('TTS setSpeechRate failed: $e');
    }
    try {
      await _tts.setPitch(pitch);
    } catch (e) {
      debugPrint('TTS setPitch failed: $e');
    }
    try {
      await _tts.awaitSpeakCompletion(true);
    } catch (e) {
      debugPrint('TTS awaitSpeakCompletion failed: $e');
    }

    _speaking = true;
    _startMouth();
    try {
      await _tts.speak(text);
    } catch (e) {
      debugPrint('TTS speak failed: $e');
    } finally {
      // A newer speak() call owns the mouth animation now.
      if (id == _speakId) {
        _speakInFlight = false;
        _speaking = false;
        _stopMouth();
      }
    }
    return true;
  }

  void _startMouth() {
    _mouthTimer?.cancel();
    _mouthTimer = Timer.periodic(const Duration(milliseconds: 90), (_) {
      _pushLevel(0.2 + _rng.nextDouble() * 0.8);
    });
  }

  void _stopMouth() {
    _mouthTimer?.cancel();
    _mouthTimer = null;
    _pushLevel(0);
  }

  // ---------------------------------------------------------------------------
  // Speech-to-text (always-on mic with auto restart)
  // ---------------------------------------------------------------------------

  Future<bool> _ensureStt() {
    if (!_isMobile) return Future<bool>.value(false);
    return _sttInit ??= _initStt();
  }

  Future<bool> _initStt() async {
    try {
      _sttAvailable = await _stt.initialize(
        onStatus: _onSttStatus,
        onError: _onSttError,
      );
    } catch (e) {
      debugPrint('STT initialize failed: $e');
      _sttAvailable = false;
    }
    if (!_sttAvailable) {
      // Allow a later retry (e.g. after the user grants the permission).
      _sttInit = null;
    }
    return _sttAvailable;
  }

  Future<void> _startListening() async {
    if (!_wantListen || !mounted) return;
    final ok = await _ensureStt();
    if (!ok || !_wantListen) return;
    if (_stt.isListening) return;
    try {
      await _stt.listen(
        onResult: _onSttResult,
        listenFor: const Duration(seconds: 60),
        pauseFor: const Duration(seconds: 3),
        localeId: _listenLocale,
        onSoundLevelChange: _onSoundLevel,
        listenOptions: SpeechListenOptions(
          partialResults: true,
          cancelOnError: false,
          listenMode: ListenMode.dictation,
        ),
      );
    } catch (e) {
      debugPrint('STT listen failed: $e');
      _scheduleRestart(const Duration(milliseconds: 600));
    }
  }

  void _scheduleRestart(Duration delay) {
    if (!_wantListen) return;
    _restartTimer?.cancel();
    _restartTimer = Timer(delay, () {
      _startListening();
    });
  }

  void _onSttResult(SpeechRecognitionResult r) {
    final payload = jsonEncode(<String, dynamic>{
      'text': r.recognizedWords,
      'final': r.finalResult,
    });
    _js('window.SpideyNative && window.SpideyNative.onSpeech && '
        'window.SpideyNative.onSpeech($payload)');
  }

  void _onSoundLevel(double level) {
    if (_speaking) return; // the mouth animation owns onLevel while talking
    // Android reports roughly -2..10 dB, iOS roughly -50..0 dB.
    final normalized = (!kIsWeb && Platform.isIOS)
        ? (level + 50.0) / 50.0
        : (level + 2.0) / 12.0;
    _pushLevel(normalized.clamp(0.0, 1.0).toDouble());
  }

  void _onSttStatus(String status) {
    debugPrint('STT status: $status');
    _sendSpeechState(status == 'listening');
    if ((status == 'done' || status == 'notListening') && _wantListen) {
      _scheduleRestart(const Duration(milliseconds: 300));
    }
  }

  void _onSttError(SpeechRecognitionError error) {
    debugPrint('STT error: ${error.errorMsg} (permanent: ${error.permanent})');
    if (_wantListen) {
      _scheduleRestart(const Duration(milliseconds: 600));
    }
  }

  void _sendSpeechState(bool listening) {
    final payload = jsonEncode(<String, dynamic>{'listening': listening});
    _js('window.SpideyNative && window.SpideyNative.onSpeechState && '
        'window.SpideyNative.onSpeechState($payload)');
  }

  // ---------------------------------------------------------------------------
  // CORS-free fetch
  // ---------------------------------------------------------------------------

  Future<String> _fetchText(Map<String, dynamic> a) async {
    final url = _str(a['url']);
    if (url == null) return '';
    try {
      final headers = <String, String>{
        'User-Agent': kDesktopUserAgent,
        'Accept':
            'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-IN,en;q=0.9',
      };
      final extra = a['headers'];
      if (extra is Map) {
        extra.forEach((key, value) {
          if (key != null && value != null) {
            headers[key.toString()] = value.toString();
          }
        });
      }
      final response = await http
          .get(Uri.parse(url), headers: headers)
          .timeout(const Duration(seconds: 20));
      return utf8.decode(response.bodyBytes, allowMalformed: true);
    } catch (e) {
      debugPrint('fetchText failed for $url: $e');
      return '';
    }
  }

  // ---------------------------------------------------------------------------
  // UI
  // ---------------------------------------------------------------------------

  Future<void> _handleBack() async {
    final controller = _controller;
    if (controller != null) {
      try {
        if (await controller.canGoBack()) {
          await controller.goBack();
          return;
        }
      } catch (e) {
        debugPrint('canGoBack failed: $e');
      }
    }
    await SystemNavigator.pop();
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (bool didPop, Object? result) {
        if (didPop) return;
        _handleBack();
      },
      child: Scaffold(
        backgroundColor: kBackground,
        body: Stack(
          children: [
            Positioned.fill(
              child: InAppWebView(
                initialUrlRequest: URLRequest(url: WebUri(kStartUrl)),
                initialSettings: InAppWebViewSettings(
                  javaScriptEnabled: true,
                  mediaPlaybackRequiresUserGesture: false,
                  allowsInlineMediaPlayback: true,
                  transparentBackground: true,
                  supportZoom: false,
                  useHybridComposition: true,
                  isInspectable: kDebugMode,
                ),
                onWebViewCreated: (InAppWebViewController controller) {
                  _controller = controller;
                  _registerHandlers(controller);
                },
                onLoadStop: (InAppWebViewController controller, WebUri? url) {
                  if (mounted && _loading) {
                    setState(() => _loading = false);
                  }
                },
                onReceivedError: (InAppWebViewController controller,
                    WebResourceRequest request, WebResourceError error) {
                  debugPrint('WebView error ${error.type}: ${error.description} '
                      '(${request.url})');
                  if ((request.isForMainFrame ?? false) &&
                      mounted &&
                      _loading) {
                    setState(() => _loading = false);
                  }
                },
                onPermissionRequest: (InAppWebViewController controller,
                    PermissionRequest request) async {
                  return PermissionResponse(
                    resources: request.resources,
                    action: PermissionResponseAction.GRANT,
                  );
                },
                onConsoleMessage: (InAppWebViewController controller,
                    ConsoleMessage message) {
                  if (kDebugMode) {
                    debugPrint('[web] ${message.message}');
                  }
                },
              ),
            ),
            if (_loading)
              const Positioned.fill(
                child: ColoredBox(
                  color: kBackground,
                  child: Center(
                    child: CircularProgressIndicator(
                      color: Color(0xFFE23636),
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
