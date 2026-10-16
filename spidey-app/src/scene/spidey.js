// =====================================================================
//  SPIDEY 3D CHARACTER  –  procedural, fully rigged, no model file needed
//  Joints: hips > spine > chest > neck > head, shoulders > elbows > wrists > fingers, hips > knees > ankles
//  Face: Homecoming-style lenses that change shape with emotion + a "mask mouth" for lip-sync.
// =====================================================================
import * as THREE from 'three';
import { suitRedTex, suitBlueTex, maskTex, blazerTex, sleeveTex } from './textures.js';
import { HAND, STAND, SIT, READ, DESK, POSTURE, EYES, clipPose, CLIPS, LEG_KEYS } from './gestures.js';

const V2 = (r, y) => new THREE.Vector2(r, y);
const lathe = (pts, segs = 40) => new THREE.LatheGeometry(pts.map(([r, y]) => V2(r, y)), segs, Math.PI, Math.PI * 2);
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const smooth = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };

// limb hanging from the joint (y = 0) down to -len, with rounded ends and a muscle bulge
function limbGeo(len, r0, r1, bulge = 0, at = 0.35, segs = 28) {
  const pts = [], n = 16;
  for (let i = 0; i <= 5; i++) { const a = (i / 5) * Math.PI / 2; pts.push([Math.max(1e-4, Math.sin(a) * r1), -len - Math.cos(a) * r1 * 0.8]); }
  for (let i = 1; i < n; i++) { const s = 1 - i / n; pts.push([r0 + (r1 - r0) * s + bulge * Math.exp(-((s - at) ** 2) / 0.03), -s * len]); }
  for (let i = 0; i <= 5; i++) { const a = (i / 5) * Math.PI / 2; pts.push([Math.max(1e-4, Math.cos(a) * r0), Math.sin(a) * r0 * 0.8]); }
  return lathe(pts, segs);
}
const capsule = (r, len) => { const g = new THREE.CapsuleGeometry(r, len, 4, 10); g.translate(0, -len / 2, 0); return g; };

export const OUTFITS = [
  { name: 'Retro tweed', base: '#6e4527', lapel: '#3b2210', kind: 'tweed', tie: '#e0a83a' },
  { name: 'Navy anchor', base: '#1b2846', lapel: '#0c1427', kind: 'pinstripe', tie: '#d4151f' },
  { name: 'Tuxedo', base: '#17171c', lapel: '#060608', kind: 'plain', tie: '#101010' },
  { name: 'Classic suit', base: null },
];

export function createSpidey({ hi = true } = {}) {
  const root = new THREE.Group(); root.name = 'spidey';
  const body = new THREE.Group(); root.add(body);
  const J = {}, parts = [];
  const grp = (name, parent, x = 0, y = 0, z = 0) => { const o = new THREE.Group(); o.name = name; o.position.set(x, y, z); parent.add(o); J[name] = o; return o; };
  const mesh = (geo, mat, parent, part, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; m.userData.part = part; parent.add(m); parts.push(m); return m; };

  // ---------------- materials ----------------
  const fabric = (t, extra = {}) => new THREE.MeshPhysicalMaterial({
    map: t.map, bumpMap: t.bump, bumpScale: 2.2, roughness: 0.52, metalness: 0.0,
    sheen: 0.35, sheenRoughness: 0.5, sheenColor: new THREE.Color('#ff5a5a'), clearcoat: hi ? 0.18 : 0, clearcoatRoughness: 0.55, ...extra,
  });
  const torsoT = suitRedTex({ W: 1024, H: 1024, cols: 26, rows: 12, emblem: true, circumference: 1.05, height: 0.6, blueSides: true });
  const limbT = suitRedTex({ W: 512, H: 512, cols: 10, rows: 9 });
  const handT = suitRedTex({ W: 256, H: 256, cols: 8, rows: 4 });
  const blueT = suitBlueTex();
  const maskT = maskTex();
  const mRed = fabric(torsoT), mLimb = fabric(limbT), mHand = fabric(handT, { bumpScale: 1.2 });
  const mBlue = fabric(blueT, { sheenColor: new THREE.Color('#9ab8ff'), bumpScale: 1.0 });
  const mMask = fabric(maskT, { bumpScale: 2.6, roughness: 0.48 });
  const mWhite = new THREE.MeshStandardMaterial({ color: '#f4f1ea', roughness: 0.55 });
  const mTie = new THREE.MeshPhysicalMaterial({ color: '#e0a83a', roughness: 0.35, sheen: 1, sheenColor: new THREE.Color('#fff2c8'), clearcoat: 0.4 });
  const mBlazer = new THREE.MeshPhysicalMaterial({ roughness: 0.78, sheen: 0.6, sheenRoughness: 0.6, sheenColor: new THREE.Color('#ffd9b0'), side: THREE.DoubleSide, alphaTest: 0.5, bumpScale: 1.5 });
  const mSleeve = new THREE.MeshPhysicalMaterial({ roughness: 0.78, sheen: 0.6, sheenColor: new THREE.Color('#ffd9b0') });
  const mSleeveCuff = new THREE.MeshPhysicalMaterial({ roughness: 0.78, sheen: 0.6, sheenColor: new THREE.Color('#ffd9b0') });

  // ---------------- skeleton + body ----------------
  const hips = grp('hips', body, 0, 0.96, 0);
  mesh(new THREE.SphereGeometry(0.155, 32, 20), mBlue, hips, 'body', 0, -0.02, 0).scale.set(1.0, 0.78, 0.74);
  const spine = grp('spine', hips, 0, 0.07, 0);
  const torsoPts = [[1e-4, -0.075], [0.135, -0.05], [0.132, 0.04], [0.142, 0.14], [0.168, 0.26], [0.186, 0.36], [0.19, 0.42], [0.172, 0.47], [0.115, 0.505], [0.062, 0.525], [1e-4, 0.53]];
  const torso = mesh(lathe(torsoPts, 48), mRed, spine, 'body'); torso.scale.z = 0.7;
  const chest = grp('chest', spine, 0, 0.34, 0);
  const neck = grp('neck', chest, 0, 0.17, 0);
  mesh(new THREE.CylinderGeometry(0.056, 0.064, 0.12, 24), mLimb, neck, 'head', 0, 0.03, 0);
  const head = grp('head', neck, 0, 0.07, 0); head.scale.setScalar(1.17);

  // ---- blazer (outfit) ----
  const blazerPts = [[0.172, -0.21], [0.17, -0.1], [0.152, 0.02], [0.158, 0.14], [0.183, 0.26], [0.203, 0.36], [0.208, 0.42], [0.188, 0.47], [0.13, 0.505], [0.086, 0.52]];
  const blazer = mesh(lathe(blazerPts, 48), mBlazer, spine, 'body'); blazer.scale.z = 0.72;
  const collar = mesh(new THREE.CylinderGeometry(0.066, 0.07, 0.05, 24, 1, true, Math.PI * 0.18, Math.PI * 1.64), mWhite, neck, 'head', 0, 0.0, 0);
  collar.material = mWhite.clone(); collar.material.side = THREE.DoubleSide;
  const bow = new THREE.Group(); bow.position.set(0, -0.005, 0.066); neck.add(bow);
  const wing = new THREE.ConeGeometry(0.026, 0.05, 14); wing.rotateZ(Math.PI / 2); wing.translate(-0.025, 0, 0);
  mesh(wing, mTie, bow, 'head').scale.set(1, 1, 0.45);
  const wing2 = mesh(wing, mTie, bow, 'head'); wing2.rotation.z = Math.PI; wing2.scale.set(1, 1, 0.45);
  mesh(new THREE.SphereGeometry(0.012, 12, 10), mTie, bow, 'head').scale.set(1, 1.1, 0.8);

  // ---- arms ----
  const arm = (side) => {
    const s = side === 'l' ? 1 : -1;
    const sh = grp(side + 'Sh', chest, 0.19 * s, 0.075, -0.01);
    const pad = mesh(new THREE.SphereGeometry(0.074, 24, 16), mLimb, sh, 'arm', 0, -0.005, 0); pad.scale.set(1.08, 0.86, 1);
    const ua = mesh(limbGeo(0.28, 0.062, 0.047, 0.009, 0.3), mLimb, sh, 'arm');
    const el = grp(side + 'El', sh, 0, -0.28, 0);
    const fa = mesh(limbGeo(0.25, 0.05, 0.036, 0.007, 0.25), mLimb, el, 'arm');
    const wr = grp(side + 'Wr', el, 0, -0.25, 0);
    const hand = new THREE.Group(); hand.rotation.y = -s * Math.PI / 2; wr.add(hand);
    mesh(new THREE.SphereGeometry(1, 20, 14), mHand, hand, 'hand', 0, -0.055, 0).scale.set(0.043, 0.054, 0.024);
    const fingers = [];
    const fx = [0.026, 0.009, -0.009, -0.026].map((v) => v * s), fl = [[0.042, 0.035], [0.047, 0.04], [0.044, 0.037], [0.034, 0.029]];
    fx.forEach((x, i) => {
      const a = new THREE.Group(); a.position.set(x, -0.098, 0.002); hand.add(a);
      mesh(capsule(i === 3 ? 0.0095 : 0.0108, fl[i][0]), mHand, a, 'hand');
      const b = new THREE.Group(); b.position.y = -fl[i][0] - 0.004; a.add(b);
      mesh(capsule(i === 3 ? 0.009 : 0.0102, fl[i][1]), mHand, b, 'hand');
      fingers.push({ a, b });
    });
    const ta = new THREE.Group(); ta.position.set(0.04 * s, -0.035, 0.012); ta.rotation.set(-0.35, 0, 0.6 * s); hand.add(ta);
    mesh(capsule(0.012, 0.036), mHand, ta, 'hand');
    const tb = new THREE.Group(); tb.position.y = -0.04; ta.add(tb); mesh(capsule(0.011, 0.03), mHand, tb, 'hand');
    J[side + 'Fingers'] = fingers; J[side + 'Thumb'] = { a: ta, b: tb, base: ta.rotation.clone() };
    return { pad, ua, fa };
  };
  const armL = arm('l'), armR = arm('r');

  // ---- legs ----
  const leg = (side) => {
    const s = side === 'l' ? 1 : -1;
    const hp = grp(side + 'Hip', hips, 0.092 * s, -0.06, 0);
    mesh(limbGeo(0.42, 0.088, 0.058, 0.012, 0.3), mBlue, hp, 'leg');
    const kn = grp(side + 'Knee', hp, 0, -0.42, 0);
    mesh(limbGeo(0.4, 0.061, 0.041, 0.013, 0.25), mLimb, kn, 'leg');
    const an = grp(side + 'Ank', kn, 0, -0.4, 0);
    mesh(new THREE.SphereGeometry(1, 24, 16), mLimb, an, 'foot', 0, -0.038, 0.05).scale.set(0.053, 0.048, 0.125);
  };
  leg('l'); leg('r');

  // ---------------- head + mask + eyes + mouth ----------------
  const R = 0.135;
  const hg = new THREE.SphereGeometry(R, hi ? 72 : 48, hi ? 56 : 36);
  hg.rotateX(Math.PI / 2); hg.rotateZ(Math.PI / 2);           // pole -> face centre, UV seam -> under the chin
  const deform = (p) => {                                        // Spidey head shape: narrow pointed chin, slightly flat back
    if (p.y < 0) { const k = -p.y / R; p.x *= 1 - 0.24 * Math.pow(k, 1.5); p.z *= 1 - 0.06 * k; }
    if (p.z < 0) p.z *= 0.94;
    if (p.y > 0) p.y *= 1.04;
    return p;
  };
  const hp = hg.attributes.position, tmp = new THREE.Vector3();
  for (let i = 0; i < hp.count; i++) { tmp.fromBufferAttribute(hp, i); deform(tmp); hp.setXYZ(i, tmp.x, tmp.y, tmp.z); }
  hg.computeVertexNormals();
  const headMesh = mesh(hg, mMask, head, 'head', 0, 0.13, 0.005); headMesh.scale.set(0.92, 1.1, 1.0);
  const base = Float32Array.from(hp.array);
  const jaw = []; // [index, weight] of vertices that drop when talking
  for (let i = 0; i < hp.count; i++) {
    const y = base[i * 3 + 1], z = base[i * 3 + 2];
    const w = smooth(-0.072, -0.1, y) * smooth(0.02, 0.1, z); if (w > 0.01) jaw.push(i, w);
  }
  const surf = (x, y, lift) => { // point on the (deformed) face directly in front
    const z = Math.sqrt(Math.max(1e-6, R * R - x * x - y * y)); tmp.set(x, y, z); deform(tmp); tmp.multiplyScalar(1 + lift); return tmp;
  };

  // lens outline in normalized eye space; inner corner = -x
  const N = 44;
  const eyeShape = (p, out) => {
    const pts = [];
    for (let i = 0; i < N; i++) {
      const t = (i / N) * Math.PI * 2; const tip = Math.pow(Math.max(0, Math.cos(t - 3.75)), 5) * 0.5;
      let x = Math.cos(t) * (1 + tip), y = Math.sin(t) * (1 + tip) * 0.82;
      const c = Math.cos(0.22), s = Math.sin(0.22); [x, y] = [x * c - y * s, x * s + y * c];
      x *= p.scale; y *= p.scale;
      const xin = -x;
      const top = p.top + p.tilt * xin * 0.5, bot = p.bot + p.curve * (1 - x * x * 0.6);
      if (y > top) y = top; if (y < bot) y = bot; if (top < bot) y = (top + bot) / 2;
      pts.push(x, y);
    }
    let cx = 0, cy = 0; for (let i = 0; i < N; i++) { cx += pts[i * 2]; cy += pts[i * 2 + 1]; } cx /= N; cy /= N;
    out.cx = cx; out.cy = cy; return pts;
  };
  const fanGeo = (n) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array((n + 1) * 3), 3)); const idx = []; for (let i = 1; i <= n; i++) idx.push(0, i, i === n ? 1 : i + 1); g.setIndex(idx); return g; };
  const mLens = new THREE.MeshPhysicalMaterial({ color: '#d9e3ee', roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1, envMapIntensity: 0.6, side: THREE.DoubleSide });
  const mFrame = new THREE.MeshPhysicalMaterial({ color: '#050506', roughness: 0.45, clearcoat: 0.3, envMapIntensity: 0.25, side: THREE.DoubleSide });
  const mGlint = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.85, side: THREE.DoubleSide });
  const eyes = ['l', 'r'].map((side) => {
    const s = side === 'l' ? 1 : -1;
    const frame = mesh(fanGeo(N), mFrame, headMesh, 'head'), lens = mesh(fanGeo(N), mLens, headMesh, 'head'), glint = mesh(fanGeo(12), mGlint, headMesh, 'head');
    [frame, lens, glint].forEach((m) => { m.position.set(0, 0, 0); m.castShadow = false; m.frustumCulled = false; });
    return { s, frame, lens, glint, p: { ...EYES.neutral } };
  });
  const EX = 0.046, EY = 0.016, EA = 0.033, EB = 0.03;
  const writeFan = (g, pts, cx, cy, sx, ox, oy, a, b, lift, grow = 0) => {
    const arr = g.attributes.position.array, n = pts.length / 2;
    let v = surf(ox + sx * cx * a, oy + cy * b, lift); arr[0] = v.x; arr[1] = v.y; arr[2] = v.z;
    for (let i = 0; i < n; i++) {
      let x = pts[i * 2], y = pts[i * 2 + 1];
      if (grow) { const dx = x - cx, dy = y - cy, l = Math.hypot(dx, dy) || 1; x += (dx / l) * grow; y += (dy / l) * grow; }
      v = surf(ox + sx * x * a, oy + y * b, lift); arr[(i + 1) * 3] = v.x; arr[(i + 1) * 3 + 1] = v.y; arr[(i + 1) * 3 + 2] = v.z;
    }
    g.attributes.position.needsUpdate = true; g.computeBoundingSphere();
  };
  const updateEyes = () => {
    for (const e of eyes) {
      const o = {}; const pts = eyeShape(e.p, o);
      writeFan(e.frame.geometry, pts, o.cx, o.cy, e.s, EX * e.s, EY, EA, EB, 0.012, 0.3);
      writeFan(e.lens.geometry, pts, o.cx, o.cy, e.s, EX * e.s, EY, EA, EB, 0.02, 0);
      const open = Math.max(0, Math.min(1, (e.p.top - e.p.bot) / 1.4));
      const gp = []; for (let i = 0; i < 12; i++) { const t = (i / 12) * Math.PI * 2; gp.push(0.38 + Math.cos(t) * 0.13, 0.28 + Math.sin(t) * 0.13 * open); }
      writeFan(e.glint.geometry, gp, 0.38, 0.28, e.s, EX * e.s, EY, EA, EB, 0.024, 0);
      e.glint.visible = open > 0.35 && o.cy < 0.5;
    }
  };

  // mouth (dark opening under the mask that grows with speech)
  const MN = 24, mouth = mesh(fanGeo(MN), new THREE.MeshStandardMaterial({ color: '#3a0306', roughness: 0.9, side: THREE.DoubleSide }), headMesh, 'head');
  mouth.castShadow = false; mouth.frustumCulled = false;
  const updateMouth = (open, wide) => {
    const pts = [], h = 0.004 + open * 0.95, w = 0.6 + wide * 0.5;
    for (let i = 0; i < MN; i++) { const t = (i / MN) * Math.PI * 2; const y = Math.sin(t); pts.push(Math.cos(t) * w, y > 0 ? y * 0.25 : y * h); }
    writeFan(mouth.geometry, pts, 0, -h * 0.4, 1, 0, -0.077, 0.03, 0.026, 0.012 + open * 0.004);
    mouth.visible = open > 0.03;
    for (let k = 0; k < jaw.length; k += 2) { const i = jaw[k], w2 = jaw[k + 1]; hp.array[i * 3 + 1] = base[i * 3 + 1] - open * 0.02 * w2; }
    hp.needsUpdate = true;
  };

  // ---------------- outfit switching ----------------
  let outfitIdx = 0;
  const setOutfit = (i) => {
    outfitIdx = ((i % OUTFITS.length) + OUTFITS.length) % OUTFITS.length; const o = OUTFITS[outfitIdx];
    const on = !!o.base;
    blazer.visible = collar.visible = bow.visible = on;
    if (on) {
      const t = blazerTex(o.base, { lapel: o.lapel, kind: o.kind });
      [mBlazer.map, mBlazer.alphaMap, mBlazer.bumpMap].forEach((x) => x && x.dispose());
      mBlazer.map = t.map; mBlazer.alphaMap = t.alpha; mBlazer.bumpMap = t.bump; mBlazer.needsUpdate = true;
      mSleeve.map?.dispose(); mSleeve.map = sleeveTex(o.base, o.kind, false); mSleeve.needsUpdate = true;
      mSleeveCuff.map?.dispose(); mSleeveCuff.map = sleeveTex(o.base, o.kind, true); mSleeveCuff.needsUpdate = true;
      mTie.color.set(o.tie);
    }
    for (const a of [armL, armR]) { a.pad.material = on ? mSleeve : mLimb; a.ua.material = on ? mSleeve : mLimb; a.fa.material = on ? mSleeveCuff : mLimb; }
    return o.name;
  };
  setOutfit(0);

  // ---------------- animation state ----------------
  const S = {
    t: 0, sitK: 0, sit: false, readK: 0, read: false, talk: 0, talkT: 0, wide: 0,
    emotion: 'neutral', emoT: 0, look: new THREE.Vector2(), lookT: new THREE.Vector2(), saccade: 0,
    blinkT: 2, blink: 0, clip: null, clipT: 0, clipW: 0, onEvent: null, cur: {}, listening: false, hold: null,
  };
  const KEYS = ['spine', 'chest', 'neck', 'head', 'lSh', 'lEl', 'lWr', 'rSh', 'rEl', 'rWr', 'lHip', 'lKnee', 'lAnk', 'rHip', 'rKnee', 'rAnk'];
  KEYS.forEach((k) => (S.cur[k] = [0, 0, 0]));
  S.cur.hipsY = 0; S.cur.hipsZ = 0; S.cur.lHand = [...HAND.relaxed]; S.cur.rHand = [...HAND.relaxed];

  const mix = (A, B, k) => {               // blend pose B into A by weight k (missing keys untouched)
    const out = { ...A };
    for (const key in B) {
      const b = B[key]; if (b == null) continue;
      if (key === 'lHand' || key === 'rHand') { const bb = typeof b === 'string' ? HAND[b] : b; const aa = typeof out[key] === 'string' ? HAND[out[key]] : out[key] || HAND.relaxed; out[key] = aa.map((v, i) => v + (bb[i] - v) * k); }
      else if (Array.isArray(b)) { const a = out[key] || [0, 0, 0]; out[key] = [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k]; }
      else if (typeof b === 'number') { const a = out[key] || 0; out[key] = a + (b - a) * k; }
    }
    return out;
  };
  const add = (P, key, x = 0, y = 0, z = 0) => { const a = P[key] || [0, 0, 0]; P[key] = [a[0] + x, a[1] + y, a[2] + z]; };

  const api = {
    root, J, parts, headMesh,
    get state() { return S; },
    setOutfit, nextOutfit: () => setOutfit(outfitIdx + 1), get outfit() { return OUTFITS[outfitIdx].name; },
    setSit(b) { S.sit = b; }, setRead(b) { S.read = b; },
    setTalk(v) { S.talkT = v; }, setWide(v) { S.wide = v; },
    setListening(b) { S.listening = b; },
    setEmotion(e) { if (!EYES[e]) e = 'neutral'; S.emotion = e; S.emoT = 0; },
    look(x, y) { S.lookT.set(x, y); S.saccade = 3; },
    play(name, { onEvent, hold } = {}) {
      const c = CLIPS[name]; if (!c) return false;
      if (S.sit && c.standOnly) return false;
      S.clip = name; S.clipT = 0; S.onEvent = onEvent || null; S.hold = hold || null; S.fired = {}; return true;
    },
    stop(name) { if (!name || S.clip === name) { if (S.clip) S.clipT = Math.max(S.clipT, CLIPS[S.clip].dur - 0.3); S.hold = null; } },
    get playing() { return S.clip; },
    freeze(name, at) { if (!name) { S.freeze = false; S.clip = null; return; } S.clip = name; S.clipT = at; S.freeze = true; S.fired = {}; },
    update(dt) {
      S.t += dt; const t = S.t;
      S.sitK = damp(S.sitK, S.sit ? 1 : 0, 4, dt); S.readK = damp(S.readK, S.sit && S.read ? 1 : 0, 4, dt);
      S.talk = damp(S.talk, S.talkT, 22, dt); S.emoT += dt;
      // ---- base pose ----
      let P = mix(STAND, SIT, S.sitK);
      if (S.sitK > 0.01) P = mix(P, mix(DESK, READ, S.readK), S.sitK);
      // ---- emotion posture ----
      const post = POSTURE[S.emotion]; if (post) P = mix(P, post(t, S.sitK > 0.5), Math.min(1, S.emoT * 3) * (S.emoT < 12 ? 1 : Math.max(0, 1 - (S.emoT - 12))));
      // ---- listening lean (hand to ear handled by clip) ----
      if (S.listening) { add(P, 'chest', 0.06, 0, 0); add(P, 'head', 0.05, 0, -0.12); }
      // ---- gesture clip ----
      if (S.clip) {
        const c = CLIPS[S.clip]; if (!S.freeze) S.clipT += dt;
        if (S.hold && c.loop && S.clipT > c.dur - 0.35) S.clipT = c.loopFrom ?? 0.4;
        const u = Math.min(1, S.clipT / c.dur), w = Math.min(1, S.clipT / 0.22) * Math.min(1, (c.dur - S.clipT) / 0.28);
        let cp = clipPose(S.clip, S.clipT, u, S.sitK > 0.5);
        if (S.sitK > 0.5) { cp = { ...cp }; LEG_KEYS.forEach((k) => delete cp[k]); }
        P = mix(P, cp, Math.max(0, w));
        if (c.events) for (const [at, ev] of c.events) if (u >= at && !S.fired[at]) { S.fired[at] = 1; S.onEvent?.(ev); }
        if (S.clipT >= c.dur && !S.freeze) { S.clip = null; S.hold = null; }
      }
      // ---- procedural life: breathing, sway, look, talking bob ----
      const br = Math.sin(t * 1.7);
      add(P, 'chest', br * 0.018, 0, 0); add(P, 'lSh', 0, 0, br * 0.012); add(P, 'rSh', 0, 0, -br * 0.012);
      if (S.sitK < 0.5) { add(P, 'spine', 0, Math.sin(t * 0.5) * 0.03, Math.sin(t * 0.7) * 0.012); P.hipsY = (P.hipsY || 0) + Math.sin(t * 1.7) * 0.004; }
      S.saccade -= dt;
      if (S.saccade <= 0) { S.lookT.set((Math.random() - 0.5) * 0.7, (Math.random() - 0.5) * 0.3); S.saccade = 1.5 + Math.random() * 3; }
      S.look.x = damp(S.look.x, S.lookT.x, 6, dt); S.look.y = damp(S.look.y, S.lookT.y, 6, dt);
      add(P, 'head', S.look.y * 0.22, S.look.x * 0.45, 0); add(P, 'neck', S.look.y * 0.1, S.look.x * 0.2, 0);
      if (S.talk > 0.02) { add(P, 'head', S.talk * Math.sin(t * 7.3) * 0.05, S.talk * Math.sin(t * 2.3) * 0.06, S.talk * Math.sin(t * 3.1) * 0.05); add(P, 'chest', S.talk * Math.sin(t * 3.7) * 0.02, S.talk * Math.sin(t * 1.9) * 0.03, 0); }
      // ---- apply with smoothing ----
      for (const k of KEYS) { const tg = P[k] || [0, 0, 0], c = S.cur[k]; for (let i = 0; i < 3; i++) c[i] = damp(c[i], tg[i], 16, dt); J[k].rotation.set(c[0], c[1], c[2]); }
      S.cur.hipsY = damp(S.cur.hipsY, P.hipsY || 0, 16, dt); S.cur.hipsZ = damp(S.cur.hipsZ, P.hipsZ || 0, 10, dt);
      J.hips.position.y = 0.96 + S.cur.hipsY; J.hips.position.z = S.cur.hipsZ;
      J.hips.rotation.set(P.hipsRot?.[0] || 0, P.hipsRot?.[1] || 0, P.hipsRot?.[2] || 0);
      for (const side of ['l', 'r']) {
        const key = side + 'Hand', tg = typeof P[key] === 'string' ? HAND[P[key]] : P[key] || HAND.relaxed, c = S.cur[key];
        for (let i = 0; i < 5; i++) c[i] = damp(c[i], tg[i], 18, dt);
        J[side + 'Fingers'].forEach((f, i) => { f.a.rotation.x = -c[i] * 1.45; f.b.rotation.x = -c[i] * 1.6; });
        const th = J[side + 'Thumb']; th.a.rotation.x = th.base.x - c[4] * 0.9; th.a.rotation.z = th.base.z * (1 - c[4] * 0.6); th.b.rotation.x = -c[4] * 0.9;
      }
      // ---- eyes: emotion + blink ----
      S.blinkT -= dt; if (S.blinkT <= 0) { S.blink = 0.14; S.blinkT = 2 + Math.random() * 4; }
      const blinking = S.blink > 0; if (blinking) S.blink -= dt;
      const ep = (S.clip && CLIPS[S.clip].eyes) || S.emotion;
      for (const e of eyes) {
        const tg = EYES[ep] || EYES.neutral, side = e.s > 0 ? 'l' : 'r';
        const T = { ...tg, ...(tg[side] || {}) };
        for (const k of ['scale', 'top', 'bot', 'tilt', 'curve']) e.p[k] = damp(e.p[k], blinking ? (k === 'top' ? -0.05 : k === 'bot' ? -0.15 : T[k]) : T[k], blinking ? 40 : 10, dt);
      }
      updateEyes();
      const mouthOpen = S.talk * (0.55 + 0.45 * Math.abs(Math.sin(t * 13.0)) * Math.abs(Math.sin(t * 7.7 + 1)));
      updateMouth(Math.min(1, mouthOpen), S.wide);
    },
  };
  updateEyes(); updateMouth(0, 0);
  return api;
}
