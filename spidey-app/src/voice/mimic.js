// =====================================================================
//  MIMIC – the Talking-Tom trick: hear you, record, and play it back in a funny higher voice.
//  Pure Web Audio: works offline, any language, no API key.
// =====================================================================
import { micAnalyser, micLevel, audioCtx } from './mic.js';

export function createMimic({ onState, onPlayLevel }) {
  const st = { on: false, recording: false, playing: false, data: [], pre: [], loud: 0, quiet: 0, node: null, floor: 0.02, pitch: 1.45 };
  let analyserOut = null, outBuf = null;

  async function start(pitch = 1.45) {
    st.pitch = pitch; if (st.on) return; st.on = true;
    const { ctx, src } = await micAnalyser();
    const node = ctx.createScriptProcessor(2048, 1, 1); st.node = node;
    const mute = ctx.createGain(); mute.gain.value = 0; src.connect(node); node.connect(mute); mute.connect(ctx.destination);
    node.onaudioprocess = (e) => {
      if (!st.on || st.playing || st.held) return;
      const d = new Float32Array(e.inputBuffer.getChannelData(0));
      let s = 0; for (let i = 0; i < d.length; i++) s += d[i] * d[i]; const rms = Math.sqrt(s / d.length);
      if (!st.recording) st.floor = st.floor * 0.97 + Math.min(rms, 0.05) * 0.03;
      const thr = Math.max(0.018, st.floor * 2.8);
      if (rms > thr) { st.loud++; st.quiet = 0; } else { st.quiet++; }
      if (!st.recording) {
        st.pre.push(d); if (st.pre.length > 7) st.pre.shift();         // ~0.3 s pre-roll so the first word isn't cut
        if (st.loud >= 2) { st.recording = true; st.data = [...st.pre]; st.pre = []; onState?.('hearing'); }
        if (rms <= thr) st.loud = 0;
      } else {
        st.data.push(d);
        const secs = (st.data.length * 2048) / ctx.sampleRate;
        if (st.quiet > 16 || secs > 10) { st.recording = false; st.loud = 0; const chunks = st.data; st.data = []; if (secs > 0.45) play(chunks, ctx.sampleRate); else onState?.('listening'); }
      }
    };
    onState?.('listening');
  }

  function play(chunks, rate) {
    const ctx = audioCtx(), len = chunks.reduce((a, c) => a + c.length, 0), b = ctx.createBuffer(1, len, rate), ch = b.getChannelData(0);
    let o = 0; for (const c of chunks) { ch.set(c, o); o += c.length; }
    let peak = 0; for (let i = 0; i < len; i++) peak = Math.max(peak, Math.abs(ch[i])); const g = peak > 0 ? Math.min(4, 0.9 / peak) : 1;
    for (let i = 0; i < len; i++) ch[i] *= g;                          // normalise loudness
    const s = ctx.createBufferSource(); s.buffer = b; s.playbackRate.value = st.pitch;
    if (!analyserOut) { analyserOut = ctx.createAnalyser(); analyserOut.fftSize = 512; outBuf = new Float32Array(512); analyserOut.connect(ctx.destination); }
    s.connect(analyserOut); st.playing = true; onState?.('playing');
    let raf; const meter = () => { analyserOut.getFloatTimeDomainData(outBuf); let q = 0; for (let i = 0; i < outBuf.length; i++) q += outBuf[i] * outBuf[i]; onPlayLevel?.(Math.min(1, Math.sqrt(q / outBuf.length) * 5)); raf = requestAnimationFrame(meter); };
    meter();
    s.onended = () => { cancelAnimationFrame(raf); onPlayLevel?.(0); setTimeout(() => { st.playing = false; st.pre = []; st.loud = 0; st.quiet = 0; if (st.on) onState?.('listening'); }, 350); };
    s.start();
  }

  return {
    start, setPitch(p) { st.pitch = p; },
    hold(b) { st.held = b; if (!b) { st.pre = []; st.loud = 0; st.quiet = 0; st.recording = false; st.data = []; } },
    stop() { st.on = false; st.recording = false; try { st.node?.disconnect(); } catch (e) { /* ignore */ } st.node = null; onState?.('idle'); },
    get on() { return st.on; }, level: micLevel,
  };
}
