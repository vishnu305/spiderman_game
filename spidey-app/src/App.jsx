// =====================================================================
//  SPIDEY 3D – main app (orchestrates 3D stage, voice, AI agent and news)
// =====================================================================
import React, { useEffect, useRef, useState } from 'react';
import { createStage } from './scene/stage.js';
import { EMOTE, BEATS } from './scene/gestures.js';
import { createListener } from './voice/listener.js';
import { createMimic } from './voice/mimic.js';
import { speak, stopSpeaking, unlockAudio } from './voice/speaker.js';
import { micAnalyser, micLevel, releaseMic, audioCtx } from './voice/mic.js';
import { isNative, nativeReady, callNative, onNative, wantsNative } from './voice/bridge.js';
import { ask, writeBulletin } from './ai/agent.js';
import { transcribe, hasGroq, listModels } from './ai/groq.js';
import { detectEmotion } from './ai/emotion.js';
import { getNews, COUNTRIES, findCountry, TOPICS } from './news/news.js';
import { IconTalk, IconRepeat, IconType, IconNews, IconMic, IconFun, IconSuit, IconGear } from './ui/Icons.jsx';
import { Splash, Settings, FunMenu, CountrySheet, NewsBar, LowerThird, Ticker, ComicBubble, TypeBar, WebSplat } from './ui/Panels.jsx';

const KEY = 'spidey3d.cfg';
const DEF = { groqKey: import.meta.env.VITE_GROQ_KEY || '', tavilyKey: import.meta.env.VITE_TAVILY_KEY || '', groqProxy: '', proxy: '', model: '', lang: 'en-IN', voice: '', rate: 1.02, pitch: 1.1, repeatPitch: 1.45, repeatStyle: 'tom', captions: false, remember: false };
const loadCfg = () => { try { const s = localStorage.getItem(KEY); return s ? { ...DEF, ...JSON.parse(s), remember: true } : DEF; } catch (e) { return DEF; } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const MODES = [['talk', 'TALK', IconTalk, 'blue'], ['repeat', 'REPEAT', IconRepeat, 'purple'], ['type', 'TYPE', IconType, 'orange'], ['news', 'NEWS', IconNews, 'red']];
const POKES = {
  head: ['ouch', ['Ouch! Watch the mask!', 'Hey, my spider-sense is tingling!', 'Not the head, I need that for science!']],
  body: ['tickle', ['Hehe, that tickles!', 'Ha ha, stop it!', 'Careful, this suit is dry-clean only!']],
  arm: ['superhero', ['Feel those web-slinging muscles!', 'Strong arms, strong heart!']],
  hand: ['highfive', ['High five!', 'Up top, buddy!']],
  leg: ['hop', ['Ow ow ow!', 'Hey, these legs climb walls!']],
  foot: ['hop', ['My toes! My poor toes!', 'Yikes, that was my foot!']],
};

export default function App() {
  const canvasRef = useRef(), stageRef = useRef(), ringRef = useRef();
  const [started, setStarted] = useState(false); const startedR = useRef(false);
  const [cfg, setCfgState] = useState(loadCfg); const cfgR = useRef(cfg); cfgR.current = cfg;
  const [mode, setModeState] = useState('talk'); const modeR = useRef('talk');
  const [mic, setMic] = useState(true); const micR = useRef(true);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false); const busyR = useRef(false);
  const [bubble, setBubble] = useState(''); const [caption, setCaption] = useState('');
  const [toast, setToast] = useState(''); const [splat, setSplat] = useState(0);
  const [panel, setPanel] = useState(null);
  const [news, setNewsState] = useState({ country: COUNTRIES[1], topic: 'top', when: 'today', from: new Date(Date.now() - 86400000 * 365).toISOString().slice(0, 10), items: [] });
  const newsR = useRef(news); newsR.current = news;
  const [lower, setLower] = useState(null); const [onAir, setOnAir] = useState(false); const onAirR = useRef(false); onAirR.current = onAir;
  const airRun = useRef(0), skipR = useRef(false), pageR = useRef(0), speakLock = useRef(0), seenR = useRef(new Set()), listenIdle = useRef(null);
  const [clock, setClock] = useState(''); const [info, setInfo] = useState('');
  const history = useRef([]); const listener = useRef(null), mimic = useRef(null);

  const say = (m) => { setToast(m); clearTimeout(say.t); say.t = setTimeout(() => setToast(''), 4500); };
  const setCfg = (c) => { setCfgState(c); try { c.remember ? localStorage.setItem(KEY, JSON.stringify(c)) : localStorage.removeItem(KEY); } catch (e) { /* ignore */ } };
  const st = () => stageRef.current, sp = () => stageRef.current?.spidey;

  // ---------------- 3D stage ----------------
  useEffect(() => {
    const s = createStage(canvasRef.current, { onPoke: (part) => poke(part), onWeb: () => setSplat(1 + (Date.now() % 100000)) });
    stageRef.current = s; window.stage = s;
    const onR = () => s.resize(), onM = (e) => s.pointer((e.clientX / innerWidth - 0.5) * 2, (e.clientY / innerHeight - 0.5) * 2);
    addEventListener('resize', onR); addEventListener('pointermove', onM);
    const c = setInterval(() => setClock(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })), 1000);
    nativeReady().then(async (ok) => { if (!ok) return; try { const k = await callNative('config'); if (k?.groqKey && !cfgR.current.groqKey) setCfg({ ...cfgR.current, groqKey: k.groqKey, tavilyKey: k.tavilyKey || '' }); } catch (e) { /* ignore */ } });
    if (wantsNative) setTimeout(() => start(), 1500);
    return () => { removeEventListener('resize', onR); removeEventListener('pointermove', onM); clearInterval(c); s.dispose(); };
  }, []);

  // live mic level -> mic ring + TV waveform
  useEffect(() => {
    let raf; const lvl = { v: 0 }; const offN = onNative('level', (v) => { lvl.v = v; });
    const loop = () => { raf = requestAnimationFrame(loop); const v = isNative() ? lvl.v : micLevel(); ringRef.current?.style.setProperty('--lv', micR.current ? v.toFixed(3) : 0); st()?.level(v); };
    loop(); return () => { cancelAnimationFrame(raf); offN(); };
  }, []);

  // ---------------- speaking with body language ----------------
  async function sayIt(text, { emotion = 'neutral', gesture = null, beats = true, captions = true, react = true } = {}) {
    const s = st(), p = sp(); if (!s || !text) return;
    const id = ++speakLock.current;
    listener.current?.pause(); mimic.current?.hold(true);
    p.setListening(false); p.stop('listen'); p.setEmotion(emotion);
    const seated = modeR.current === 'news';
    // react=false keeps the gesture the user just picked (actions/pokes) instead of replacing it with an emotion clip
    const g = gesture || (react && emotion !== 'neutral' ? EMOTE[emotion]?.[seated ? 1 : 0] : null);
    if (g) p.play(g, { onEvent: onClipEvent });
    if (cfgR.current.captions && captions) setCaption(text);
    setStatus('🗣️ Speaking');
    const beatIv = setInterval(() => { if (beats && !p.playing) p.play(seated ? pick(['present', 'beat1', 'beat4', 'nod']) : pick(BEATS)); }, 2400);
    await speak(text, { lang: cfgR.current.lang, voice: cfgR.current.voice, rate: cfgR.current.rate, pitch: cfgR.current.pitch, onLevel: (v) => p.setTalk(v) });
    clearInterval(beatIv); p.setTalk(0);
    if (id !== speakLock.current) return;
    setCaption(''); setStatus('');
    setTimeout(() => { if (id === speakLock.current) p.setEmotion('neutral'); }, 4500);
    if (micR.current) { if (modeR.current === 'repeat' && cfgR.current.repeatStyle === 'tom') mimic.current?.hold(false); else listener.current?.resume(); }
  }
  function onClipEvent(ev) { if (ev === 'web') st()?.web(); if (ev === 'flip') st()?.flipPage(pageR.current); }

  // ---------------- listening ----------------
  function setupVoice() {
    listener.current = createListener({
      onInterim: (t) => {
        if (busyR.current) return; const p = sp(); if (!p) return;
        if (modeR.current !== 'news' && !p.playing) p.play('listen', { hold: true });
        p.setListening(true); setStatus('👂 ' + t.slice(-42));
        clearTimeout(listenIdle.current);
        listenIdle.current = setTimeout(() => { p.stop('listen'); p.setListening(false); setStatus((s) => (s.startsWith('👂') ? '' : s)); }, 5000);
      },
      onFinal: (t) => { clearTimeout(listenIdle.current); const p = sp(); p?.setListening(false); p?.stop('listen'); setStatus(''); handleUtterance(t); },
      onError: (m) => say(m),
      canWhisper: () => hasGroq(cfgR.current),
      transcribe: (blob, lang) => transcribe(cfgR.current, blob, lang),
    });
    mimic.current = createMimic({
      onState: (s) => {
        const p = sp(); if (!p) return;
        if (s === 'hearing') { p.play('listen', { hold: true }); p.setEmotion('listening'); setStatus('👂 Hearing you…'); }
        if (s === 'playing') { p.stop('listen'); p.setEmotion('funny'); p.play(pick(['beat2', 'laugh', 'beat1', 'dance'])); setStatus('🔁 Repeating!'); }
        if (s === 'listening') { p.stop('listen'); p.setEmotion('neutral'); setStatus('🔁 Say something!'); }
      },
      onPlayLevel: (v) => sp()?.setTalk(Math.min(1, v * 1.6)),
    });
  }
  async function micStart(m = modeR.current) {
    if (!micR.current) return;
    if (!isNative()) micAnalyser().catch(() => say('Microphone blocked – click the 🔒 icon in the address bar and allow the mic.'));
    if (m === 'repeat' && cfgR.current.repeatStyle === 'tom') { listener.current.stop(); await mimic.current.start(cfgR.current.repeatPitch).catch((e) => say(e.message)); }
    else { mimic.current.stop(); listener.current.start(cfgR.current.lang); }
  }
  function micStop() { listener.current?.stop(); mimic.current?.stop(); if (!isNative()) releaseMic(); }
  function toggleMic() {
    const on = !micR.current; micR.current = on; setMic(on);
    if (on) { micStart(); say('🎙️ Mic on – I\'m listening!'); } else { micStop(); setStatus(''); say('🔇 Mic off'); }
  }

  // ---------------- start (first tap) ----------------
  async function start() {
    if (startedR.current) return; startedR.current = true;
    unlockAudio(); try { audioCtx(); } catch (e) { /* ignore */ }
    setStarted(true); setupVoice();
    refreshInfo(cfgR.current);
    st().setMode('talk'); st().tv({ mode: 'idle' });
    micStart('talk');
    await sayIt(`Hey! I'm Spidey, your friendly neighbourhood assistant. Just talk to me, poke me, or tap the icons on the left!`, { emotion: 'happy', gesture: 'hello' });
  }
  function refreshInfo(c) {
    if (!hasGroq(c)) return setInfo('ℹ️ No Groq key: Spidey uses the free offline brain (Wikipedia + DuckDuckGo + live news). Add a free key for full AI.');
    listModels(c).then((m) => setInfo(m.length ? `✅ Groq connected · ${m.length} models available` : '⚠️ Groq not reachable from this network – using the offline brain')).catch((e) => setInfo('⚠️ ' + e.message));
  }

  // ---------------- modes ----------------
  async function setMode(m) {
    if (m === modeR.current) return;
    airRun.current++; setOnAir(false); stopSpeaking(); setLower(null); setBubble(''); speakLock.current++;
    modeR.current = m; setModeState(m); setPanel(null); setStatus(''); setCaption('');
    const s = st(); s.setMode(m); s.tv({ mode: m === 'repeat' ? 'repeat' : m === 'news' ? 'news' : m === 'type' ? 'type' : 'idle' });
    if (micR.current) micStart(m);
    if (m === 'news') { refreshNews(true).then((items) => items.length && modeR.current === 'news' && startBulletin(items)); return; }
    const lines = { talk: ['Talk mode! Ask me anything – news, science, jokes, you name it.', 'happy', 'wave'], repeat: ['Repeat mode! Say something and I\'ll copy you, Talking-Tom style!', 'funny', 'laugh'], type: ['Type mode! Write your question below and I\'ll write back.', 'happy', 'point'] }[m];
    if (lines) sayIt(lines[0], { emotion: lines[1], gesture: lines[2] });
  }

  // ---------------- conversation ----------------
  const ctx = () => ({ cfg: cfgR.current, history: history.current, country: newsR.current.country, lang: cfgR.current.lang, headlines: newsR.current.items, onStatus: (t) => setStatus('🔎 ' + t), onNews: (items, country) => { if (modeR.current === 'news') applyNews(items, country); } });
  function remember(q, a) { history.current.push({ role: 'user', content: q }, { role: 'assistant', content: a }); if (history.current.length > 16) history.current.splice(0, history.current.length - 16); }

  async function answer(q, { text = false } = {}) {
    if (busyR.current) return; busyR.current = true; setBusy(true);
    const s = st(), p = sp(); p.play('think', { hold: true }); p.setEmotion('thinking'); s.tv({ mode: 'think' }); setStatus('💭 Thinking…'); setBubble('');
    listener.current?.pause();
    let r; try { r = await ask(q, ctx()); } catch (e) { r = { text: 'Oops, my web got tangled. Try again!', emotion: 'sad', gesture: 'shrug' }; say(e.message); }
    if (r.error) say(r.error);
    p.stop('think'); s.tv({ mode: modeR.current === 'news' ? 'news' : modeR.current === 'type' ? 'type' : 'idle' });
    remember(q, r.text); busyR.current = false; setBusy(false); setStatus('');
    if (text) {
      setBubble(r.text); p.setEmotion(r.emotion);
      const g = r.gesture || EMOTE[r.emotion]?.[modeR.current === 'news' ? 1 : 0]; if (g) p.play(g, { onEvent: onClipEvent });
      let k = 0; const iv = setInterval(() => p.setTalk(0.2 + 0.3 * Math.abs(Math.sin(k++ / 2))), 60); setTimeout(() => { clearInterval(iv); p.setTalk(0); }, Math.min(9000, r.text.length * 16 + 400));
      if (micR.current) listener.current?.resume();
    } else await sayIt(r.text, { emotion: r.emotion, gesture: r.gesture });
  }

  function command(t) {
    const s = t.toLowerCase().trim(), has = (re) => re.test(s);
    if (has(/\b(repeat|copy|mimic|talking tom)\b.*\bmode\b|^repeat after me|^copy me/)) { setMode('repeat'); return true; }
    if (has(/\b(type|typing|text|chat)\b.*\bmode\b/)) { setMode('type'); return true; }
    if (has(/\btalk(ing)? mode\b|^talk to me$/)) { setMode('talk'); return true; }
    if (has(/\bnews ?(mode|reader|channel)\b|^(read|start|tell)( me)? (the )?news$|^news$|^(open|show) (the )?news/)) { setMode('news'); return true; }
    if (has(/\b(mic|microphone) off\b|turn off (the )?(mic|microphone)/)) { toggleMic(); return true; }
    if (has(/^(stop|quiet|silence|shut up|be quiet|pause)\b/)) { airRun.current++; setOnAir(false); stopSpeaking(); return true; }
    if (modeR.current === 'news' && has(/^(next|skip)\b/)) { skipR.current = true; stopSpeaking(); return true; }
    if (has(/\b(back ?flip|somersault)\b|^(do a )?flip$/)) { fun('flip'); return true; }
    if (has(/^(do a |let'?s )?dance\b/)) { fun('dance'); return true; }
    if (has(/\b(shoot|sling)\b.*\bweb\b|\bthwip\b|web shooter/)) { fun('thwip'); return true; }
    if (has(/^(wave|say hi|say hello)\b/)) { fun('wave'); return true; }
    if (has(/^(do a )?jump\b/)) { fun('jump'); return true; }
    if (has(/\bchange (your )?(suit|outfit|clothes|dress|costume)\b|new (suit|outfit)/)) { outfit(); return true; }
    if (modeR.current === 'news') {
      const c = findCountry(s), tp = TOPICS.find(([k]) => new RegExp(`\\b${k === 'technology' ? 'tech(nology)?' : k}\\b`).test(s));
      if ((c || tp) && /\bnews\b/.test(s) && s.split(' ').length <= 6) { setNews({ ...(c ? { country: c } : {}), ...(tp ? { topic: tp[0] } : {}) }); return true; }
    }
    return false;
  }
  function handleUtterance(t) {
    if (!t || busyR.current) return;
    if (modeR.current === 'repeat') { if (cfgR.current.repeatStyle === 'voice') sayIt(t, { emotion: 'funny' }); return; }
    if (command(t)) return;
    if (modeR.current === 'news') { airRun.current++; setOnAir(false); stopSpeaking(); }
    answer(t, { text: modeR.current === 'type' });
  }

  // ---------------- fun stuff ----------------
  function fun(k) {
    setPanel(null); const p = sp();
    if (k === 'joke') return answer('Tell me a short funny Spider-Man joke', { text: modeR.current === 'type' });
    if (modeR.current === 'news' && ['flip', 'jump', 'hop'].includes(k)) return sayIt('Not at the news desk! Switch to talk mode and I\'ll show you.', { emotion: 'funny', gesture: 'shake' });
    clearTimeout(listenIdle.current); p.setListening(false); setStatus('');
    p.play(k, { onEvent: onClipEvent });
    const lines = { flip: 'Whee!', thwip: 'Thwip!', dance: 'Check out these moves!', wave: 'Hi there!', jump: 'Boing!', superhero: 'Your friendly neighbourhood Spider-Man!', highfive: 'High five!', bow: 'Thank you, thank you!', laugh: 'Ha ha ha!', shrug: 'Who knows?', facepalm: 'Oh, come on!' };
    if (lines[k]) setTimeout(() => sayIt(lines[k], { emotion: k === 'facepalm' ? 'sad' : 'happy', beats: false, react: false }), 250);
  }
  function outfit() { const name = sp().nextOutfit(); if (modeR.current !== 'news') sp().play('superhero'); sayIt(`How do I look in my ${name.toLowerCase()} outfit?`, { emotion: 'happy', beats: false, react: false }); }
  function poke(part) {
    if (!startedR.current || busyR.current) return;
    const p = sp(); let [g, lines] = POKES[part] || POKES.body;
    if (modeR.current === 'news' && g === 'hop') g = 'laugh';
    p.play(g, { onEvent: onClipEvent }); p.setEmotion(g === 'ouch' || g === 'hop' ? 'ouch' : 'funny');
    if (modeR.current === 'repeat' && cfgR.current.repeatStyle === 'tom') return;
    sayIt(pick(lines), { emotion: g === 'ouch' || g === 'hop' ? 'surprised' : 'funny', beats: false, captions: false, react: false });
  }

  // ---------------- news ----------------
  function applyNews(items, country) {
    const c = country || newsR.current.country; newsR.current = { ...newsR.current, items, country: c };
    setNewsState((n) => ({ ...n, items, country: c }));
    st()?.setPaper(items, 0); pageR.current = 0;
    if (items[0]) st()?.tv({ mode: 'news', headline: items[0].title, source: items[0].source, country: c.name.toUpperCase(), mood: detectEmotion(items[0].title) });
  }
  async function refreshNews(fresh = false, n = newsR.current) {
    if (fresh) setStatus('📰 Fetching ' + n.country.name + ' news…');
    try {
      const items = await getNews({ country: n.country, topic: n.topic, when: n.when, from: n.from, to: n.from }, cfgR.current);
      if (fresh) seenR.current = new Set();
      const newOnes = items.filter((i) => !seenR.current.has(i.title)); items.forEach((i) => seenR.current.add(i.title));
      if (fresh || newOnes.length) applyNews(items, n.country);
      if (fresh) setStatus('');
      return fresh ? items : newOnes;
    } catch (e) { say(e.message); setStatus(''); return []; }
  }
  function setNews(patch) {
    const n = { ...newsR.current, ...patch }; newsR.current = n; setNewsState(n); setPanel(null);
    airRun.current++; stopSpeaking();
    refreshNews(true, n).then((items) => items.length && modeR.current === 'news' && startBulletin(items));
  }
  // every minute: refresh and announce genuinely new headlines as BREAKING
  useEffect(() => {
    if (mode !== 'news' || news.when === 'past') return;
    const iv = setInterval(async () => {
      const fresh = await refreshNews(false);
      if (fresh.length && fresh.length < 10 && !busyR.current) {
        const it = fresh[0]; st().breaking(5);
        setLower({ title: it.title, source: it.source, time: it.time, breaking: true });
        if (!onAirR.current) sayIt(`Breaking news! ${it.title}. From ${it.source}.`, { emotion: detectEmotion(it.title) === 'sad' ? 'sad' : 'surprised' });
      }
    }, 60000);
    return () => clearInterval(iv);
  }, [mode, news.when, news.country, news.topic]);

  async function startBulletin(itemsIn) {
    const id = ++airRun.current, alive = () => airRun.current === id && modeR.current === 'news';
    const items = (itemsIn || newsR.current.items).slice(0, 8); if (!items.length) return;
    setOnAir(true); st().setOnAir(true); st().setRead(true); setStatus('📝 Spidey is reading the paper…');
    const bul = await writeBulletin(items, ctx()); if (!alive()) return;
    st().setRead(false); setStatus('');
    setLower({ title: `SPIDEY NEWS 24 · ${newsR.current.country.name.toUpperCase()}`, source: { live: 'Live – last hour', today: 'Today', week: 'This week', past: 'From ' + newsR.current.from, upcoming: 'Upcoming & scheduled events' }[newsR.current.when], tag: 'ON AIR' });
    await sayIt(bul.intro, { emotion: 'happy', gesture: 'present' }); if (!alive()) return;
    for (let i = 0; i < items.length; i++) {
      if (!alive()) return; const it = items[i], story = bul.stories[i] || { say: it.title, mood: 'neutral' };
      const pg = Math.floor(i / 3);
      if (pg !== pageR.current) { pageR.current = pg; sp().play('pageflip', { onEvent: onClipEvent }); await sleep(900); }
      st().tv({ mode: 'news', headline: it.title, source: it.source, country: newsR.current.country.name.toUpperCase(), mood: story.mood });
      setLower({ title: it.title, source: it.source, time: it.time, tag: `STORY ${i + 1}/${items.length}`, mood: story.mood });
      st().setRead(true); await sleep(1300); if (!alive()) return; st().setRead(false);
      skipR.current = false;
      await sayIt(story.say, { emotion: story.mood, gesture: story.mood === 'neutral' ? 'present' : null });
      await sleep(skipR.current ? 50 : 350);
    }
    if (!alive()) return;
    setLower(null); await sayIt(bul.outro, { emotion: 'happy', gesture: 'bow' });
    if (alive()) { setOnAir(false); st().setOnAir(false); st().setRead(true); }
  }
  function toggleAir() { if (onAir) { airRun.current++; setOnAir(false); st().setOnAir(false); stopSpeaking(); } else startBulletin(); }

  // ---------------- settings ----------------
  const forget = () => { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } history.current = []; setCfg({ ...DEF, groqKey: '', tavilyKey: '' }); say('🧹 Everything forgotten'); };
  useEffect(() => { if (startedR.current && modeR.current !== 'repeat') listener.current?.setLang(cfg.lang); }, [cfg.lang]);
  useEffect(() => { mimic.current?.setPitch(cfg.repeatPitch); }, [cfg.repeatPitch]);
  useEffect(() => { if (startedR.current) refreshInfo(cfg); }, [cfg.groqKey]);

  const modeLabel = { talk: 'TALK MODE', repeat: 'REPEAT MODE', type: 'TYPE MODE', news: 'SPIDEY NEWS 24' }[mode];
  return (
    <>
      <canvas ref={canvasRef} className="stage" />
      {!started && <Splash onStart={start} />}
      {started && (
        <>
          <div className="topbar">
            <div className={'modeBadge ' + mode}>{modeLabel}</div>
            {status && <div className="status">{status}</div>}
          </div>
          <div className="dock left">
            {MODES.map(([k, l, Icon, c]) => (
              <button key={k} className={`tile ${c}${mode === k ? ' active' : ''}`} onClick={() => setMode(k)} aria-label={l}><Icon /><span className="lbl">{l}</span></button>
            ))}
          </div>
          <div className="dock right">
            <button ref={ringRef} className={'tile mic ' + (mic ? 'green on' : 'gray')} onClick={toggleMic} aria-label="Microphone"><IconMic off={!mic} /><span className="lbl">{mic ? 'MIC ON' : 'MIC OFF'}</span></button>
            <button className="tile purple" onClick={() => setPanel(panel === 'fun' ? null : 'fun')} aria-label="Actions"><IconFun /><span className="lbl">ACTIONS</span></button>
            <button className="tile gold" onClick={outfit} aria-label="Outfit"><IconSuit /><span className="lbl">SUIT</span></button>
            <button className="tile steel" onClick={() => setPanel('settings')} aria-label="Settings"><IconGear /><span className="lbl">SETUP</span></button>
          </div>
          {mode === 'news' && <NewsBar news={news} setNews={setNews} onAir={onAir} onToggleAir={toggleAir} onNext={() => { skipR.current = true; stopSpeaking(); }} onCountry={() => setPanel('country')} clock={clock} />}
          {mode === 'news' && <><LowerThird data={lower} /><Ticker items={news.items} /></>}
          {mode === 'type' && <><ComicBubble text={bubble} onSpeak={() => sayIt(bubble, { emotion: 'happy' })} /><TypeBar onSend={(q) => answer(q, { text: true })} busy={busy} /></>}
          {caption && <div className="caption">{caption}</div>}
          {panel === 'fun' && <FunMenu onPick={fun} onClose={() => setPanel(null)} />}
          {panel === 'country' && <CountrySheet value={news.country.code} onPick={(c) => setNews({ country: c })} onClose={() => setPanel(null)} />}
          {panel === 'settings' && <Settings cfg={cfg} setCfg={setCfg} info={info} onClose={() => setPanel(null)} onForget={forget} onTest={() => sayIt('Hey, this is Spidey! How do I sound?', { emotion: 'happy', gesture: 'wave' })} />}
          <WebSplat id={splat} />
          {toast && <div className="toast">{toast}</div>}
        </>
      )}
    </>
  );
}
