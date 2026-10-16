// Quick lexicon emotion detector (works offline). The LLM also returns an emotion tag; this is the fallback
// and is used to make Spidey react to each news story (sad story -> sorrow, good news -> cheer).
const L = {
  sad: 'killed kill dead death deaths died dies dying crash crashed flood floods flooding war attack attacked loss injured injuries disaster earthquake tragedy tragic fire blaze collapse murder victims mourn mourning grief missing drown drowned famine poverty layoffs cyclone hurricane tsunami bomb blast shooting suicide funeral sad',
  happy: 'win wins won winning record celebrates celebration launch launched success successful breakthrough award awarded growth rises rise rising gold victory rescue rescued saved hope boost wedding champion champions cure milestone historic peace deal festival happy joy best',
  surprised: 'shock shocking surprise surprising unexpected first-ever mystery mysterious discover discovered discovery rare strange bizarre unusual stunning wow viral alien',
  serious: 'election elections court verdict policy government parliament tax budget talks summit minister president probe investigation law bill vote inflation rate sanctions',
  excited: 'amazing awesome incredible thrilling spectacular unveils unveiled new launch reveal',
  funny: 'funny joke hilarious laugh lol prank meme comedy',
  scared: 'warning alert threat danger dangerous storm virus outbreak pandemic scary',
};
const MAP = Object.fromEntries(Object.entries(L).map(([k, v]) => [k, new Set(v.split(' '))]));
export function detectEmotion(text) {
  const w = String(text || '').toLowerCase().match(/[a-z-]+/g) || []; const score = {};
  for (const x of w) for (const [k, set] of Object.entries(MAP)) if (set.has(x)) score[k] = (score[k] || 0) + (k === 'sad' ? 1.4 : 1);
  const best = Object.entries(score).sort((a, b) => b[1] - a[1])[0];
  return best ? best[0] : 'neutral';
}
export const EMOJI = { happy: '😀', sad: '😢', surprised: '😮', serious: '🧐', excited: '🤩', funny: '😂', scared: '😨', neutral: '🕷️', thinking: '🤔', angry: '😠' };
