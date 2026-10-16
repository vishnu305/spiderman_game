// =====================================================================
//  FREE WEB SEARCH (no key needed): Wikipedia + DuckDuckGo Instant Answers + Google News.
//  Optional upgrades: Tavily key (1,000 free searches / month) or Groq "compound" models (built-in web search).
// =====================================================================
import { fetchText } from '../news/news.js';
import { chat, searchModel, hasGroq } from './groq.js';

const strip = (h) => (h || '').replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();

export async function wikipedia(query, lang = 'en') {
  const s = await (await fetch(`https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*&srlimit=3`)).json();
  const hits = s.query?.search || []; const out = [];
  for (const h of hits.slice(0, 2)) {
    try { const p = await (await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(h.title.replace(/ /g, '_'))}`)).json(); if (p.extract) out.push({ title: p.title, snippet: p.extract, source: 'Wikipedia', url: p.content_urls?.desktop?.page }); } catch (e) { /* ignore */ }
  }
  return out;
}
async function ddg(query) {
  const j = await (await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`)).json();
  const out = [];
  if (j.Answer) out.push({ title: 'Answer', snippet: strip(String(j.Answer)), source: 'DuckDuckGo' });
  if (j.AbstractText) out.push({ title: j.Heading, snippet: j.AbstractText, source: j.AbstractSource || 'DuckDuckGo', url: j.AbstractURL });
  if (j.Definition) out.push({ title: 'Definition', snippet: j.Definition, source: j.DefinitionSource || 'DuckDuckGo' });
  (j.RelatedTopics || []).slice(0, 3).forEach((t) => t.Text && out.push({ title: t.Text.slice(0, 60), snippet: t.Text, source: 'DuckDuckGo', url: t.FirstURL }));
  return out;
}
async function newsSearch(query, cfg) {
  const xml = await fetchText(`https://news.google.com/rss/search?q=${encodeURIComponent(query + ' when:30d')}&hl=en-IN&gl=IN&ceid=IN:en`, cfg);
  const doc = new DOMParser().parseFromString(xml, 'text/xml');
  return [...doc.querySelectorAll('item')].slice(0, 5).map((it) => ({ title: strip(it.querySelector('title')?.textContent), snippet: strip(it.querySelector('title')?.textContent), source: strip(it.querySelector('source')?.textContent) || 'Google News', date: it.querySelector('pubDate')?.textContent, url: it.querySelector('link')?.textContent }));
}
async function tavily(query, key) {
  const r = await fetch('https://api.tavily.com/search', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key }, body: JSON.stringify({ query, max_results: 5, include_answer: true, search_depth: 'basic' }) });
  if (!r.ok) throw new Error('Tavily ' + r.status);
  const j = await r.json();
  return [...(j.answer ? [{ title: 'Answer', snippet: j.answer, source: 'Tavily' }] : []), ...(j.results || []).map((x) => ({ title: x.title, snippet: x.content, source: new URL(x.url).hostname, url: x.url }))];
}
async function groqCompound(query, cfg) {
  const m = await searchModel(cfg); if (!m) return [];
  const j = await chat(cfg, { messages: [{ role: 'user', content: `Search the web and give the latest facts with dates and sources (max 120 words): ${query}` }], max_tokens: 400 }, { pref: [m] });
  const t = j.choices?.[0]?.message?.content; return t ? [{ title: 'Web search', snippet: t, source: 'Groq web search' }] : [];
}

export async function webSearch(query, cfg = {}) {
  const jobs = [];
  if (cfg.tavilyKey) jobs.push(tavily(query, cfg.tavilyKey));
  else if (hasGroq(cfg)) jobs.push(groqCompound(query, cfg));
  jobs.push(ddg(query), wikipedia(query), newsSearch(query, cfg));
  const res = await Promise.allSettled(jobs);
  const out = res.flatMap((r) => (r.status === 'fulfilled' ? r.value : []));
  const seen = new Set(); return out.filter((x) => x.snippet && !seen.has(x.snippet.slice(0, 80)) && seen.add(x.snippet.slice(0, 80))).slice(0, 10);
}
