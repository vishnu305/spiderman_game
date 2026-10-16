// RAG retriever: BM25 keyword ranking over in-memory documents (news headlines or search snippets).
// Nothing is written to disk – the index is rebuilt in memory whenever news is refreshed.
const STOP = new Set('a an the and or of to in on for with is are was were be by at from as that this it its about what who when where why how tell me news latest today please spidey can you give any some do does did'.split(' '));
export const tokens = (s) => (String(s || '').toLowerCase().match(/[\p{L}\p{N}]+/gu) || []).filter((w) => !STOP.has(w) && w.length > 1);

export function bm25(docs, textOf) {
  const D = docs.map((d) => { const t = tokens(textOf(d)); const tf = new Map(); t.forEach((w) => tf.set(w, (tf.get(w) || 0) + 1)); return { d, tf, len: t.length }; });
  const df = new Map(); D.forEach((x) => x.tf.forEach((_, w) => df.set(w, (df.get(w) || 0) + 1)));
  const avg = D.reduce((a, x) => a + x.len, 0) / Math.max(1, D.length), N = D.length, k1 = 1.4, b = 0.75;
  return (q, k = 5) => {
    const qs = tokens(q);
    return D.map((x) => {
      let s = 0;
      for (const w of qs) { const f = x.tf.get(w) || 0; if (!f) continue; const n = df.get(w); s += Math.log(1 + (N - n + 0.5) / (n + 0.5)) * (f * (k1 + 1)) / (f + k1 * (1 - b + (b * x.len) / avg)); }
      return { d: x.d, s };
    }).filter((x) => x.s > 0).sort((a, c) => c.s - a.s).slice(0, k).map((x) => x.d);
  };
}
