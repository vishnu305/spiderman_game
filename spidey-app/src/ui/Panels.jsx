import React, { useEffect, useState } from 'react';
import { COUNTRIES, TOPICS } from '../news/news.js';
import { listVoices } from '../voice/speaker.js';
import { IconPlay, IconNext, IconSend, IconSpeaker } from './Icons.jsx';

const B = import.meta.env.BASE_URL;

export function Splash({ onStart, loading }) {
  return (
    <div className="splash" style={{ backgroundImage: `url(${B}img/spidey-hero.webp)` }}>
      <div className="splashShade" />
      <div className="splashWeb" />
      <div className="splashTitle"><span>SPIDEY</span><b>3D</b></div>
      <div className="splashSub">TALK · REPEAT · TYPE · NEWS</div>
      <button className="startBtn" onClick={onStart} disabled={loading}>{loading ? 'LOADING…' : 'TAP TO START'}</button>
      <div className="splashNote">🎙️ Mic switches on automatically · 🔒 nothing is stored</div>
    </div>
  );
}

export function Settings({ cfg, setCfg, onClose, onForget, onTest, info }) {
  const set = (k, num) => (e) => setCfg({ ...cfg, [k]: e.target.type === 'checkbox' ? e.target.checked : num ? +e.target.value : e.target.value });
  const [voices, setVoices] = useState(listVoices());
  useEffect(() => { const t = setTimeout(() => setVoices(listVoices()), 600); return () => clearTimeout(t); }, []);
  return (
    <div className="sheet" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="card">
        <h2>SPIDEY SETTINGS</h2>
        <div className="priv">🔒 Privacy: keys, voice and answers stay in memory only and vanish when you close the app — unless you tick “Remember on this device”.</div>
        <label>Groq API key (FREE · console.groq.com/keys) – makes Spidey smart</label>
        <input type="password" value={cfg.groqKey} onChange={set('groqKey')} placeholder="gsk_…" autoComplete="off" />
        <label>Tavily key (optional · free 1,000 searches/month · app.tavily.com)</label>
        <input type="password" value={cfg.tavilyKey} onChange={set('tavilyKey')} placeholder="tvly-…" autoComplete="off" />
        <div className="row2">
          <div><label>Language (listen + speak)</label>
            <select value={cfg.lang} onChange={set('lang')}>{[['en-IN', 'English (India)'], ['en-US', 'English (US)'], ['en-GB', 'English (UK)'], ['hi-IN', 'हिन्दी Hindi'], ['te-IN', 'తెలుగు Telugu'], ['ta-IN', 'தமிழ் Tamil'], ['kn-IN', 'ಕನ್ನಡ Kannada'], ['ml-IN', 'മലയാളം Malayalam'], ['mr-IN', 'मराठी Marathi'], ['bn-IN', 'বাংলা Bengali']].map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></div>
          <div><label>Spidey's voice</label>
            <select value={cfg.voice} onChange={set('voice')}><option value="">Auto (best male voice)</option>{voices.map((v) => <option key={v.name} value={v.name}>{v.name.replace('Microsoft ', '').slice(0, 38)} ({v.lang})</option>)}</select></div>
        </div>
        <div className="row2">
          <div><label>Voice pitch {cfg.pitch.toFixed(2)}</label><input type="range" min="0.6" max="1.6" step="0.02" value={cfg.pitch} onChange={set('pitch', 1)} /></div>
          <div><label>Voice speed {cfg.rate.toFixed(2)}</label><input type="range" min="0.7" max="1.5" step="0.02" value={cfg.rate} onChange={set('rate', 1)} /></div>
        </div>
        <div className="row2">
          <div><label>Repeat style</label><select value={cfg.repeatStyle} onChange={set('repeatStyle')}><option value="tom">Talking-Tom (your voice, funny pitch)</option><option value="voice">Spidey's voice (speech-to-text)</option></select></div>
          <div><label>Repeat pitch {cfg.repeatPitch.toFixed(2)}</label><input type="range" min="0.7" max="2" step="0.05" value={cfg.repeatPitch} onChange={set('repeatPitch', 1)} /></div>
        </div>
        <label>Proxy URL (optional – only if Google News is blocked on your host; e.g. your Cloudflare Worker)</label>
        <input value={cfg.proxy} onChange={set('proxy')} placeholder="https://spidey-proxy.yourname.workers.dev" />
        <label className="chk"><input type="checkbox" checked={cfg.captions} onChange={set('captions')} /> Show small captions of what Spidey says (off = pure voice)</label>
        <label className="chk"><input type="checkbox" checked={cfg.remember} onChange={set('remember')} /> Remember settings on this device</label>
        <div className="info">{info}</div>
        <div className="btns"><button className="b gold" onClick={onTest}>🔊 TEST VOICE</button><button className="b red" onClick={onClose}>DONE</button></div>
        <button className="b ghost" onClick={onForget}>Forget everything now</button>
        <small>Spider-Man is © Marvel. This is a personal fan project for learning – do not publish commercially.</small>
      </div>
    </div>
  );
}

export const FUN_LIST = [['wave', '👋', 'Wave'], ['flip', '🤸', 'Back-flip'], ['thwip', '🕸️', 'Shoot web'], ['dance', '🕺', 'Dance'], ['jump', '⬆️', 'Jump'], ['laugh', '😂', 'Laugh'], ['superhero', '🦸', 'Hero pose'], ['highfive', '✋', 'High five'], ['bow', '🙇', 'Bow'], ['shrug', '🤷', 'Shrug'], ['facepalm', '🤦', 'Facepalm'], ['joke', '🎤', 'Tell a joke']];
export function FunMenu({ onPick, onClose }) {
  return (
    <div className="pop fun" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="popCard">{FUN_LIST.map(([k, e, l]) => <button key={k} className="funBtn" onClick={() => onPick(k)}><span>{e}</span>{l}</button>)}</div>
    </div>
  );
}

export function CountrySheet({ value, onPick, onClose }) {
  const [q, setQ] = useState('');
  const list = COUNTRIES.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="sheet" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="card countries">
        <h2>PICK A COUNTRY</h2>
        <input placeholder="Search country…" value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="cgrid">{list.map((c) => <button key={c.code} className={'cbtn' + (value === c.code ? ' sel' : '')} onClick={() => onPick(c)}><span>{c.flag}</span>{c.name}</button>)}</div>
      </div>
    </div>
  );
}

export function NewsBar({ news, setNews, onAir, onToggleAir, onNext, onCountry, clock }) {
  const whenList = [['live', '🔴 LIVE'], ['today', 'TODAY'], ['week', 'WEEK'], ['past', '📅 PAST'], ['upcoming', '⏭ UPCOMING']];
  return (
    <div className="newsbar">
      <div className="nbRow">
        <button className="ctry" onClick={onCountry}><span>{news.country.flag}</span>{news.country.name}<i>▾</i></button>
        <div className="clock">{clock}</div>
        <button className={'air' + (onAir ? ' on' : '')} onClick={onToggleAir}><IconPlay stop={onAir} />{onAir ? 'STOP' : 'ON AIR'}</button>
        {onAir && <button className="air next" onClick={onNext}><IconNext />NEXT</button>}
      </div>
      <div className="nbRow chips">
        {TOPICS.map(([k, l]) => <button key={k} className={'chip' + (news.topic === k ? ' sel' : '')} onClick={() => setNews({ topic: k })}>{l}</button>)}
      </div>
      <div className="nbRow chips">
        {whenList.map(([k, l]) => <button key={k} className={'chip when' + (news.when === k ? ' sel' : '')} onClick={() => setNews({ when: k })}>{l}</button>)}
        {news.when === 'past' && <input type="date" className="date" value={news.from} max={new Date().toISOString().slice(0, 10)} min="2015-01-01" onChange={(e) => setNews({ from: e.target.value })} />}
      </div>
    </div>
  );
}

export function LowerThird({ data }) {
  if (!data) return null;
  return (
    <div className={'lower' + (data.breaking ? ' brk' : '')} key={data.title}>
      <div className="tag">{data.breaking ? '⚡ BREAKING' : data.tag || 'NEWS'}</div>
      <div className="head">{data.title}</div>
      <div className="meta">{data.source}{data.time ? ' · ' + new Date(data.time).toLocaleString([], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : ''}{data.mood ? ' · ' + data.mood : ''}</div>
    </div>
  );
}

export function Ticker({ items }) {
  const text = items.length ? items.map((i) => i.title).join('   🕷   ') : 'Fetching the latest headlines…';
  return <div className="ticker"><div className="tkLabel">SN24</div><div className="tkTrack"><div className="tk" key={text.length} style={{ animationDuration: Math.max(40, text.length / 9) + 's' }}>{text}   🕷   {text}</div></div></div>;
}

// typewriter comic bubble used by TYPE mode ("unique texting")
export function ComicBubble({ text, onSpeak, onDone }) {
  const [n, setN] = useState(0);
  useEffect(() => { setN(0); if (!text) return; let i = 0; const iv = setInterval(() => { i += 2; setN(i); if (i >= text.length) { clearInterval(iv); onDone?.(); } }, 32); return () => clearInterval(iv); }, [text]);
  if (!text) return null;
  return (
    <div className="bubble">
      <div className="bTitle">SPIDEY SAYS!</div>
      <div className="bText">{text.slice(0, n)}<span className="caret">▌</span></div>
      <button className="bSpeak" onClick={onSpeak} title="Read aloud"><IconSpeaker /></button>
    </div>
  );
}
export function TypeBar({ onSend, busy }) {
  const [v, setV] = useState('');
  const go = () => { if (v.trim() && !busy) { onSend(v.trim()); setV(''); } };
  return (
    <div className="typebar">
      <input value={v} onChange={(e) => setV(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && go()} placeholder={busy ? 'Spidey is thinking…' : 'Type your question for Spidey…'} />
      <button onClick={go} disabled={busy}><IconSend /></button>
    </div>
  );
}

export function WebSplat({ id }) {
  if (!id) return null;
  const x = 20 + ((id * 37) % 60), y = 18 + ((id * 53) % 50);
  return (
    <div className="splat" key={id} style={{ left: x + '%', top: y + '%' }}>
      <svg viewBox="0 0 200 200">{[...Array(12)].map((_, i) => { const a = (i / 12) * Math.PI * 2; return <path key={i} d={`M100 100L${100 + 95 * Math.cos(a)} ${100 + 95 * Math.sin(a)}`} />; })}
        {[18, 36, 56, 78].map((r) => <polygon key={r} points={[...Array(12)].map((_, i) => { const a = (i / 12) * Math.PI * 2, rr = r * (i % 2 ? 0.9 : 1); return `${100 + rr * Math.cos(a)},${100 + rr * Math.sin(a)}`; }).join(' ')} />)}</svg>
      <b>THWIP!</b>
    </div>
  );
}
