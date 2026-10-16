// Shared microphone stream + live level meter (used by the mic icon, the TV and Repeat mode).
let stream = null, ctx = null, src = null, analyser = null, buf = null;

export async function getMic() {
  if (stream && stream.active) return stream;
  stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
  return stream;
}
export function audioCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}
export async function micAnalyser() {
  const s = await getMic(); const c = audioCtx();
  if (!src || src.mediaStream !== s) { src = c.createMediaStreamSource(s); analyser = c.createAnalyser(); analyser.fftSize = 1024; src.connect(analyser); buf = new Float32Array(analyser.fftSize); }
  return { ctx: c, src, analyser };
}
export function micLevel() {
  if (!analyser) return 0;
  analyser.getFloatTimeDomainData(buf); let s = 0; for (let i = 0; i < buf.length; i++) s += buf[i] * buf[i];
  return Math.min(1, Math.sqrt(s / buf.length) * 6);
}
export function releaseMic() {
  try { stream?.getTracks().forEach((t) => t.stop()); } catch (e) { /* ignore */ }
  stream = null; src = null; analyser = null;
}
