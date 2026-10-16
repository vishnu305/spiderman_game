// Procedural textures (drawn on <canvas>) – no image files needed, so everything stays sharp at any size.
import * as THREE from 'three';

export const cv = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
let seed = 11;
export const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

export function tex(c, { srgb = true, rep = null, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
  return t;
}

// ---------- web lines on a UV grid (used by suit, gloves, boots, mask) ----------
// cols = vertical strands (u), rows = cross strands (v). Cross strands sag between verticals like a real web.
function webLines(g, W, H, cols, rows, { sag = 0.35, color = '#140306', width = 3, hi = 'rgba(255,150,150,.16)', yFrom = 0, yTo = 1, sagUp = false, wrapX = true } = {}) {
  const dx = W / cols, y0 = yFrom * H, y1 = yTo * H, dy = (y1 - y0) / rows;
  const stroke = (col, w, off) => {
    g.strokeStyle = col; g.lineWidth = w; g.lineCap = 'round';
    for (let i = 0; i <= cols; i++) { const x = i * dx + off; g.beginPath(); g.moveTo(x, y0); g.lineTo(x, y1); g.stroke(); }
    for (let j = 1; j < rows + (yTo < 1 ? 0 : 1); j++) {
      const y = y0 + j * dy + off; const s = dy * sag * (sagUp ? -1 : 1);
      g.beginPath();
      for (let i = 0; i < cols + (wrapX ? 0 : 0); i++) { const xa = i * dx + off, xb = xa + dx; g.moveTo(xa, y); g.quadraticCurveTo((xa + xb) / 2, y + s, xb, y); }
      g.stroke();
    }
  };
  stroke(hi, width * 0.7, -width * 0.55); // light edge = raised look
  stroke(color, width, 0);
}

function fabricNoise(g, W, H, a = 0.06) {
  for (let i = 0; i < W * H / 220; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * a})`; g.fillRect(rnd() * W, rnd() * H, 2, 2); }
  for (let i = 0; i < W * H / 500; i++) { g.fillStyle = `rgba(255,255,255,${rnd() * a * 0.6})`; g.fillRect(rnd() * W, rnd() * H, 1.5, 1.5); }
}

function spider(g, cx, cy, s, color) {
  g.save(); g.translate(cx, cy); g.scale(s, s); g.fillStyle = color; g.strokeStyle = color; g.lineCap = 'round'; g.lineJoin = 'round';
  g.beginPath(); g.ellipse(0, 0.12, 0.13, 0.32, 0, 0, 7); g.fill();          // abdomen
  g.beginPath(); g.ellipse(0, -0.26, 0.09, 0.11, 0, 0, 7); g.fill();       // head
  g.lineWidth = 0.055;
  const legs = [[-0.05, [-0.35, -0.55], [-0.45, -0.95]], [-0.0, [-0.42, -0.2], [-0.6, -0.5]], [0.1, [-0.42, 0.25], [-0.62, 0.55]], [0.2, [-0.32, 0.6], [-0.42, 1.0]]];
  for (const sgn of [-1, 1]) for (const [y, k, e] of legs) { g.beginPath(); g.moveTo(0, y); g.lineTo(k[0] * -sgn, k[1]); g.lineTo(e[0] * -sgn, e[1]); g.stroke(); }
  g.restore();
}

// Red suit with web + chest spider. phiStart = PI on lathes puts the FRONT at u = 0.5 (canvas centre).
export function suitRedTex({ W = 1024, H = 1024, cols = 22, rows = 12, emblem = false, circumference = 1.1, height = 0.6, blueSides = false } = {}) {
  const c = cv(W, H), g = c.getContext('2d'), b = cv(W, H), bg = b.getContext('2d');
  const gr = g.createLinearGradient(0, 0, W, 0);
  gr.addColorStop(0, '#9e0c16'); gr.addColorStop(0.5, '#d4151f'); gr.addColorStop(1, '#9e0c16');
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  if (blueSides) {
    const blue = (x0, x1) => { const bgd = g.createLinearGradient(x0, 0, x1, 0); bgd.addColorStop(0, '#11307a'); bgd.addColorStop(1, '#1b46a8'); g.fillStyle = bgd; g.fillRect(x0, 0, x1 - x0, H); };
    blue(W * 0.16, W * 0.33); blue(W * 0.67, W * 0.84);
  }
  fabricNoise(g, W, H);
  bg.fillStyle = '#000'; bg.fillRect(0, 0, W, H);
  webLines(g, W, H, cols, rows);
  webLines(bg, W, H, cols, rows, { color: '#fff', hi: 'rgba(255,255,255,.4)', width: 4 });
  if (emblem) {
    const sx = W / circumference, sy = H / height, cx = W / 2, cy = H * 0.3;
    g.save(); g.translate(cx, cy); g.scale(sx / sy, 1); spider(g, 0, 0, sy * 0.075, '#0d0d10'); g.restore();
    g.save(); g.translate(W * 0.0, H * 0.4); g.scale(sx / sy, 1); spider(g, 0, 0, sy * 0.11, '#7a0a10'); g.restore();
    g.save(); g.translate(W, H * 0.4); g.scale(sx / sy, 1); spider(g, 0, 0, sy * 0.11, '#7a0a10'); g.restore();
    bg.save(); bg.translate(cx, cy); bg.scale(sx / sy, 1); spider(bg, 0, 0, sy * 0.075, '#bbb'); bg.restore();
  }
  return { map: tex(c), bump: tex(b, { srgb: false }) };
}

export function suitBlueTex({ W = 512, H = 512 } = {}) {
  const c = cv(W, H), g = c.getContext('2d'), b = cv(W, H), bg = b.getContext('2d');
  const gr = g.createLinearGradient(0, 0, W, 0); gr.addColorStop(0, '#0d2566'); gr.addColorStop(0.5, '#1f4fb8'); gr.addColorStop(1, '#0d2566');
  g.fillStyle = gr; g.fillRect(0, 0, W, H); bg.fillStyle = '#777'; bg.fillRect(0, 0, W, H);
  // fine hex weave
  for (let y = 0; y < H; y += 8) for (let x = 0; x < W; x += 9) {
    const ox = (y / 8) % 2 ? 4.5 : 0; g.fillStyle = 'rgba(0,0,30,.22)'; g.fillRect(x + ox, y, 7, 6);
    bg.fillStyle = '#aaa'; bg.fillRect(x + ox + 1, y + 1, 5, 4);
  }
  fabricNoise(g, W, H, 0.05);
  return { map: tex(c), bump: tex(b, { srgb: false }) };
}

// Mask: sphere is rotated so its pole looks forward -> u = spokes around the face, v = rings from face centre (canvas top).
export function maskTex({ W = 1024, H = 1024 } = {}) {
  const c = cv(W, H), g = c.getContext('2d'), b = cv(W, H), bg = b.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#d9161f'); gr.addColorStop(0.6, '#c3121b'); gr.addColorStop(1, '#8e0b13');
  g.fillStyle = gr; g.fillRect(0, 0, W, H); fabricNoise(g, W, H, 0.05);
  bg.fillStyle = '#000'; bg.fillRect(0, 0, W, H);
  const opts = { sag: -0.42, width: 3.2 };
  webLines(g, W, H, 18, 20, opts);
  webLines(bg, W, H, 18, 20, { ...opts, color: '#fff', hi: 'rgba(255,255,255,.4)', width: 4.5 });
  return { map: tex(c), bump: tex(b, { srgb: false }) };
}

// Blazer: tweed / herringbone + V opening (alpha) + lapels + pocket square. Front = u 0.5.
export function blazerTex(base = '#6a4426', { W = 1024, H = 1024, lapel = '#4a2c16', kind = 'tweed' } = {}) {
  const c = cv(W, H), g = c.getContext('2d'), a = cv(W, H), ag = a.getContext('2d'), b = cv(W, H), bg = b.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, W, H); bg.fillStyle = '#808080'; bg.fillRect(0, 0, W, H);
  if (kind === 'tweed') {
    for (let y = 0; y < H; y += 10) for (let x = 0; x < W; x += 10) {
      const dir = (Math.floor(x / 40) % 2) ? 1 : -1;
      g.strokeStyle = `rgba(0,0,0,${0.12 + rnd() * 0.1})`; g.lineWidth = 2; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 10, y + 10 * dir); g.stroke();
      bg.strokeStyle = '#a0a0a0'; bg.lineWidth = 2; bg.beginPath(); bg.moveTo(x, y); bg.lineTo(x + 10, y + 10 * dir); bg.stroke();
    }
    for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(${rnd() > 0.5 ? '255,220,170' : '20,10,0'},${rnd() * 0.12})`; g.fillRect(rnd() * W, rnd() * H, 3, 1); }
  } else {
    for (let i = 0; i < 6000; i++) { g.fillStyle = `rgba(255,255,255,${rnd() * 0.04})`; g.fillRect(rnd() * W, rnd() * H, 2, 2); }
    if (kind === 'pinstripe') for (let x = 0; x < W; x += 22) { g.fillStyle = 'rgba(255,255,255,.12)'; g.fillRect(x, 0, 2, H); }
  }
  // alpha: white = cloth, black = open (V neckline)
  ag.fillStyle = '#fff'; ag.fillRect(0, 0, W, H); ag.fillStyle = '#000';
  const btn = 0.36; // button height (0 = hem, 1 = collar)
  const half = (v) => (v < btn ? 0.004 + (btn - v) * 0.12 : 0.004 + ((v - btn) / (1 - btn)) * 0.115);
  ag.beginPath();
  for (let i = 0; i <= 60; i++) { const v = i / 60; ag.lineTo(W * (0.5 - half(v)), H * (1 - v)); }
  for (let i = 60; i >= 0; i--) { const v = i / 60; ag.lineTo(W * (0.5 + half(v)), H * (1 - v)); }
  ag.closePath(); ag.fill();
  // lapels (darker satin band along the V, above the button)
  g.fillStyle = lapel;
  for (const s of [-1, 1]) {
    g.beginPath();
    for (let i = 0; i <= 40; i++) { const v = btn + (i / 40) * (1 - btn); g.lineTo(W * (0.5 + s * half(v)), H * (1 - v)); }
    for (let i = 40; i >= 0; i--) { const v = btn + (i / 40) * (1 - btn); const w = 0.005 + (i / 40) * 0.07; g.lineTo(W * (0.5 + s * (half(v) + w)), H * (1 - v) + (i > 30 ? (i - 30) * 3 : 0)); }
    g.closePath(); g.fill();
    bg.strokeStyle = '#fff'; bg.lineWidth = 5; bg.beginPath();
    for (let i = 0; i <= 40; i++) { const v = btn + (i / 40) * (1 - btn); const w = 0.005 + (i / 40) * 0.07; bg.lineTo(W * (0.5 + s * (half(v) + w)), H * (1 - v)); }
    bg.stroke();
  }
  // stitched hem + buttons
  g.strokeStyle = 'rgba(255,230,190,.25)'; g.setLineDash([6, 6]); g.lineWidth = 2; g.beginPath(); g.moveTo(0, H - 14); g.lineTo(W, H - 14); g.stroke(); g.setLineDash([]);
  for (const v of [btn - 0.02, btn - 0.13]) { g.fillStyle = '#20140c'; g.beginPath(); g.arc(W * 0.5 + 8, H * (1 - v), 9, 0, 7); g.fill(); g.fillStyle = 'rgba(255,230,180,.35)'; g.beginPath(); g.arc(W * 0.5 + 6, H * (1 - v) - 3, 3, 0, 7); g.fill(); }
  // breast pocket + pocket square on the LEFT chest (u ~ 0.62)
  const px = W * 0.6, py = H * 0.3;
  g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(px, py, W * 0.06, 5);
  g.fillStyle = '#f2f2f2'; g.beginPath(); g.moveTo(px + 6, py); g.lineTo(px + 20, py - 28); g.lineTo(px + 34, py - 6); g.lineTo(px + 48, py - 26); g.lineTo(px + 58, py); g.closePath(); g.fill();
  g.fillStyle = '#d4151f'; g.beginPath(); g.moveTo(px + 20, py - 28); g.lineTo(px + 27, py - 12); g.lineTo(px + 34, py - 6); g.closePath(); g.fill();
  // side pockets
  for (const x of [0.36, 0.64]) { g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(W * x - W * 0.045, H * 0.8, W * 0.09, 6); }
  return { map: tex(c), alpha: tex(a, { srgb: false }), bump: tex(b, { srgb: false }) };
}

export function sleeveTex(base = '#6a4426', kind = 'tweed', cuff = true) {
  const c = cv(512, 512), g = c.getContext('2d'); g.fillStyle = base; g.fillRect(0, 0, 512, 512);
  if (kind === 'tweed') for (let y = 0; y < 512; y += 10) for (let x = 0; x < 512; x += 10) { const d = (Math.floor(x / 40) % 2) ? 1 : -1; g.strokeStyle = `rgba(0,0,0,${0.12 + rnd() * 0.1})`; g.lineWidth = 2; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 10, y + 10 * d); g.stroke(); }
  if (kind === 'pinstripe') for (let x = 0; x < 512; x += 22) { g.fillStyle = 'rgba(255,255,255,.12)'; g.fillRect(x, 0, 2, 512); }
  for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(255,230,190,${rnd() * 0.06})`; g.fillRect(rnd() * 512, rnd() * 512, 3, 1); }
  // white shirt cuff at the wrist end (v=0 -> canvas bottom)
  if (cuff) { g.fillStyle = '#f4f1ea'; g.fillRect(0, 512 - 60, 512, 60); g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(0, 512 - 62, 512, 4); }
  return tex(c);
}

// ============== WORLD TEXTURES ==============
export function woodTex(w, h, planks, vertical, hue = 24, light = 30) {
  const c = cv(w, h), g = c.getContext('2d'); g.fillStyle = `hsl(${hue},50%,${light}%)`; g.fillRect(0, 0, w, h);
  const size = (vertical ? w : h) / planks;
  for (let i = 0; i < planks; i++) {
    const l = light - 6 + rnd() * 12; g.fillStyle = `hsl(${hue - 3 + rnd() * 6},52%,${l}%)`;
    vertical ? g.fillRect(i * size, 0, size - 3, h) : g.fillRect(0, i * size, w, size - 3);
    for (let k = 0; k < 50; k++) {
      g.strokeStyle = `rgba(30,10,0,${rnd() * 0.2})`; g.lineWidth = 1 + rnd() * 1.5; g.beginPath();
      if (vertical) { const x = i * size + rnd() * size; g.moveTo(x, 0); g.bezierCurveTo(x + rnd() * 8 - 4, h / 3, x + rnd() * 8 - 4, 2 * h / 3, x + rnd() * 6 - 3, h); }
      else { const y = i * size + rnd() * size; g.moveTo(0, y); g.bezierCurveTo(w / 3, y + rnd() * 8 - 4, 2 * w / 3, y + rnd() * 8 - 4, w, y + rnd() * 6 - 3); }
      g.stroke();
    }
  }
  return c;
}

export function wallpaperTex() {
  const c = cv(512, 512), g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 512); gr.addColorStop(0, '#103c48'); gr.addColorStop(1, '#0b2b35'); g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
  // retro 70s atomic / diamond pattern
  g.strokeStyle = 'rgba(255,196,110,.16)'; g.lineWidth = 3;
  for (let y = 0; y < 512; y += 128) for (let x = 0; x < 512; x += 128) {
    g.beginPath(); g.moveTo(x + 64, y + 8); g.lineTo(x + 120, y + 64); g.lineTo(x + 64, y + 120); g.lineTo(x + 8, y + 64); g.closePath(); g.stroke();
    g.fillStyle = 'rgba(255,140,90,.18)'; g.beginPath(); g.arc(x + 64, y + 64, 14, 0, 7); g.fill();
    g.fillStyle = 'rgba(80,220,230,.12)'; g.beginPath(); g.arc(x, y, 9, 0, 7); g.fill();
  }
  for (let i = 0; i < 4000; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.08})`; g.fillRect(rnd() * 512, rnd() * 512, 2, 2); }
  return c;
}

// City skyline seen through the window. tod: 'night' | 'dusk' | 'day'
export function skylineTex(tod = 'dusk') {
  const W = 2048, H = 1024, c = cv(W, H), g = c.getContext('2d');
  const sky = g.createLinearGradient(0, 0, 0, H);
  if (tod === 'day') { sky.addColorStop(0, '#5fb4ff'); sky.addColorStop(0.7, '#bfe3ff'); sky.addColorStop(1, '#ffe3b3'); }
  else if (tod === 'night') { sky.addColorStop(0, '#05061a'); sky.addColorStop(0.6, '#1a1446'); sky.addColorStop(1, '#3a1d5c'); }
  else { sky.addColorStop(0, '#1b1446'); sky.addColorStop(0.45, '#6a2a78'); sky.addColorStop(0.75, '#ff6a5a'); sky.addColorStop(1, '#ffb259'); }
  g.fillStyle = sky; g.fillRect(0, 0, W, H);
  if (tod !== 'day') { for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(255,255,255,${rnd() * 0.8})`; g.fillRect(rnd() * W, rnd() * H * 0.5, 2, 2); } }
  // moon / sun
  const mx = W * 0.78, my = H * (tod === 'day' ? 0.2 : 0.22);
  const mg = g.createRadialGradient(mx, my, 10, mx, my, 160); mg.addColorStop(0, tod === 'day' ? 'rgba(255,250,220,1)' : 'rgba(255,240,210,1)'); mg.addColorStop(0.35, tod === 'day' ? 'rgba(255,240,180,.5)' : 'rgba(255,220,180,.35)'); mg.addColorStop(1, 'rgba(255,200,150,0)');
  g.fillStyle = mg; g.beginPath(); g.arc(mx, my, 160, 0, 7); g.fill(); g.fillStyle = tod === 'day' ? '#fffbe8' : '#ffeed8'; g.beginPath(); g.arc(mx, my, 54, 0, 7); g.fill();
  // three layers of buildings
  const layers = tod === 'day' ? [['#7d93b8', 0.55, 0.25], ['#4f6488', 0.65, 0.4], ['#2e3d5a', 0.78, 0.6]] : [['#2a1f55', 0.5, 0.25], ['#1a143c', 0.62, 0.45], ['#0c0a22', 0.76, 0.75]];
  layers.forEach(([col, top, win], li) => {
    let x = -20;
    while (x < W) {
      const bw = 50 + rnd() * 120, bh = H * (1 - top) * (0.4 + rnd() * 0.7), y = H - bh;
      g.fillStyle = col; g.fillRect(x, y, bw, bh);
      if (rnd() > 0.85) { g.beginPath(); g.moveTo(x + bw * 0.35, y); g.lineTo(x + bw / 2, y - 60 - rnd() * 80); g.lineTo(x + bw * 0.65, y); g.fill(); }  // spires
      if (rnd() > 0.7) { g.fillRect(x + bw * 0.2, y - 18, bw * 0.6, 18); }
      if (li > 0) for (let wy = y + 12; wy < H - 10; wy += 16) for (let wx = x + 8; wx < x + bw - 8; wx += 13) {
        if (rnd() < win * (tod === 'day' ? 0.25 : 0.55)) { g.fillStyle = tod === 'day' ? 'rgba(200,230,255,.5)' : `rgba(255,${200 + rnd() * 40},${120 + rnd() * 60},${0.55 + rnd() * 0.45})`; g.fillRect(wx, wy, 6, 8); }
      }
      x += bw + 4;
    }
  });
  // iconic tower with antenna + red light
  const tx = W * 0.32; g.fillStyle = tod === 'day' ? '#26324a' : '#08061a';
  g.fillRect(tx - 40, H * 0.32, 80, H); g.fillRect(tx - 26, H * 0.24, 52, H); g.fillRect(tx - 12, H * 0.17, 24, H); g.fillRect(tx - 3, H * 0.08, 6, H);
  g.fillStyle = '#ff3355'; g.beginPath(); g.arc(tx, H * 0.08, 5, 0, 7); g.fill();
  // haze
  const hz = g.createLinearGradient(0, H * 0.6, 0, H); hz.addColorStop(0, 'rgba(255,120,120,0)'); hz.addColorStop(1, tod === 'day' ? 'rgba(255,255,255,.25)' : 'rgba(255,90,140,.25)'); g.fillStyle = hz; g.fillRect(0, H * 0.6, W, H * 0.4);
  return c;
}

export function neonTex(text, c1, c2, W = 1024, H = 256, font = 'Bangers') {
  const c = cv(W, H), g = c.getContext('2d'); g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `${Math.round(H * 0.5)}px ${font}, Impact, sans-serif`;
  g.shadowColor = c1; g.shadowBlur = 30; g.fillStyle = c1; g.fillText(text, W / 2, H * 0.53); g.fillText(text, W / 2, H * 0.53);
  g.shadowBlur = 8; g.fillStyle = '#fff'; g.fillText(text, W / 2, H * 0.53);
  g.lineWidth = 7; g.strokeStyle = c2; g.shadowColor = c2; g.shadowBlur = 24; g.beginPath(); g.roundRect(14, 16, W - 28, H - 32, 30); g.stroke();
  return c;
}

export function posterTex() {
  const W = 512, H = 700, c = cv(W, H), g = c.getContext('2d');
  g.fillStyle = '#efe2bf'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#c4111f'; g.fillRect(0, 0, W, 120);
  g.fillStyle = '#fff'; g.font = '86px Bangers, Impact'; g.textAlign = 'center'; g.fillText('THE DAILY WEB', W / 2, 92);
  g.fillStyle = '#16120d'; g.font = '900 52px "Playfair Display", Georgia'; g.fillText('SPIDEY', W / 2, 200); g.fillText('SAVES', W / 2, 256); g.fillText('THE CITY!', W / 2, 312);
  g.save(); g.translate(W / 2, 480); g.fillStyle = '#16120d'; g.beginPath(); g.arc(0, 0, 120, 0, 7); g.fill(); spider(g, 0, 0, 130, '#c4111f'); g.restore();
  for (let i = 0; i < 6; i++) { g.fillStyle = 'rgba(0,0,0,.55)'; g.fillRect(40, 620 + i * 12, W - 80 - (i % 3) * 40, 5); }
  for (let i = 0; i < 2000; i++) { g.fillStyle = `rgba(90,60,20,${rnd() * 0.08})`; g.fillRect(rnd() * W, rnd() * H, 2, 2); }
  return c;
}

export function rugTex() {
  const c = cv(1024, 1024), g = c.getContext('2d'); const cx = 512;
  const cols = ['#5a0c18', '#8a1424', '#d9a441', '#1d3f52', '#8a1424', '#5a0c18'];
  cols.forEach((col, i) => { g.fillStyle = col; g.beginPath(); g.arc(cx, cx, 512 - i * 70, 0, 7); g.fill(); });
  g.strokeStyle = 'rgba(255,220,150,.35)'; g.lineWidth = 6; for (let r = 60; r < 512; r += 70) { g.beginPath(); g.arc(cx, cx, r, 0, 7); g.stroke(); }
  g.save(); g.translate(cx, cx); spider(g, 0, 0, 120, 'rgba(0,0,0,.45)'); g.restore();
  for (let i = 0; i < 30000; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.15})`; g.fillRect(rnd() * 1024, rnd() * 1024, 2, 2); }
  return c;
}

export function chairTex() {
  const c = cv(512, 640), g = c.getContext('2d'); const gr = g.createLinearGradient(0, 0, 0, 640); gr.addColorStop(0, '#6e1620'); gr.addColorStop(1, '#3a0a10'); g.fillStyle = gr; g.fillRect(0, 0, 512, 640);
  for (let j = 0; j < 8; j++) for (let i = 0; i < 6; i++) {
    const x = 40 + i * 86 + (j % 2) * 43, y = 50 + j * 76;
    g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = 4; g.beginPath(); g.moveTo(x, y - 38); g.lineTo(x + 43, y); g.lineTo(x, y + 38); g.lineTo(x - 43, y); g.closePath(); g.stroke();
    const rg = g.createRadialGradient(x - 3, y - 3, 1, x, y, 9); rg.addColorStop(0, '#f2cf7a'); rg.addColorStop(1, '#6b4a10'); g.fillStyle = rg; g.beginPath(); g.arc(x, y, 8, 0, 7); g.fill();
  }
  return c;
}

export { spider };
