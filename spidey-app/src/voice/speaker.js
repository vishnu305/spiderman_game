// =====================================================================
//  SPEAKER (text-to-speech) with lip-sync levels.
//  Browser: Web Speech API (free, offline voices of Windows / Android / Chrome / Edge).
//  Flutter: native TTS through the bridge.
// =====================================================================
import { isNative, callNative, onNative } from './bridge.js';

let voices = [];
const load = () => { voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; };
if ('speechSynthesis' in window) { load(); speechSynthesis.onvoiceschanged = load; }
export const listVoices = () => voices;

const MALE = /(Andrew|Brian|Guy|Ryan|Christopher|Eric|Davis|Roger|Steffan|Prabhat|Madhur|Mohan|Rishi|Google UK English Male|Daniel|Aaron|Alex|Fred|Thomas|David|Mark|James|George|Male)/i;
const FEMALE = /(female|zira|heera|neerja|swara|samantha|susan|hazel|aria|jenny|sonia|libby|natasha|emma|ava|shruti|kalpana)/i;
export function pickVoice(name, lang = 'en-IN') {
  if (!voices.length) load();
  if (name) { const v = voices.find((x) => x.name === name); if (v) return v; }
  const L = lang.toLowerCase(), base = L.slice(0, 2);
  const same = voices.filter((v) => v.lang.toLowerCase().replace('_', '-') === L);
  const fam = voices.filter((v) => v.lang.toLowerCase().startsWith(base));
  const score = (v) => (MALE.test(v.name) && !FEMALE.test(v.name) ? 4 : 0) + (/natural|online|neural/i.test(v.name) ? 3 : 0) + (v.localService ? 0 : 1);
  const best = (list) => list.slice().sort((a, b) => score(b) - score(a))[0];
  return best(same) || best(fam) || best(voices.filter((v) => v.lang.startsWith('en'))) || voices[0] || null;
}

let current = null;
// speak(text) -> Promise. onLevel(0..1) drives the mouth, onWord() fires per word.
export function speak(text, { lang = 'en-IN', voice = '', rate = 1.02, pitch = 1.08, onLevel = () => {}, onWord = () => {} } = {}) {
  stopSpeaking();
  const run = { cancelled: false, done: null }; current = run;
  const clean = String(text || '').replace(/\[[^\]]*\]/g, '').replace(/[*_#`>]/g, '').replace(/https?:\/\/\S+/g, '').trim();
  if (!clean) return Promise.resolve();
  let pulse = 0, iv = setInterval(() => { if (run.cancelled) return; pulse *= 0.82; onLevel(Math.min(1, 0.32 + 0.45 * Math.abs(Math.sin(Date.now() / 85)) * Math.abs(Math.sin(Date.now() / 140 + 1)) + pulse)); }, 50);
  const finish = () => { clearInterval(iv); onLevel(0); };

  if (isNative()) {
    const offL = onNative('level', (v) => { if (!run.cancelled) pulse = Math.max(pulse, v * 0.5); });
    const offW = onNative('word', () => { pulse = 0.5; onWord(); });
    return callNative('speak', { text: clean, lang, rate, pitch }).catch(() => {}).finally(() => { offL(); offW(); finish(); });
  }
  if (!('speechSynthesis' in window)) { finish(); return Promise.resolve(); }
  return new Promise((resolve) => {
    let settled = false; const end = () => { if (settled) return; settled = true; finish(); resolve(); };
    run.done = end;
    // Chrome stops long utterances after ~15 s, so speak sentence by sentence.
    const parts = (clean.match(/[^.!?।\n]+[.!?।]*/g) || [clean]).map((s) => s.trim()).filter(Boolean);
    let i = 0; const v = pickVoice(voice, lang);
    const next = () => {
      if (run.cancelled || i >= parts.length) return end();
      const u = new SpeechSynthesisUtterance(parts[i++]);
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = lang;
      u.rate = rate; u.pitch = pitch;
      u.onboundary = () => { pulse = 0.55; onWord(); };
      u.onend = next; u.onerror = next;
      speechSynthesis.speak(u);
      // safety: some browsers never fire onend
      const ms = 1500 + parts[i - 1].length * 110 / rate; const myI = i;
      setTimeout(() => { if (i === myI && !speechSynthesis.speaking) next(); }, ms);
    };
    speechSynthesis.cancel(); setTimeout(next, 30);
  });
}
export function stopSpeaking() {
  const r = current; current = null;
  if (r) { r.cancelled = true; r.done?.(); }
  try { if (isNative()) callNative('stopSpeak'); else speechSynthesis.cancel(); } catch (e) { /* ignore */ }
}
export const isSpeaking = () => !!current && !current.cancelled;
export function unlockAudio() { // called on the first tap: browsers only allow speech after a user gesture
  try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); } catch (e) { /* ignore */ }
}
