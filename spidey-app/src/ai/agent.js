// =====================================================================
//  SPIDEY AGENT – agentic AI with tool calling (Groq LLM) + RAG fallbacks + an offline brain.
//  Flow:  question -> LLM decides which tools to call (news / web / wikipedia / history)
//         -> tools run in the browser -> results go back to the LLM -> short spoken answer
//         -> answer starts with [emotion|gesture] tags that drive Spidey's face and body.
// =====================================================================
import { chat, complete, hasGroq } from './groq.js';
import { webSearch, wikipedia } from './search.js';
import { getNews, onThisDay, findCountry, COUNTRIES, TOPICS } from '../news/news.js';
import { bm25 } from './rag.js';
import { detectEmotion } from './emotion.js';

export const EMOTIONS = ['happy', 'sad', 'surprised', 'serious', 'excited', 'funny', 'scared', 'thinking', 'neutral', 'angry'];
export const GESTURES = ['wave', 'flip', 'thwip', 'dance', 'jump', 'laugh', 'superhero', 'highfive', 'bow', 'shrug', 'facepalm', 'nod', 'shake', 'point', 'cheer'];
const LANGS = { en: 'English', hi: 'Hindi', te: 'Telugu', ta: 'Tamil', kn: 'Kannada', ml: 'Malayalam', mr: 'Marathi', bn: 'Bengali', gu: 'Gujarati', ur: 'Urdu', es: 'Spanish', fr: 'French', de: 'German' };

function persona(ctx) {
  const now = new Date();
  const onScreen = (ctx.headlines || []).slice(0, 8).map((h, i) => `${i + 1}. ${h.title} (${h.source})`).join('\n');
  return `You are Spidey, the friendly neighbourhood Spider-Man: a 3D talking companion (like Talking Tom) and the retro anchor of "Spidey News 24".
Your words are SPOKEN ALOUD by a voice engine, so:
- Reply in 1-4 short sentences (about 70 words max) unless the user asks for detail, a story or a list.
- No markdown, bullets, emojis or URLs. Natural spoken style, warm, witty, Peter-Parker-nerdy, always kind and safe.
- ALWAYS begin with a tag: [emotion] or [emotion|gesture]. emotion is one of ${EMOTIONS.join(', ')}. gesture (optional) is one of ${GESTURES.join(', ')}.
- Reply in the user's language (default ${LANGS[(ctx.lang || 'en').slice(0, 2)] || 'English'}).
- Today is ${now.toDateString()}, local time ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}. Default country: ${ctx.country?.name || 'India'}.
- For news, current events, sports scores, prices, weather, elections, people in the news, or anything that may have changed recently: CALL A TOOL FIRST. Never invent facts. Briefly name the source.
- Past news: get_news with when="past" and from_date/to_date. "Future" news: when="upcoming" and say these are scheduled or expected events, not predictions.
- If tools give nothing useful, say so honestly and suggest another question.${onScreen ? `\nHeadlines currently on Spidey's TV (you may use them):\n${onScreen}` : ''}`;
}

const TOOLS = [
  { type: 'function', function: { name: 'get_news', description: 'Get real news headlines for any country, topic and time (live last hour, today, this week, a past date range, or upcoming scheduled events).', parameters: { type: 'object', properties: { country: { type: 'string', description: 'Country name, or "world"' }, topic: { type: 'string', enum: TOPICS.map((t) => t[0]) }, query: { type: 'string', description: 'Optional keywords, e.g. "cricket", "elections", "ISRO"' }, when: { type: 'string', enum: ['live', 'today', 'week', 'past', 'upcoming'] }, from_date: { type: 'string', description: 'YYYY-MM-DD for past news' }, to_date: { type: 'string', description: 'YYYY-MM-DD for past news' } }, required: ['when'] } } },
  { type: 'function', function: { name: 'web_search', description: 'Search the web for facts, recent information, prices, scores, how-to, definitions.', parameters: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] } } },
  { type: 'function', function: { name: 'wikipedia', description: 'Encyclopedia lookup for people, places, history, science.', parameters: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] } } },
  { type: 'function', function: { name: 'on_this_day', description: 'Historic events that happened on a calendar day in past years.', parameters: { type: 'object', properties: { month: { type: 'integer' }, day: { type: 'integer' } }, required: ['month', 'day'] } } },
];

const short = (s, n = 280) => (s || '').length > n ? s.slice(0, n) + '…' : s || '';
const fmtItems = (items) => items.map((x) => ({ title: x.title, source: x.source, date: x.time ? new Date(x.time).toISOString().slice(0, 10) : x.date, info: short(x.desc || x.snippet) }));

async function runTool(name, args, ctx) {
  const cfg = ctx.cfg;
  if (name === 'get_news') {
    const country = args.country ? (findCountry(args.country) || COUNTRIES[0]) : ctx.country;
    let items = await getNews({ country, topic: args.topic || 'top', query: args.query || '', when: args.when || 'today', from: args.from_date, to: args.to_date }, cfg);
    if (args.query) { const rank = bm25(items, (x) => x.title + ' ' + x.desc); const r = rank(args.query, 8); if (r.length >= 3) items = r; }
    ctx.onNews?.(items, country);
    return JSON.stringify({ country: country?.name, results: fmtItems(items.slice(0, 8)) });
  }
  if (name === 'web_search') return JSON.stringify(fmtItems(await webSearch(args.query, cfg)));
  if (name === 'wikipedia') return JSON.stringify(fmtItems(await wikipedia(args.query, (ctx.lang || 'en').slice(0, 2))));
  if (name === 'on_this_day') { const d = new Date(); d.setMonth((args.month || 1) - 1, args.day || 1); return JSON.stringify(fmtItems((await onThisDay(d)).slice(0, 8))); }
  return '[]';
}

export function parseTags(raw) {
  let text = String(raw || '').replace(/<think>[\s\S]*?<\/think>/g, '').trim(), emotion = null, gesture = null;
  const m = text.match(/^\s*\[([a-z]+)(?:\s*[|,/]\s*([a-z]+))?\]\s*/i);
  if (m) { emotion = m[1].toLowerCase(); gesture = m[2]?.toLowerCase() || null; text = text.slice(m[0].length); }
  text = text.replace(/\[[a-z|, ]+\]/gi, '').replace(/[*#_`]/g, '').trim();
  if (!EMOTIONS.includes(emotion)) emotion = detectEmotion(text);
  if (gesture && !GESTURES.includes(gesture)) gesture = null;
  return { text, emotion, gesture };
}

const NEWSY = /\b(news|headline|headlines|happening|happened|latest|today|yesterday|tonight|current|live|score|match|election|results?|price|weather|breaking|update|this week|last (week|month|year)|upcoming|next week|(19|20)\d\d)\b/i;

// classic RAG (used if the model fails at tool calling)
async function classicRAG(q, ctx) {
  const country = findCountry(q) || ctx.country; let docs = [];
  const jobs = [webSearch(q, ctx.cfg)]; if (NEWSY.test(q)) jobs.push(getNews({ country, topic: 'top', query: q.replace(NEWSY, '').trim().split(/\s+/).length > 2 ? q : '', when: 'today' }, ctx.cfg));
  for (const r of await Promise.allSettled(jobs)) if (r.status === 'fulfilled') docs = docs.concat(r.value);
  const rank = bm25(docs, (x) => `${x.title} ${x.desc || ''} ${x.snippet || ''}`); const top = rank(q, 6); const ctxDocs = (top.length ? top : docs.slice(0, 6));
  const context = fmtItems(ctxDocs).map((x, i) => `[${i + 1}] ${x.title} — ${x.info} (${x.source}${x.date ? ', ' + x.date : ''})`).join('\n');
  const raw = await complete(ctx.cfg, [{ role: 'system', content: persona(ctx) }, ...ctx.history.slice(-6), { role: 'user', content: `CONTEXT (search results):\n${context || '(nothing found)'}\n\nQUESTION: ${q}` }], { temperature: 0.4, max_tokens: 350 });
  return parseTags(raw);
}

// offline brain: no API key needed
const JOKES = ['Why did Spider-Man join the computer club? He wanted to improve his web design!', 'What does Spider-Man do before every big fight? He checks his web-site for updates!', 'Why are spiders great baseball players? They know how to catch flies!', 'Why did the spider get a job in IT? He was great at the web!'];
async function offline(q, ctx) {
  const s = q.toLowerCase();
  if (/^(hi|hello|hey|hai|namaste|good (morning|evening|afternoon))\b/.test(s)) return { text: `Hey there! Spidey here, your friendly neighbourhood assistant. Ask me anything, or say "news" and I'll read today's headlines!`, emotion: 'happy', gesture: 'wave' };
  if (/(your name|who are you|what are you)/.test(s)) return { text: `I'm Spidey! Part superhero, part newsreader, full-time web enthusiast.`, emotion: 'happy', gesture: 'superhero' };
  if (/\btime\b/.test(s) && /what|tell/.test(s)) return { text: `It's ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} right now.`, emotion: 'neutral', gesture: 'nod' };
  if (/\b(date|day is it|today's date)\b/.test(s)) return { text: `Today is ${new Date().toDateString()}.`, emotion: 'neutral', gesture: 'nod' };
  if (/joke|funny/.test(s)) return { text: JOKES[Math.floor(Math.random() * JOKES.length)], emotion: 'funny', gesture: 'laugh' };
  if (NEWSY.test(s)) {
    const country = findCountry(s) || ctx.country; const items = await getNews({ country, topic: 'top', when: 'today' }, ctx.cfg); ctx.onNews?.(items, country);
    return { text: `Top headlines from ${country.name}. ${items.slice(0, 3).map((x, i) => `${i + 1}: ${x.title}, from ${x.source}.`).join(' ')}`, emotion: detectEmotion(items.slice(0, 3).map((x) => x.title).join(' ')), gesture: null };
  }
  const res = await webSearch(q, ctx.cfg).catch(() => []);
  const best = res.find((x) => x.source === 'Wikipedia' || x.source === 'DuckDuckGo') || res[0];
  if (best) { const two = (best.snippet.match(/[^.!?]+[.!?]/g) || [best.snippet]).slice(0, 2).join(' '); return { text: `Here's what my spider-sense found on ${best.source}: ${two}`, emotion: 'thinking', gesture: 'point' }; }
  return { text: `Hmm, my spider-sense came up empty on that one. Add a free Groq key in settings to make me super smart!`, emotion: 'sad', gesture: 'shrug' };
}

// MAIN: ask(question, ctx) -> { text, emotion, gesture }
// ctx: { cfg, history (array, in memory only), country, lang, headlines, onStatus, onNews }
export async function ask(q, ctx) {
  if (!hasGroq(ctx.cfg)) return offline(q, ctx);
  const msgs = [{ role: 'system', content: persona(ctx) }, ...ctx.history.slice(-8), { role: 'user', content: q }];
  try {
    for (let step = 0; step < 4; step++) {
      const j = await chat(ctx.cfg, { messages: msgs, tools: TOOLS, tool_choice: 'auto', temperature: 0.5, max_tokens: 500 });
      const m = j.choices[0].message;
      if (m.tool_calls?.length) {
        msgs.push({ role: 'assistant', content: m.content || '', tool_calls: m.tool_calls });
        for (const call of m.tool_calls) {
          let args = {}; try { args = JSON.parse(call.function.arguments || '{}'); } catch (e) { /* ignore */ }
          ctx.onStatus?.(call.function.name === 'get_news' ? 'Checking the news…' : call.function.name === 'web_search' ? 'Searching the web…' : 'Looking it up…');
          let out; try { out = await runTool(call.function.name, args, ctx); } catch (e) { out = JSON.stringify({ error: e.message }); }
          msgs.push({ role: 'tool', tool_call_id: call.id, content: short(out, 6000) });
        }
        continue;
      }
      if (m.content) return parseTags(m.content);
    }
    return parseTags(await complete(ctx.cfg, msgs.filter((x) => x.role !== 'tool' && !x.tool_calls), { max_tokens: 300 }));
  } catch (e) {
    if (e.status === 401) return { text: 'My Groq key was rejected. Please check it in settings.', emotion: 'sad', gesture: 'shrug', error: e.message };
    try { return await classicRAG(q, ctx); } catch (e2) { try { return await offline(q, ctx); } catch (e3) { return { text: 'My web signal is weak right now. Check the internet and try again!', emotion: 'sad', gesture: 'shrug', error: e2.message }; } }
  }
}

// ---------- news bulletin writer ----------
export async function writeBulletin(items, ctx) {
  const lang = LANGS[(ctx.lang || 'en').slice(0, 2)] || 'English';
  const fallback = () => ({ intro: `Good ${greet()}! This is Spidey News 24, live from ${ctx.country?.name || 'around the world'}.`, stories: items.map((s) => ({ say: `${s.title}. ${s.desc && s.desc.length > 30 ? (s.desc.match(/[^.!?]+[.!?]/) || [''])[0] : ''} That's from ${s.source}.`, mood: detectEmotion(s.title + ' ' + s.desc) })), outro: 'That is all for now. Stay webbed, stay informed!' });
  if (!hasGroq(ctx.cfg)) return fallback();
  try {
    const list = items.map((s, i) => `${i + 1}. ${s.title} — ${short(s.desc, 200)} (source: ${s.source}, ${new Date(s.time).toDateString()})`).join('\n');
    const txt = await complete(ctx.cfg, [
      { role: 'system', content: `You are Spidey, the friendly Spider-Man anchoring a retro TV newscast "Spidey News 24". Neutral, accurate, warm, a little witty on light stories only, respectful on sad ones. Use ONLY the given stories. Write in ${lang}.` },
      { role: 'user', content: `${list}\n\nReturn JSON: {"intro":"one short greeting naming ${ctx.country?.name || 'the world'}","stories":[{"say":"1-2 spoken sentences per story, same order, mention the source","mood":"happy|sad|surprised|serious|excited|scared|neutral"}],"outro":"short sign-off with the words stay webbed"}` },
    ], { json: true, temperature: 0.5, max_tokens: 1400 });
    const j = JSON.parse(txt);
    if (!Array.isArray(j.stories) || j.stories.length < items.length) throw new Error('short bulletin');
    j.stories = j.stories.map((s, i) => (typeof s === 'string' ? { say: s, mood: detectEmotion(items[i].title) } : { say: s.say, mood: EMOTIONS.includes(s.mood) ? s.mood : detectEmotion(items[i].title) }));
    return j;
  } catch (e) { return fallback(); }
}
const greet = () => { const h = new Date().getHours(); return h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening'; };
