// Bridge to the Flutter shell (spidey_flutter). When the app runs inside the Flutter WebView,
// speech-to-text, text-to-speech and CORS-free fetch are done natively by Flutter.
const qs = new URLSearchParams(location.search);
export const wantsNative = qs.has('native');
const listeners = { speech: new Set(), state: new Set(), level: new Set(), word: new Set() };

window.SpideyNative = {
  onSpeech: (r) => listeners.speech.forEach((f) => f(r)),
  onSpeechState: (s) => listeners.state.forEach((f) => f(s)),
  onLevel: (v) => listeners.level.forEach((f) => f(v)),
  onWord: () => listeners.word.forEach((f) => f()),
};
export const onNative = (kind, fn) => { listeners[kind].add(fn); return () => listeners[kind].delete(fn); };

let readyP = null;
export function nativeReady() {
  if (readyP) return readyP;
  readyP = new Promise((res) => {
    const has = () => !!window.flutter_inappwebview?.callHandler;
    if (has()) return res(true);
    if (!wantsNative) return res(false);
    window.addEventListener('flutterInAppWebViewPlatformReady', () => res(true), { once: true });
    setTimeout(() => res(has()), 4000);
  });
  return readyP;
}
export const isNative = () => !!window.flutter_inappwebview?.callHandler;
export async function callNative(name, args = {}) {
  if (!(await nativeReady())) throw new Error('native bridge not available');
  return window.flutter_inappwebview.callHandler(name, args);
}
let caps = null;
export async function nativeCaps() {
  if (caps) return caps;
  try { caps = (await nativeReady()) ? await callNative('capabilities') : {}; } catch (e) { caps = {}; }
  return caps || {};
}
