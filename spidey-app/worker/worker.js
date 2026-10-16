// OPTIONAL free Cloudflare Worker proxy (only needed if you host the app somewhere other than Netlify
// and Google News RSS is blocked by CORS). Deploy: dash.cloudflare.com -> Workers -> Create -> paste -> Deploy.
// Then paste the worker URL into Spidey SETUP -> "Proxy URL".
// Only whitelisted public news hosts are allowed; nothing is logged or stored.
const ALLOW = ['news.google.com', 'api.gdeltproject.org'];

export default {
  async fetch(req) {
    const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*' };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    const target = new URL(req.url).searchParams.get('url');
    if (!target) return new Response('Spidey proxy OK', { headers: cors });
    let u; try { u = new URL(target); } catch (e) { return new Response('bad url', { status: 400, headers: cors }); }
    if (!ALLOW.includes(u.hostname)) return new Response('host not allowed', { status: 403, headers: cors });
    const r = await fetch(u.toString(), { headers: { 'User-Agent': 'Mozilla/5.0 SpideyNews' }, cf: { cacheTtl: 60 } });
    return new Response(r.body, { status: r.status, headers: { ...cors, 'Content-Type': r.headers.get('Content-Type') || 'text/plain', 'Cache-Control': 'max-age=60' } });
  },
};
