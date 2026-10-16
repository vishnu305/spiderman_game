// =====================================================================
//  NEWS ENGINE – every country, live / today / past dates / upcoming events.
//  Sources: Google News RSS (via proxy), GDELT 2.0 (direct, worldwide, back to 2017),
//           Wikipedia "On this day" (history), Hacker News (tech fallback).
//  Nothing is stored: results live in memory only.
// =====================================================================
import { isNative, callNative } from '../voice/bridge.js';

// [code, name, flag, googleEdition (English) or null, gdelt country name]
export const COUNTRIES = [
  ['WORLD', 'World', '🌍', 'US', ''], ['IN', 'India', '🇮🇳', 'IN', 'india'], ['US', 'United States', '🇺🇸', 'US', 'unitedstates'], ['GB', 'United Kingdom', '🇬🇧', 'GB', 'unitedkingdom'],
  ['AU', 'Australia', '🇦🇺', 'AU', 'australia'], ['CA', 'Canada', '🇨🇦', 'CA', 'canada'], ['NZ', 'New Zealand', '🇳🇿', 'NZ', 'newzealand'], ['IE', 'Ireland', '🇮🇪', 'IE', 'ireland'],
  ['ZA', 'South Africa', '🇿🇦', 'ZA', 'southafrica'], ['NG', 'Nigeria', '🇳🇬', 'NG', 'nigeria'], ['KE', 'Kenya', '🇰🇪', 'KE', 'kenya'], ['GH', 'Ghana', '🇬🇭', 'GH', 'ghana'],
  ['SG', 'Singapore', '🇸🇬', 'SG', 'singapore'], ['MY', 'Malaysia', '🇲🇾', 'MY', 'malaysia'], ['PH', 'Philippines', '🇵🇭', 'PH', 'philippines'], ['PK', 'Pakistan', '🇵🇰', 'PK', 'pakistan'],
  ['BD', 'Bangladesh', '🇧🇩', 'BD', 'bangladesh'], ['LK', 'Sri Lanka', '🇱🇰', null, 'srilanka'], ['NP', 'Nepal', '🇳🇵', null, 'nepal'], ['AE', 'UAE', '🇦🇪', null, 'unitedarabemirates'],
  ['SA', 'Saudi Arabia', '🇸🇦', null, 'saudiarabia'], ['IL', 'Israel', '🇮🇱', 'IL', 'israel'], ['IR', 'Iran', '🇮🇷', null, 'iran'], ['TR', 'Turkey', '🇹🇷', null, 'turkey'],
  ['EG', 'Egypt', '🇪🇬', null, 'egypt'], ['CN', 'China', '🇨🇳', null, 'china'], ['JP', 'Japan', '🇯🇵', null, 'japan'], ['KR', 'South Korea', '🇰🇷', null, 'southkorea'],
  ['ID', 'Indonesia', '🇮🇩', null, 'indonesia'], ['TH', 'Thailand', '🇹🇭', null, 'thailand'], ['VN', 'Vietnam', '🇻🇳', null, 'vietnam'], ['RU', 'Russia', '🇷🇺', null, 'russia'],
  ['UA', 'Ukraine', '🇺🇦', null, 'ukraine'], ['DE', 'Germany', '🇩🇪', null, 'germany'], ['FR', 'France', '🇫🇷', null, 'france'], ['IT', 'Italy', '🇮🇹', null, 'italy'],
  ['ES', 'Spain', '🇪🇸', null, 'spain'], ['NL', 'Netherlands', '🇳🇱', null, 'netherlands'], ['BR', 'Brazil', '🇧🇷', null, 'brazil'], ['MX', 'Mexico', '🇲🇽', null, 'mexico'],
  ['AR', 'Argentina', '🇦🇷', null, 'argentina'], ['QA', 'Qatar', '🇶🇦', null, 'qatar'], ['ET', 'Ethiopia', '🇪🇹', 'ET', 'ethiopia'], ['UG', 'Uganda', '🇺🇬', 'UG', 'uganda'],
].map(([code, name, flag, ed, gd]) => ({ code, name, flag, ed, gd }));
export const findCountry = (s) => {
  if (!s) return null; const q = s.toLowerCase();
  const alias = { usa: 'US', america: 'US', 'united states': 'US', uk: 'GB', britain: 'GB', england: 'GB', bharat: 'IN', hindustan: 'IN', dubai: 'AE', emirates: 'AE', korea: 'KR', world: 'WORLD', global: 'WORLD', international: 'WORLD' };
  for (const [k, v] of Object.entries(alias)) if (new RegExp(`\\b${k}\\b`).test(q)) return COUNTRIES.find((c) => c.code === v);
  return COUNTRIES.find((c) => new RegExp(`\\b${c.name.toLowerCase()}\\b`).test(q) || q === c.code.toLowerCase()) || null;
};
export const TOPICS = [['top', 'TOP'], ['world', 'WORLD'], ['business', 'BUSINESS'], ['technology', 'TECH'], ['sports', 'SPORTS'], ['entertainment', 'ENTERTAINMENT'], ['science', 'SCIENCE'], ['health', 'HEALTH']];
const GDELT_TOPIC = { top: '', world: '(world OR international)', business: '(business OR economy OR market)', technology: '(technology OR tech OR AI)', sports: '(sports OR cricket OR football)', entertainment: '(film OR music OR celebrity)', science: '(science OR space OR research)', health: '(health OR hospital OR disease)' };

const strip = (h) => (h || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const ymd = (d) => d.toISOString().slice(0, 10);

// ---------------- fetching through proxies ----------------
let proxyOK = null;
async function sameOriginProxy() {
  if (proxyOK !== null) return proxyOK;
  try { const r = await fetch('./gnews/rss?hl=en-US&gl=US&ceid=US:en', { cache: 'no-store' }); const t = await r.text(); proxyOK = r.ok && /<rss|<\?xml/.test(t.slice(0, 200)); } catch (e) { proxyOK = false; }
  return proxyOK;
}
export async function fetchText(url, cfg = {}) {
  if (isNative()) { const t = await callNative('fetchText', { url }); if (t) return t; }
  const tries = [];
  if (url.startsWith('https://news.google.com/') && (await sameOriginProxy())) tries.push('./gnews/' + url.slice('https://news.google.com/'.length));
  if (cfg.proxy) tries.push(cfg.proxy.includes('{url}') ? cfg.proxy.replace('{url}', encodeURIComponent(url)) : cfg.proxy.replace(/\/$/, '') + '/?url=' + encodeURIComponent(url));
  tries.push(url, 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url), 'https://corsproxy.io/?url=' + encodeURIComponent(url));
  let err;
  for (const u of tries) {
    try { const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 9000); const r = await fetch(u, { signal: ctl.signal }); clearTimeout(to); if (r.ok) { const t = await r.text(); if (t && t.length > 50) return t; } } catch (e) { err = e; }
  }
  throw err || new Error('fetch failed');
}

// ---------------- Google News RSS ----------------
function gnewsURL({ country, topic = 'top', query = '', from, to, when = 'today' }) {
  const c = country || COUNTRIES[1]; const ed = c.ed || 'US', lang = 'en';
  const p = `hl=${lang}-${ed}&gl=${ed}&ceid=${ed}:${lang}`;
  let q = query;
  if (!c.ed && c.code !== 'WORLD') q = `${c.name} ${q}`.trim();
  if (topic !== 'top' && (q || when !== 'today')) q = `${q} ${topic}`.trim();
  if (when === 'past' && from) { const end = new Date(to || from); end.setDate(end.getDate() + 1); q = `${q || (c.code === 'WORLD' ? 'world news' : c.name + ' news')} after:${from} before:${ymd(end)}`; }
  else if (when === 'upcoming') q = `${q || (c.code === 'WORLD' ? '' : c.name)} (upcoming OR "will be held" OR scheduled OR "set to" OR "next week") when:7d`.trim();
  else if (when === 'live') q = `${q || (c.code === 'WORLD' ? 'news' : c.name)} when:1h`;
  else if (when === 'week' && q) q = `${q} when:7d`;
  else if (q) q = `${q} when:1d`;
  if (q) return `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&${p}`;
  if (topic === 'top' || topic === 'world' && c.code === 'WORLD') return topic === 'world' ? `https://news.google.com/rss/headlines/section/topic/WORLD?${p}` : `https://news.google.com/rss?${p}`;
  return `https://news.google.com/rss/headlines/section/topic/${topic.toUpperCase()}?${p}`;
}
function parseRSS(xml) {
  const doc = new DOMParser().parseFromString(xml, 'text/xml');
  return [...doc.querySelectorAll('item')].map((it) => {
    const g = (s) => it.querySelector(s)?.textContent || '';
    let title = strip(g('title')); const source = strip(g('source')) || (title.match(/ - ([^-]+)$/)?.[1] || 'News');
    title = title.replace(/ - [^-]+$/, '');
    const desc = strip(g('description')).replace(title, '').replace(source, '').trim();
    return { title, desc: desc.length > 20 ? desc : '', source, url: g('link'), time: Date.parse(g('pubDate')) || Date.now() };
  }).filter((x) => x.title);
}
async function googleNews(opts, cfg) { return parseRSS(await fetchText(gnewsURL(opts), cfg)); }

// ---------------- GDELT (CORS-friendly, max 1 request / 5 s) ----------------
let gdeltLast = 0;
async function gdelt({ country, topic = 'top', query = '', from, to, when }) {
  const wait = gdeltLast + 5500 - Date.now(); if (wait > 0) await new Promise((r) => setTimeout(r, wait)); gdeltLast = Date.now();
  const kw = (query || GDELT_TOPIC[topic] || '').trim() || 'news';
  let q = kw.includes(' ') && !kw.startsWith('(') ? `"${kw}"` : kw;
  if (country?.gd) q += ` sourcecountry:${country.gd}`; q += ' sourcelang:english';
  let range = '&timespan=' + (when === 'live' ? '1h' : when === 'week' || when === 'upcoming' ? '7d' : '1d');
  if (when === 'past' && from) { const f = from.replace(/-/g, ''), t2 = (to || from).replace(/-/g, ''); range = `&startdatetime=${f}000000&enddatetime=${t2}235959`; }
  const r = await fetch(`https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(q)}&mode=artlist&format=json&maxrecords=40&sort=datedesc${range}`);
  const txt = await r.text(); if (!txt.startsWith('{')) throw new Error('GDELT: ' + txt.slice(0, 80));
  return (JSON.parse(txt).articles || []).map((a) => ({ title: strip(a.title), desc: '', source: a.domain, url: a.url, time: Date.parse(a.seendate.replace(/(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)Z/, '$1-$2-$3T$4:$5:$6Z')) || Date.now() }));
}

// ---------------- Wikipedia ----------------
export async function onThisDay(date = new Date()) {
  const m = String(date.getMonth() + 1).padStart(2, '0'), d = String(date.getDate()).padStart(2, '0');
  const j = await (await fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/selected/${m}/${d}`)).json();
  return (j.selected || []).slice(0, 15).map((e) => ({ title: `${e.year}: ${strip(e.text)}`, desc: e.pages?.[0]?.extract || '', source: 'Wikipedia · On this day', url: e.pages?.[0]?.content_urls?.desktop?.page || '', time: Date.UTC(e.year, date.getMonth(), date.getDate()) }));
}
async function wikiInTheNews() {
  const d = new Date(), p = (n) => String(n).padStart(2, '0');
  const j = await (await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${d.getUTCFullYear()}/${p(d.getUTCMonth() + 1)}/${p(d.getUTCDate())}`)).json();
  return (j.news || []).map((n) => ({ title: strip(n.story).slice(0, 180), desc: strip(n.story), source: 'Wikipedia · In the news', url: n.links?.[0]?.content_urls?.desktop?.page || '', time: Date.now() }));
}

const norm = (t) => t.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').slice(0, 8).join(' ');
function dedupe(list) { const seen = new Set(); return list.filter((x) => { const k = norm(x.title); if (!k || seen.has(k)) return false; seen.add(k); return true; }); }

// Main entry: { country, topic, query, when: 'live'|'today'|'week'|'past'|'upcoming', from, to }
export async function getNews(opts, cfg = {}) {
  const errors = []; let items = [];
  try { items = await googleNews(opts, cfg); } catch (e) { errors.push('Google News: ' + e.message); }
  if (items.length < 6) { try { items = items.concat(await gdelt(opts)); } catch (e) { errors.push(e.message); } }
  if (!items.length && (!opts.country || opts.country.code === 'WORLD') && opts.when !== 'past') { try { items = await wikiInTheNews(); } catch (e) { errors.push('Wikipedia: ' + e.message); } }
  if (opts.when === 'past' && opts.from && items.length < 3) { try { items = items.concat(await onThisDay(new Date(opts.from))); } catch (e) { /* ignore */ } }
  items = dedupe(items);
  if (opts.when !== 'past') items.sort((a, b) => b.time - a.time);
  if (!items.length) throw new Error('No news found. ' + errors.join(' | '));
  return items.slice(0, 40);
}
