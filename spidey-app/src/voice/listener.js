// =====================================================================
//  LISTENER – always-on speech-to-text.
//  1) Flutter native STT  2) Browser Web Speech API (Chrome/Edge)  3) Groq Whisper (any browser, needs key)
//  It pauses itself while Spidey is speaking, so he never hears himself.
// =====================================================================
import { isNative, callNative, onNative, nativeCaps } from './bridge.js';
import { micAnalyser, micLevel, getMic } from './mic.js';

export function createListener({ onInterim, onFinal, onState, onError, transcribe, canWhisper = () => !!transcribe }) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const st = { want: false, paused: false, lang: 'en-IN', kind: null, rec: null, restartT: null, fails: 0, vad: null };

  // ---------- native ----------
  let offS = null, offT = null;
  const startNative = async () => {
    offS = offS || onNative('speech', (r) => { if (st.paused) return; const t = (r.text || '').trim(); if (!t) return; r.final ? onFinal(t) : onInterim(t); });
    offT = offT || onNative('state', (s) => onState?.(s.listening ? 'listening' : 'idle'));
    await callNative('listenStart', { lang: st.lang }); onState?.('listening');
  };

  // ---------- web speech ----------
  const startWeb = () => {
    if (st.rec) return;
    const r = new SR(); st.rec = r; r.lang = st.lang; r.continuous = true; r.interimResults = true; r.maxAlternatives = 1;
    r.onstart = () => { st.fails = 0; onState?.('listening'); };
    r.onresult = (e) => {
      if (st.paused) return;
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i], t = res[0].transcript.trim();
        if (res.isFinal) { if (t) onFinal(t); } else interim += t + ' ';
      }
      if (interim.trim()) onInterim(interim.trim());
    };
    r.onerror = (e) => {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') { st.want = false; onError?.('Microphone permission was blocked. Allow the mic in the browser address bar.'); }
      else if (e.error === 'network') { st.fails++; if (canWhisper()) { st.kind = 'whisper'; onError?.('Browser speech service unreachable – switching to Groq Whisper.'); } else if (st.fails === 1 || st.fails % 10 === 0) onError?.('Voice input is blocked on this network (browser speech service unreachable). Use home Wi-Fi/hotspot, or add a free Groq key in SETUP. Actions, Type and News still work.'); }
      else if (e.error !== 'no-speech' && e.error !== 'aborted') st.fails++;
    };
    r.onend = () => {
      st.rec = null;
      if (st.want && !st.paused) { clearTimeout(st.restartT); st.restartT = setTimeout(() => start(), Math.min(4000, 250 + st.fails * 600)); }
      else onState?.('idle');
    };
    try { r.start(); } catch (e) { st.rec = null; }
  };

  // ---------- whisper (voice-activity detection -> record -> Groq transcription) ----------
  const startWhisper = async () => {
    if (st.vad) return;
    await getMic(); const { ctx } = await micAnalyser(); const stream = await getMic();
    const v = { on: true, rec: null, chunks: [], loud: 0, quiet: 0, started: 0 }; st.vad = v; onState?.('listening');
    const tick = () => {
      if (!v.on) return;
      const lv = micLevel(), now = performance.now();
      if (!st.paused) {
        if (lv > 0.09) { v.loud++; v.quiet = 0; } else { v.quiet++; v.loud = Math.max(0, v.loud - 1); }
        if (!v.rec && v.loud > 3) {
          v.chunks = []; v.rec = new MediaRecorder(stream); v.started = now;
          v.rec.ondataavailable = (e) => e.data.size && v.chunks.push(e.data);
          v.rec.onstop = async () => {
            const blob = new Blob(v.chunks, { type: v.rec?.mimeType || 'audio/webm' }); v.rec = null;
            if (blob.size < 4000) return;
            try { const t = await transcribe(blob, st.lang); if (t && t.length > 1) onFinal(t); } catch (e) { onError?.(e.message); }
          };
          v.rec.start(); onInterim('…');
        }
        if (v.rec && (v.quiet > 22 || now - v.started > 12000)) { try { v.rec.stop(); } catch (e) { v.rec = null; } }
      }
      setTimeout(tick, 40);
    };
    void ctx; tick();
  };

  async function start() {
    if (!st.want || st.paused) return;
    if (!st.kind) {
      const caps = isNative() ? await nativeCaps() : {};
      st.kind = caps.stt ? 'native' : SR ? 'web' : canWhisper() ? 'whisper' : 'none';
      if (st.kind === 'none') { onError?.('This browser has no speech recognition. Use Chrome/Edge, or add a free Groq key in Settings.'); return; }
    }
    if (st.kind === 'native') return startNative().catch((e) => onError?.(e.message));
    if (st.kind === 'web') return startWeb();
    if (st.kind === 'whisper') return startWhisper().catch((e) => onError?.(e.message));
  }
  function halt() {
    clearTimeout(st.restartT);
    if (st.kind === 'native') callNative('listenStop').catch(() => {});
    if (st.rec) { try { st.rec.abort(); } catch (e) { /* ignore */ } st.rec = null; }
    if (st.vad) { st.vad.on = false; try { st.vad.rec?.stop(); } catch (e) { /* ignore */ } st.vad = null; }
  }
  return {
    start(lang) { if (lang) st.lang = lang; st.want = true; st.paused = false; start(); },
    stop() { st.want = false; halt(); onState?.('idle'); },
    pause() { if (st.paused) return; st.paused = true; halt(); },
    resume() { if (!st.want) return; st.paused = false; clearTimeout(st.restartT); st.restartT = setTimeout(start, 300); },
    setLang(l) { st.lang = l; if (st.want) { halt(); setTimeout(start, 300); } },
    get kind() { return st.kind; },
    get on() { return st.want; },
  };
}
