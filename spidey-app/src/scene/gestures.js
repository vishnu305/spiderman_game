// =====================================================================
//  Gesture & emotion library for the procedural Spidey rig.
//  Rotation conventions (radians):  arm forward = -x · left arm out = +z · right arm out = -z
//  elbow bend forward = -x · head down = +x · head turn = y · thigh forward = -x · knee bend = +x
// =====================================================================
const { sin, abs, PI } = Math;
const bell = (u) => sin(PI * Math.min(1, Math.max(0, u)));
const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// finger curl: [index, middle, ring, pinky, thumb]
export const HAND = {
  relaxed: [0.35, 0.42, 0.48, 0.55, 0.2], open: [0.05, 0.05, 0.08, 0.1, 0.0], spread: [0, 0, 0, 0, -0.2],
  fist: [1, 1, 1, 1, 0.9], point: [0, 1, 1, 1, 0.8], thwip: [0, 1.05, 1.05, 0, -0.1], pinch: [0.55, 0.6, 0.65, 0.7, 0.55],
  peace: [0, 0, 1, 1, 0.8], thumb: [1, 1, 1, 1, -0.3],
};
export const LEG_KEYS = ['lHip', 'lKnee', 'lAnk', 'rHip', 'rKnee', 'rAnk', 'hipsY', 'hipsZ', 'hipsRot'];

export const STAND = {
  spine: [0, 0, 0], chest: [0, 0, 0], neck: [0, 0, 0], head: [0, 0, 0],
  lSh: [0.04, 0, 0.13], rSh: [0.04, 0, -0.13], lEl: [-0.2, 0, 0], rEl: [-0.2, 0, 0], lWr: [0, 0, 0], rWr: [0, 0, 0],
  lHip: [0.0, 0, 0.035], rHip: [0.0, 0, -0.035], lKnee: [0.03, 0, 0], rKnee: [0.03, 0, 0], lAnk: [-0.03, 0, -0.035], rAnk: [-0.03, 0, 0.035],
  hipsY: 0, hipsZ: 0, hipsRot: [0, 0, 0], lHand: 'relaxed', rHand: 'relaxed',
};
export const SIT = {
  hipsY: -0.34, spine: [-0.03, 0, 0],
  lHip: [-1.5, 0, 0.07], rHip: [-1.5, 0, -0.07], lKnee: [1.45, 0, 0], rKnee: [1.45, 0, 0], lAnk: [0.05, 0, -0.05], rAnk: [0.05, 0, 0.05],
};
// seated, hands resting on the desk
export const DESK = { chest: [0.05, 0, 0], lSh: [-0.72, 0, 0.12], rSh: [-0.72, 0, -0.12], lEl: [-0.95, 0.35, 0], rEl: [-0.95, -0.35, 0], lHand: 'relaxed', rHand: 'relaxed' };
// seated, holding the newspaper up and reading it
export const READ = { chest: [0.04, 0, 0], head: [0.3, 0, 0], lSh: [-0.72, 0, 0.28], rSh: [-0.72, 0, -0.28], lEl: [-1.05, 0, 0], rEl: [-1.05, 0, 0], lWr: [0, 0, 0.25], rWr: [0, 0, -0.25], lHand: 'pinch', rHand: 'pinch' };

// lens shapes: scale, top lid, bottom lid, lid tilt (+ = sad), bottom curve (+ = happy smile-eyes)
export const EYES = {
  neutral: { scale: 1, top: 2, bot: -2, tilt: 0, curve: 0 },
  happy: { scale: 1.08, top: 2, bot: -0.62, tilt: 0, curve: 0.5 },
  funny: { scale: 1.06, top: 2, bot: -0.5, tilt: 0, curve: 0.52 },
  excited: { scale: 1.18, top: 2, bot: -0.8, tilt: 0, curve: 0.3 },
  sad: { scale: 0.98, top: 0.4, bot: -2, tilt: 1.0, curve: 0 },
  serious: { scale: 1, top: 0.35, bot: -2, tilt: -0.9, curve: 0 },
  angry: { scale: 1, top: 0.15, bot: -0.7, tilt: -1.3, curve: 0 },
  surprised: { scale: 1.25, top: 2, bot: -2, tilt: 0, curve: 0 },
  scared: { scale: 1.22, top: 2, bot: -2, tilt: 0.6, curve: 0 },
  thinking: { scale: 1, top: 2, bot: -2, tilt: 0, curve: 0, l: { top: 0.25, tilt: -0.4 }, r: { scale: 1.08 } },
  sleepy: { scale: 1, top: 0.05, bot: -2, tilt: 0.2, curve: 0 },
  ouch: { scale: 1, top: 0.1, bot: -0.05, tilt: -0.6, curve: 0.2 },
  listening: { scale: 1.08, top: 2, bot: -2, tilt: 0.25, curve: 0 },
};

// sustained body language while an emotion is active
export const POSTURE = {
  happy: () => ({ chest: [-0.06, 0, 0], head: [-0.08, 0, 0] }),
  funny: (t) => ({ head: [-0.05, 0, sin(t * 2) * 0.1] }),
  excited: (t, seated) => (seated ? { chest: [-0.05, 0, 0] } : { chest: [-0.05, 0, 0], hipsY: abs(sin(t * 8)) * 0.02 }),
  sad: () => ({ head: [0.38, 0, 0.06], chest: [0.15, 0, 0], neck: [0.1, 0, 0], lSh: [0.1, 0, 0.06], rSh: [0.1, 0, -0.06] }),
  serious: () => ({ head: [0.06, 0, 0], chest: [-0.03, 0, 0] }),
  angry: () => ({ head: [0.12, 0, 0], chest: [0.05, 0, 0] }),
  surprised: () => ({ spine: [-0.06, 0, 0], head: [-0.08, 0, 0] }),
  scared: (t) => ({ chest: [0.1, 0, 0], head: [0.05, sin(t * 31) * 0.025, 0] }),
  thinking: () => ({ head: [-0.12, 0.22, 0.1] }),
};

// ---------------- clips ----------------
// pose(t seconds, u 0..1, seated) -> partial pose. events: [[u, 'name']]
export const CLIPS = {
  wave: { dur: 2.4, eyes: 'happy', pose: (t) => ({ rSh: [-0.15, 0, -1.25], rEl: [0, 0, -1.45 + 0.38 * sin(t * 11)], rWr: [0, -1.57, 0], rHand: 'open', head: [-0.05, -0.15, 0.1] }) },
  hello: { dur: 3.0, eyes: 'happy', pose: (t, u) => ({ rSh: [-0.15, 0, -1.25], rEl: [0, 0, -1.45 + 0.38 * sin(t * 11)], rWr: [0, -1.57, 0], rHand: 'open', head: [0.1 * sin(u * PI * 4), -0.12, 0.12], lSh: [0.2, 0, 0.62], lEl: [0, 0, -1.7], lHand: 'fist' }) },
  nod: { dur: 1.1, pose: (t, u) => ({ head: [0.22 * sin(u * PI * 4) * (1 - u * 0.5), 0, 0] }) },
  shake: { dur: 1.3, pose: (t, u) => ({ head: [0.05, 0.35 * sin(u * PI * 5) * (1 - u * 0.4), 0] }) },
  think: { dur: 3.2, loop: true, loopFrom: 0.6, eyes: 'thinking', pose: (t) => ({ rSh: [-0.55, 0, 0.32], rEl: [-2.35, 0, 0], rWr: [0.2, 0, 0], rHand: 'point', lSh: [-0.35, 0, -0.12], lEl: [-1.55, 0, 0], lHand: 'relaxed', head: [-0.14 + 0.03 * sin(t * 2), 0.2, 0.12] }) },
  listen: { dur: 3.0, loop: true, loopFrom: 0.6, eyes: 'listening', pose: () => ({ rSh: [-0.35, 0, -1.55], rEl: [0, 0, -2.55], rWr: [0, -0.6, 0], rHand: 'open', head: [0.05, -0.25, 0.14], chest: [0.06, 0, 0.05] }) },
  cheer: { dur: 1.9, eyes: 'happy', pose: (t, u, seated) => ({ lSh: [0, 0, 2.65], rSh: [0, 0, -2.65], lEl: [-0.25, 0, 0], rEl: [-0.25, 0, 0], lHand: 'fist', rHand: 'fist', head: [-0.18, 0, 0], hipsY: seated ? 0 : abs(sin(u * PI * 3)) * 0.07 }) },
  clap: { dur: 1.8, eyes: 'happy', pose: (t) => ({ lSh: [-0.95, 0, -0.05], rSh: [-0.95, 0, 0.05], lEl: [-0.85, 0, -0.38 - 0.13 * sin(t * 18)], rEl: [-0.85, 0, 0.38 + 0.13 * sin(t * 18)], lHand: 'open', rHand: 'open', head: [-0.1, 0, 0] }) },
  jump: {
    dur: 1.3, standOnly: true, eyes: 'excited', pose: (t, u) => {
      const crouch = u < 0.2 ? sin((u / 0.2) * PI / 2) : u > 0.78 ? sin(((1 - u) / 0.22) * PI / 2) * 0.6 : 0, air = u >= 0.2 && u <= 0.78 ? sin(((u - 0.2) / 0.58) * PI) : 0;
      return { hipsY: -0.14 * crouch + 0.38 * air, lHip: [-0.6 * crouch - 0.7 * air, 0, 0.1], rHip: [-0.6 * crouch - 0.7 * air, 0, -0.1], lKnee: [1.1 * crouch + 1.2 * air, 0, 0], rKnee: [1.1 * crouch + 1.2 * air, 0, 0], lSh: [0, 0, 0.3 + 2.3 * air], rSh: [0, 0, -0.3 - 2.3 * air], lHand: 'fist', rHand: 'fist' };
    },
  },
  flip: {
    dur: 1.5, standOnly: true, eyes: 'excited', pose: (t, u) => {
      const crouch = u < 0.18 ? sin((u / 0.18) * PI / 2) : u > 0.82 ? sin(((1 - u) / 0.18) * PI / 2) * 0.7 : 0, air = u >= 0.18 && u <= 0.82 ? sin(((u - 0.18) / 0.64) * PI) : 0;
      const spin = ss(0.24, 0.78, u) * -PI * 2;
      return { hipsY: -0.14 * crouch + 0.55 * air, hipsRot: [spin, 0, 0], lHip: [-0.6 * crouch - 1.4 * air, 0, 0.1], rHip: [-0.6 * crouch - 1.4 * air, 0, -0.1], lKnee: [1.1 * crouch + 1.9 * air, 0, 0], rKnee: [1.1 * crouch + 1.9 * air, 0, 0], lSh: [-1.2 * air, 0, 0.3], rSh: [-1.2 * air, 0, -0.3], lEl: [-1.0 * air, 0, 0], rEl: [-1.0 * air, 0, 0], head: [0.3 * air, 0, 0], lHand: 'fist', rHand: 'fist' };
    },
  },
  sad: { dur: 3.2, eyes: 'sad', pose: (t, u) => ({ head: [0.5, 0.1 * sin(t * 1.5), 0.08], chest: [0.2 - 0.08 * bell(u * 2), 0, 0], spine: [0.06, 0, 0], lSh: [0.12, 0, 0.05], rSh: [-0.6, 0, 0.18], rEl: [-2.0, 0, 0], rHand: 'relaxed' }) },
  surprised: { dur: 1.6, eyes: 'surprised', pose: () => ({ spine: [-0.13, 0, 0], head: [-0.16, 0, 0], lSh: [-0.35, 0, 0.8], rSh: [-0.35, 0, -0.8], lEl: [-0.9, 0, 0], rEl: [-0.9, 0, 0], lHand: 'spread', rHand: 'spread', hipsZ: -0.04 }) },
  superhero: { dur: 2.6, eyes: 'serious', pose: () => ({ lSh: [0.2, 0, 0.7], rSh: [0.2, 0, -0.7], lEl: [0, 0, -1.7], rEl: [0, 0, 1.7], lHand: 'fist', rHand: 'fist', chest: [-0.09, 0, 0], head: [-0.1, 0, 0] }) },
  shrug: { dur: 1.7, pose: () => ({ lSh: [-0.15, 0, 0.3], rSh: [-0.15, 0, -0.3], lEl: [-1.35, 0.6, 0], rEl: [-1.35, -0.6, 0], lWr: [0, 1.2, 0], rWr: [0, -1.2, 0], lHand: 'open', rHand: 'open', head: [0, 0, 0.22] }) },
  point: { dur: 1.7, pose: () => ({ rSh: [-1.45, 0, -0.12], rEl: [-0.08, 0, 0], rHand: 'point', head: [0, -0.12, 0] }) },
  thwip: { dur: 1.5, eyes: 'serious', events: [[0.33, 'web']], pose: (t, u) => ({ rSh: [-1.5, 0, -0.05], rEl: [0, 0, 0], rWr: [0, 0, -0.65 * ss(0.2, 0.33, u)], rHand: 'thwip', lSh: [0.1, 0, 0.3], head: [0.05, -0.08, 0], chest: [0, -0.15, 0] }) },
  laugh: { dur: 2.3, eyes: 'funny', pose: (t) => ({ head: [-0.3 + 0.06 * sin(t * 20), 0, 0.05], chest: [-0.1 + 0.04 * sin(t * 20), 0, 0], lSh: [-0.45, 0, -0.02], rSh: [-0.45, 0, 0.02], lEl: [-1.5, 0, 0], rEl: [-1.5, 0, 0], lHand: 'open', rHand: 'open' }) },
  tickle: { dur: 2.0, eyes: 'funny', pose: (t) => ({ chest: [0.32 + 0.05 * sin(t * 22), 0, 0], spine: [0.15, 0, 0], head: [-0.2, 0, 0.1 * sin(t * 9)], lSh: [-0.5, 0, -0.05], rSh: [-0.5, 0, 0.05], lEl: [-1.4, 0, 0], rEl: [-1.4, 0, 0] }) },
  ouch: { dur: 1.5, eyes: 'ouch', pose: (t) => ({ head: [-0.22, 0.05 * sin(t * 25), 0.2], lSh: [-0.45, 0, 1.9], rSh: [-0.45, 0, -1.9], lEl: [0, 0, 1.9], rEl: [0, 0, -1.9], lHand: 'open', rHand: 'open', hipsZ: -0.05 }) },
  hop: { dur: 1.5, standOnly: true, eyes: 'ouch', pose: (t) => ({ lHip: [-0.9, 0, 0.1], lKnee: [1.5, 0, 0], hipsY: abs(sin(t * 10)) * 0.08, lSh: [0, 0, 1.0 + 0.4 * sin(t * 14)], rSh: [0, 0, -1.0 - 0.4 * sin(t * 14 + 1)], lEl: [-0.5, 0, 0], rEl: [-0.5, 0, 0], lHand: 'spread', rHand: 'spread' }) },
  highfive: { dur: 1.4, eyes: 'happy', pose: () => ({ rSh: [-0.3, 0, -2.5], rEl: [-0.2, 0, 0], rWr: [0, -1.57, 0], rHand: 'spread', head: [-0.1, -0.1, 0] }) },
  beat1: { dur: 1.5, pose: (t) => ({ rSh: [-0.55, 0, -0.18], rEl: [-1.15 + 0.15 * sin(t * 6), -0.45, 0], rWr: [0, -0.8, 0], rHand: 'open' }) },
  beat2: { dur: 1.7, pose: (t, u) => ({ lSh: [-0.5, 0, 0.25 + 0.15 * bell(u)], rSh: [-0.5, 0, -0.25 - 0.15 * bell(u)], lEl: [-1.1, 0.5, 0], rEl: [-1.1, -0.5, 0], lWr: [0, 1.0, 0], rWr: [0, -1.0, 0], lHand: 'open', rHand: 'open' }) },
  beat3: { dur: 1.4, pose: () => ({ rSh: [-0.35, 0, 0.22], rEl: [-2.0, 0, 0], rHand: 'point', head: [-0.05, 0.08, 0] }) },
  beat4: { dur: 1.6, pose: (t) => ({ lSh: [-0.6, 0, 0.15], lEl: [-1.0 + 0.12 * sin(t * 7), 0.4, 0], lWr: [0, 0.9, 0], lHand: 'open' }) },
  bow: { dur: 2.0, pose: (t, u, seated) => ({ spine: [(seated ? 0.25 : 0.55) * bell(u), 0, 0], head: [0.25 * bell(u), 0, 0], rSh: [-0.35, 0, 0.3], rEl: [-1.6, 0, 0], lSh: [0.35, 0, 0.12] }) },
  dance: {
    dur: 4.8, standOnly: false, eyes: 'happy', pose: (t, u, seated) => {
      const b = sin(t * 6.5), c = sin(t * 6.5 + PI);
      return { spine: [0, 0, 0.14 * b], lSh: [-0.3, 0, 1.1 + 0.8 * b], rSh: [-0.3, 0, -1.1 - 0.8 * c], lEl: [-1.2, 0, 0], rEl: [-1.2, 0, 0], lHand: 'peace', rHand: 'point', head: [0.08 * abs(b), 0.2 * sin(t * 3.25), 0], hipsY: seated ? 0 : 0.03 * abs(b), lKnee: [0.35 * Math.max(0, b), 0, 0], rKnee: [0.35 * Math.max(0, c), 0, 0], lHip: [-0.2 * Math.max(0, b), 0, 0.04], rHip: [-0.2 * Math.max(0, c), 0, -0.04] };
    },
  },
  facepalm: { dur: 2.0, eyes: 'sleepy', pose: () => ({ rSh: [-0.95, 0, 0.18], rEl: [-2.3, 0, 0], rHand: 'open', head: [0.35, 0, 0] }) },
  present: { dur: 1.8, pose: (t, u) => ({ rSh: [-0.9, 0, -0.3 - 0.25 * bell(u)], rEl: [-0.7, -0.6, 0], rWr: [0, -1.2, 0], rHand: 'open', head: [0, -0.06, 0] }) },
  pageflip: { dur: 1.2, events: [[0.5, 'flip']], pose: (t, u) => ({ rSh: [-0.85, 0, -0.3 + 0.55 * bell(u)], rEl: [-1.1, 0, 0], rHand: 'pinch', head: [0.25, 0.15 * bell(u), 0] }) },
};

export function clipPose(name, t, u, seated) { return CLIPS[name].pose(t, u, seated); }

// what to do for each emotion (first = standing, second = seated)
export const EMOTE = {
  happy: ['cheer', 'clap'], excited: ['jump', 'clap'], funny: ['laugh', 'laugh'], sad: ['sad', 'sad'], surprised: ['surprised', 'surprised'],
  scared: ['surprised', 'surprised'], serious: ['superhero', 'nod'], angry: ['shake', 'shake'], thinking: ['think', 'think'], neutral: ['beat2', 'present'],
};
export const BEATS = ['beat1', 'beat2', 'beat3', 'beat4', 'present'];
export const FUN = ['wave', 'flip', 'thwip', 'dance', 'jump', 'laugh', 'superhero', 'highfive', 'bow', 'shrug', 'facepalm'];
