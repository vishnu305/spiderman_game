// =====================================================================
//  GROQ client (free key from console.groq.com/keys). OpenAI-compatible API.
//  Models are discovered at runtime, so retired model names never break the app.
// =====================================================================
const DIRECT = 'https://api.groq.com/openai/v1';
const PREF_CHAT = ['llama-3.3-70b-versatile', 'openai/gpt-oss-120b', 'meta-llama/llama-4-maverick-17b-128e-instruct', 'meta-llama/llama-4-scout-17b-16e-instruct', 'moonshotai/kimi-k2-instruct', 'openai/gpt-oss-20b', 'qwen/qwen3-32b', 'llama-3.1-8b-instant'];
const PREF_SEARCH = ['groq/compound', 'groq/compound-mini'];
const PREF_STT = ['whisper-large-v3-turbo', 'whisper-large-v3'];

let models = null, modelsKey = '';
const base = (cfg) => (cfg.groqProxy ? cfg.groqProxy.replace(/\/$/, '') : DIRECT);
const hdr = (cfg, json = true) => ({ ...(cfg.groqKey ? { Authorization: 'Bearer ' + cfg.groqKey } : {}), ...(json ? { 'Content-Type': 'application/json' } : {}) });
export const hasGroq = (cfg) => !!(cfg.groqKey || cfg.groqProxy);

export async function listModels(cfg) {
  if (models && modelsKey === cfg.groqKey) return models;
  try {
    const r = await fetch(base(cfg) + '/models', { headers: hdr(cfg, false) });
    if (!r.ok) throw new Error('Groq ' + r.status + (r.status === 401 ? ' – the API key is invalid' : ''));
    models = (await r.json()).data.filter((m) => m.active !== false).map((m) => m.id); modelsKey = cfg.groqKey;
  } catch (e) { if (/invalid/.test(e.message)) throw e; models = []; }
  return models;
}
async function candidates(cfg, pref) {
  const have = await listModels(cfg);
  const ordered = cfg.model ? [cfg.model, ...pref] : pref;
  if (!have.length) return ordered;
  const ok = ordered.filter((m) => have.includes(m));
  return ok.length ? ok : have.filter((m) => !/whisper|tts|guard|orpheus|playai|prompt/i.test(m));
}
export async function searchModel(cfg) { const have = await listModels(cfg); return PREF_SEARCH.find((m) => have.includes(m)) || null; }

export async function chat(cfg, body, { pref = PREF_CHAT } = {}) {
  const list = await candidates(cfg, pref); let err;
  for (const model of list.slice(0, 4)) {
    try {
      const r = await fetch(base(cfg) + '/chat/completions', { method: 'POST', headers: hdr(cfg), body: JSON.stringify({ model, ...body }) });
      if (!r.ok) {
        const t = await r.text(); err = new Error(`Groq ${r.status}: ${t.slice(0, 180)}`); err.status = r.status; err.body = t;
        if (r.status === 401) throw err;
        if (r.status === 400 && /tool_use_failed|tool call/i.test(t)) throw err;   // let the agent fall back to classic RAG
        continue;                                                                  // 404 retired / 429 rate limit -> next model
      }
      const j = await r.json(); j._model = model; return j;
    } catch (e) { err = e; if (e.status === 401 || (e.status === 400 && /tool/.test(e.body || ''))) throw e; }
  }
  throw err || new Error('No Groq model available');
}
export async function complete(cfg, messages, opts = {}) {
  const j = await chat(cfg, { messages, temperature: opts.temperature ?? 0.6, max_tokens: opts.max_tokens ?? 400, ...(opts.json ? { response_format: { type: 'json_object' } } : {}) });
  return (j.choices?.[0]?.message?.content || '').trim();
}
export async function transcribe(cfg, blob, lang = 'en') {
  const list = await candidates(cfg, PREF_STT); const f = new FormData();
  f.append('file', blob, 'speech.webm'); f.append('model', list.find((m) => /whisper/.test(m)) || PREF_STT[0]); f.append('response_format', 'json'); f.append('language', lang.slice(0, 2));
  const r = await fetch(base(cfg) + '/audio/transcriptions', { method: 'POST', headers: hdr(cfg, false), body: f });
  if (!r.ok) throw new Error('Whisper ' + r.status);
  return ((await r.json()).text || '').trim();
}
