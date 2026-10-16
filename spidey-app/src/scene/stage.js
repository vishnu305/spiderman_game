// =====================================================================
//  STAGE  –  renderer, retro studio room, lights, post-processing (bloom + colour grade), camera, pokes
// =====================================================================
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { createSpidey } from './spidey.js';
import { cv, tex, woodTex, wallpaperTex, skylineTex, neonTex, posterTex, rugTex, chairTex, spider } from './textures.js';

const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const isMobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);

const GradeShader = {
  uniforms: { tDiffuse: { value: null }, time: { value: 0 }, vign: { value: 0.55 }, grain: { value: 0.035 }, sat: { value: 1.12 }, res: { value: new THREE.Vector2(1, 1) }, flash: { value: 0 } },
  vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: `uniform sampler2D tDiffuse;uniform float time,vign,grain,sat,flash;uniform vec2 res;varying vec2 vUv;
  void main(){vec2 uv=vUv;vec2 d=uv-.5;float ca=dot(d,d)*.008;
  vec3 c=vec3(texture2D(tDiffuse,uv+d*ca).r,texture2D(tDiffuse,uv).g,texture2D(tDiffuse,uv-d*ca).b);
  c=clamp(c,0.,1.);float l=dot(c,vec3(.299,.587,.114));
  c+=mix(vec3(-.015,.012,.04),vec3(.045,.018,-.03),smoothstep(.15,.8,l));
  c=mix(vec3(l),c,sat);c=clamp(c,0.,1.);c=mix(c,c*c*(3.-2.*c),.35);
  c*=1.-vign*smoothstep(.38,1.,length(d*vec2(1.15,1.))*1.3);
  c+=vec3(1.,.15,.1)*flash*.18*(1.-length(d));
  float n=fract(sin(dot(uv*res+fract(time)*61.,vec2(12.9898,78.233)))*43758.5453);c+=(n-.5)*grain;
  gl_FragColor=vec4(c,1.);}`,
};

export function createStage(canvas, { onPoke, onWeb } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.6 : 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#0d0716');
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.32;
  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 60);

  const std = (o) => new THREE.MeshStandardMaterial({ roughness: 0.7, metalness: 0.02, ...o });
  const add = (geo, mat, x, y, z, par = scene, shadow = true) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = true; par.add(m); return m; };
  const box = (w, h, d, mat, x, y, z, par) => add(new THREE.BoxGeometry(w, h, d), mat, x, y, z, par);
  const rbox = (w, h, d, r, mat, x, y, z, par) => add(new RoundedBoxGeometry(w, h, d, 4, r), mat, x, y, z, par);
  const repTex = (c, rx, ry) => tex(c, { rep: [rx, ry] });

  // ================= ROOM =================
  const wallC = wallpaperTex(), woodV = woodTex(1024, 512, 18, true, 22, 26), woodF = woodTex(1024, 1024, 12, false, 26, 30), woodDark = woodTex(512, 512, 6, true, 18, 18);
  const WZ = -2.6, WIN = { x0: -1.3, x1: 1.3, y0: 0.95, y1: 2.45 };
  const wallMat = (w, h) => std({ map: repTex(wallC, w / 1.1, h / 1.1), roughness: 0.85 });
  const panel = (x0, x1, y0, y1) => box(x1 - x0, y1 - y0, 0.2, wallMat(x1 - x0, y1 - y0), (x0 + x1) / 2, (y0 + y1) / 2, WZ - 0.1);
  panel(-7, WIN.x0, 0, 5.5); panel(WIN.x1, 7, 0, 5.5); panel(WIN.x0, WIN.x1, WIN.y1, 5.5); panel(WIN.x0, WIN.x1, 0, WIN.y0);
  box(14, 0.95, 0.06, std({ map: repTex(woodV, 7, 1), roughness: 0.5 }), 0, 0.475, WZ + 0.03);           // wainscot
  box(14, 0.07, 0.1, std({ color: '#c8963e', metalness: 0.6, roughness: 0.3 }), 0, 0.97, WZ + 0.05);     // chair rail
  box(14, 0.12, 0.08, std({ color: '#2a1408', roughness: 0.5 }), 0, 0.06, WZ + 0.06);                    // skirting
  for (const s of [-1, 1]) box(0.2, 5.5, 8, wallMat(8, 5.5), s * 4.8, 2.75, 1.2);                         // side walls
  const floor = add(new THREE.PlaneGeometry(14, 10), std({ map: repTex(woodF, 4, 3), roughness: 0.32, metalness: 0.05 }), 0, 0, 1.4, scene, false); floor.rotation.x = -Math.PI / 2;
  const rug = add(new THREE.CircleGeometry(1.35, 64), std({ map: tex(rugTex()), roughness: 0.95 }), 0, 0.006, 0.25, scene, false); rug.rotation.x = -Math.PI / 2; rug.scale.y = 0.62;

  // window: skyline (outside), frame, mullions, glass sheen, sill, curtains
  const hour = new Date().getHours(); const tod = hour >= 7 && hour < 16 ? 'day' : hour >= 16 && hour < 19 ? 'dusk' : 'night';
  const skyMat = new THREE.MeshBasicMaterial({ map: tex(skylineTex(tod)) });
  const sky = add(new THREE.PlaneGeometry(7, 3.5), skyMat, 0, 1.75, -4.2, scene, false);
  const frameMat = std({ map: tex(woodDark), roughness: 0.45 });
  const fw = 0.09; const ww = WIN.x1 - WIN.x0, wh = WIN.y1 - WIN.y0, wcx = 0, wcy = (WIN.y0 + WIN.y1) / 2;
  box(ww + fw * 2, fw, 0.16, frameMat, wcx, WIN.y1 + fw / 2, WZ); box(ww + fw * 2, fw, 0.16, frameMat, wcx, WIN.y0 - fw / 2, WZ);
  box(fw, wh, 0.16, frameMat, WIN.x0 - fw / 2, wcy, WZ); box(fw, wh, 0.16, frameMat, WIN.x1 + fw / 2, wcy, WZ);
  box(0.04, wh, 0.06, frameMat, wcx, wcy, WZ - 0.04); box(ww, 0.04, 0.06, frameMat, wcx, wcy + 0.15, WZ - 0.04);
  box(ww + 0.4, 0.06, 0.32, frameMat, wcx, WIN.y0 - 0.1, WZ + 0.1);
  add(new THREE.PlaneGeometry(ww, wh), new THREE.MeshPhysicalMaterial({ color: '#ffffff', transparent: true, opacity: 0.06, roughness: 0.05, metalness: 0, clearcoat: 1 }), wcx, wcy, WZ - 0.02, scene, false);
  const velvet = new THREE.MeshPhysicalMaterial({ color: '#7a0d1c', roughness: 0.75, sheen: 1, sheenColor: new THREE.Color('#ff6a7a'), sheenRoughness: 0.35, side: THREE.DoubleSide });
  for (const s of [-1, 1]) {
    const g = new THREE.PlaneGeometry(0.8, 2.75, 48, 1), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i); p.setZ(i, 0.05 * Math.sin(x * 34) + 0.02 * Math.sin(x * 11)); p.setX(i, x * (1 - 0.18 * Math.max(0, (-y - 0.4) / 1.0) * 0)); }
    g.computeVertexNormals(); add(g, velvet, s * (ww / 2 + 0.28), 1.9, WZ + 0.2);
    add(new THREE.TorusGeometry(0.1, 0.025, 8, 20), std({ color: '#d9a441', metalness: 0.8, roughness: 0.25 }), s * (ww / 2 + 0.28), 1.45, WZ + 0.28);
  }
  const rod = add(new THREE.CylinderGeometry(0.025, 0.025, ww + 1.4, 12), std({ color: '#d9a441', metalness: 0.85, roughness: 0.25 }), 0, 3.3, WZ + 0.22); rod.rotation.z = Math.PI / 2;

  // neon sign + ON AIR box + poster + framed web art
  const neonMat = new THREE.MeshBasicMaterial({ map: tex(neonTex('SPIDEY NEWS 24', '#ff2a6d', '#29e7ff')), transparent: true, toneMapped: false, depthWrite: false });
  const neon = add(new THREE.PlaneGeometry(1.8, 0.45), neonMat, 0, 2.72, WZ + 0.05, scene, false);
  const onAirMat = new THREE.MeshBasicMaterial({ map: tex(neonTex('ON AIR', '#ff2020', '#ff2020', 512, 192)), transparent: true, toneMapped: false, opacity: 0.25 });
  rbox(0.62, 0.26, 0.08, 0.03, std({ color: '#1a0a0a' }), 2.15, 2.35, WZ + 0.05);
  add(new THREE.PlaneGeometry(0.58, 0.22), onAirMat, 2.15, 2.35, WZ + 0.1, scene, false);
  const poster = add(new THREE.PlaneGeometry(0.75, 1.02), std({ map: tex(posterTex()), roughness: 0.6 }), -2.25, 1.85, WZ + 0.06, scene, false);
  box(0.83, 1.1, 0.04, std({ color: '#c8963e', metalness: 0.6, roughness: 0.35 }), -2.25, 1.85, WZ + 0.03);
  const art = cv(256, 256), ag = art.getContext('2d'); ag.fillStyle = '#101826'; ag.fillRect(0, 0, 256, 256); ag.strokeStyle = 'rgba(255,255,255,.75)'; ag.lineWidth = 2;
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; ag.beginPath(); ag.moveTo(128, 128); ag.lineTo(128 + Math.cos(a) * 140, 128 + Math.sin(a) * 140); ag.stroke(); }
  for (let r = 14; r < 140; r += 16) { ag.beginPath(); for (let i = 0; i <= 12; i++) { const a = (i / 12) * Math.PI * 2; const rr = i % 1 ? r : r * 0.96; ag.lineTo(128 + Math.cos(a) * rr, 128 + Math.sin(a) * rr); } ag.stroke(); }
  spider(ag, 160, 150, 40, '#e01b2b');
  add(new THREE.PlaneGeometry(0.5, 0.5), std({ map: tex(art) }), 3.1, 1.8, WZ + 0.06, scene, false);
  box(0.56, 0.56, 0.03, std({ color: '#1b1b1b', roughness: 0.4 }), 3.1, 1.8, WZ + 0.035);

  // floor lamp (left) + plant
  const brass = std({ color: '#c99a45', metalness: 0.85, roughness: 0.28 });
  add(new THREE.CylinderGeometry(0.17, 0.2, 0.04, 24), brass, -1.95, 0.02, -1.9);
  add(new THREE.CylinderGeometry(0.018, 0.018, 1.6, 10), brass, -1.95, 0.82, -1.9);
  const shadeM = new THREE.MeshStandardMaterial({ color: '#f3c27a', emissive: '#ffb347', emissiveIntensity: 0.9, side: THREE.DoubleSide, roughness: 0.9 });
  add(new THREE.CylinderGeometry(0.16, 0.26, 0.3, 28, 1, true), shadeM, -1.95, 1.72, -1.9, scene, false);
  const lampL = new THREE.PointLight('#ffb35c', 2.2, 4.5, 1.6); lampL.position.set(-1.95, 1.65, -1.85); scene.add(lampL);
  add(new THREE.CylinderGeometry(0.18, 0.14, 0.38, 20), std({ color: '#b5502d', roughness: 0.6 }), -2.8, 0.19, -1.7);
  const leafM = std({ color: '#2f7a3a', roughness: 0.6, side: THREE.DoubleSide });
  for (let i = 0; i < 14; i++) { const l = add(new THREE.SphereGeometry(0.2, 10, 8), leafM, -2.8, 0.55 + Math.random() * 0.5, -1.7, scene); l.scale.set(0.35, 1.2, 0.12); l.rotation.set((Math.random() - 0.5) * 1.2, (i / 14) * Math.PI * 2, (Math.random() - 0.5) * 1.2); l.position.x += Math.cos(i) * 0.12; l.position.z += Math.sin(i) * 0.12; }

  // ================= RETRO TV (right) =================
  const tvC = cv(640, 480), tvTex = tex(tvC, { aniso: 4 });
  const tvMat = new THREE.MeshBasicMaterial({ map: tvTex, toneMapped: false });
  const tv = new THREE.Group(); tv.position.set(2.25, 0, -1.75); tv.rotation.y = -0.38; scene.add(tv);
  const teak = std({ map: tex(woodTex(512, 512, 5, false, 24, 28)), roughness: 0.42 });
  rbox(1.0, 0.5, 0.55, 0.03, teak, 0, 0.32, 0, tv);
  for (const x of [-0.42, 0.42]) add(new THREE.CylinderGeometry(0.02, 0.012, 0.12, 8), brass, x, 0.03, 0.18, tv);
  rbox(1.04, 0.78, 0.6, 0.08, teak, 0, 0.98, 0, tv);
  rbox(0.74, 0.6, 0.05, 0.05, std({ color: '#111', roughness: 0.4 }), -0.1, 0.98, 0.29, tv);
  const scr = add(new THREE.PlaneGeometry(0.66, 0.5, 16, 12), tvMat, -0.1, 0.98, 0.318, tv, false);
  { const p = scr.geometry.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i); p.setZ(i, 0.025 * (1 - (x * x) / 0.11 - (y * y) / 0.065)); } }
  add(new THREE.PlaneGeometry(0.66, 0.5), new THREE.MeshPhysicalMaterial({ color: '#fff', transparent: true, opacity: 0.05, roughness: 0.02, clearcoat: 1 }), -0.1, 0.98, 0.35, tv, false);
  for (const y of [1.18, 1.02, 0.86]) { const k = add(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 18), brass, 0.38, y, 0.3, tv); k.rotation.x = Math.PI / 2; }
  for (const s of [-1, 1]) { const a = add(new THREE.CylinderGeometry(0.006, 0.006, 0.6, 6), brass, s * 0.14, 1.6, -0.05, tv); a.rotation.z = s * -0.45; }
  const tvLight = new THREE.PointLight('#5ad8ff', 1.4, 3.5, 1.5); tvLight.position.set(1.9, 1.0, -1.2); scene.add(tvLight);

  // big news screen that drops in front of the window in NEWS mode
  const wall = new THREE.Group(); wall.position.set(-0.78, 4.2, WZ + 0.35); wall.scale.setScalar(0.62); wall.rotation.y = 0.12; scene.add(wall);
  rbox(2.25, 1.4, 0.12, 0.06, std({ color: '#1d1410', roughness: 0.4, metalness: 0.3 }), 0, 0, 0, wall);
  add(new THREE.PlaneGeometry(2.08, 1.26), tvMat, 0, 0, 0.065, wall, false);
  for (const s of [-1, 1]) add(new THREE.CylinderGeometry(0.01, 0.01, 2.5, 6), brass, s * 0.95, 1.9, -0.02, wall, false);

  // ================= NEWS DESK + CHAIR =================
  const deskG = new THREE.Group(); deskG.position.set(0, -1.4, 0.62); scene.add(deskG);
  const deskWood = std({ map: tex(woodTex(1024, 512, 8, false, 20, 24)), roughness: 0.3, metalness: 0.05 });
  rbox(2.1, 0.08, 0.8, 0.02, deskWood, 0, 0.78, 0, deskG);
  rbox(2.1, 0.74, 0.06, 0.02, deskWood, 0, 0.38, 0.37, deskG);
  for (const s of [-1, 1]) rbox(0.06, 0.74, 0.76, 0.02, deskWood, s * 1.02, 0.38, 0, deskG);
  box(2.06, 0.05, 0.02, brass, 0, 0.64, 0.41, deskG); box(2.06, 0.05, 0.02, brass, 0, 0.12, 0.41, deskG);
  const plateC = cv(1024, 256), pg = plateC.getContext('2d');
  const drawPlate = () => { pg.clearRect(0, 0, 1024, 256); pg.drawImage(neonTex('SPIDEY NEWS 24', '#ffcf5a', '#ff2a6d'), 0, 0); plateTex.needsUpdate = true; };
  const plateTex = tex(plateC); add(new THREE.PlaneGeometry(1.0, 0.25), new THREE.MeshBasicMaterial({ map: plateTex, transparent: true, toneMapped: false }), 0, 0.38, 0.405, deskG, false);
  const chrome = std({ color: '#d7dbe0', metalness: 1, roughness: 0.18 });
  const mic = new THREE.Group(); mic.position.set(0.55, 0.82, 0.05); deskG.add(mic);
  add(new THREE.CylinderGeometry(0.07, 0.09, 0.03, 20), chrome, 0, 0, 0, mic); const st = add(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 10), chrome, -0.04, 0.15, -0.04, mic); st.rotation.z = 0.25;
  const mh = add(new THREE.CapsuleGeometry(0.045, 0.07, 6, 16), chrome, -0.08, 0.32, -0.08, mic); mh.rotation.x = 0.6;
  add(new THREE.CylinderGeometry(0.045, 0.04, 0.11, 20), std({ color: '#efe8dc' }), -0.8, 0.875, 0.1, deskG);
  const bank = new THREE.Group(); bank.position.set(-0.78, 0.82, -0.2); deskG.add(bank);
  add(new THREE.CylinderGeometry(0.08, 0.1, 0.03, 20), brass, 0, 0, 0, bank); add(new THREE.CylinderGeometry(0.01, 0.01, 0.28, 8), brass, 0, 0.14, 0, bank);
  const bshade = add(new THREE.CylinderGeometry(0.06, 0.06, 0.32, 20, 1, true, 0, Math.PI), new THREE.MeshStandardMaterial({ color: '#0f6b44', emissive: '#0a3b26', metalness: 0.3, roughness: 0.3, side: THREE.DoubleSide }), 0, 0.3, 0.02, bank); bshade.rotation.set(0, 0, Math.PI / 2);
  const deskLight = new THREE.PointLight('#a8ffcf', 0.0, 1.6, 2); deskLight.position.set(-0.78, 0.98, 0.45); scene.add(deskLight);

  const chairG = new THREE.Group(); chairG.position.set(0, -1.6, -0.32); scene.add(chairG);
  const leather = new THREE.MeshPhysicalMaterial({ map: tex(chairTex()), roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.35 });
  rbox(0.8, 0.9, 0.18, 0.09, leather, 0, 1.05, -0.14, chairG);
  rbox(0.68, 0.14, 0.58, 0.05, leather, 0, 0.53, 0.12, chairG);
  for (const s of [-1, 1]) { rbox(0.1, 0.1, 0.5, 0.04, leather, s * 0.42, 0.8, 0.12, chairG); add(new THREE.CylinderGeometry(0.015, 0.015, 0.26, 8), chrome, s * 0.42, 0.66, 0.12, chairG); }
  add(new THREE.CylinderGeometry(0.03, 0.03, 0.46, 10), chrome, 0, 0.25, 0.12, chairG);
  for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2, l = add(new THREE.BoxGeometry(0.04, 0.03, 0.34), chrome, Math.sin(a) * 0.15, 0.03, 0.12 + Math.cos(a) * 0.15, chairG); l.rotation.y = a; }

  // ================= NEWSPAPER (held by Spidey) =================
  const paperC = cv(1200, 840), paperTex = tex(paperC);
  const pgeo = new THREE.PlaneGeometry(0.64, 0.45, 24, 1); { const p = pgeo.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i) / 0.32; p.setZ(i, -0.05 * x * x); } pgeo.computeVertexNormals(); }
  const paper = new THREE.Mesh(pgeo, new THREE.MeshStandardMaterial({ map: paperTex, color: '#cdc4ad', roughness: 0.95, side: THREE.DoubleSide })); paper.castShadow = true;

  // ================= LIGHTS =================
  scene.add(new THREE.HemisphereLight('#9ab8ff', '#3a1d10', 0.55));
  const key = new THREE.SpotLight('#ffd7a8', 13, 14, 0.48, 0.65, 1.2); key.position.set(2.2, 4.4, 3.4); key.castShadow = true;
  key.shadow.mapSize.set(isMobile ? 1024 : 2048, isMobile ? 1024 : 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02; key.shadow.camera.near = 1; key.shadow.camera.far = 12;
  key.target.position.set(0, 1.0, 0); scene.add(key, key.target);
  const rim = new THREE.SpotLight('#47c8ff', 22, 12, 0.6, 0.7, 1.2); rim.position.set(-2.4, 3.3, -1.9); rim.target.position.set(0, 1.3, 0); scene.add(rim, rim.target);
  const rim2 = new THREE.SpotLight('#ff4fa3', 14, 12, 0.6, 0.7, 1.2); rim2.position.set(2.6, 2.4, -1.6); rim2.target.position.set(0, 1.1, 0); scene.add(rim2, rim2.target);
  const fill = new THREE.DirectionalLight('#ffe9d6', 0.45); fill.position.set(-3, 2, 4); scene.add(fill);
  const winLight = new THREE.PointLight(tod === 'day' ? '#cfe6ff' : '#b07cff', 1.6, 5, 1.4); winLight.position.set(0, 1.8, -2.0); scene.add(winLight);

  // ================= SPIDEY =================
  const spidey = createSpidey({ hi: !isMobile });
  scene.add(spidey.root);
  spidey.J.chest.add(paper); paper.visible = false;
  const blob = cv(256, 256), bgc = blob.getContext('2d'), rg = bgc.createRadialGradient(128, 128, 10, 128, 128, 128); rg.addColorStop(0, 'rgba(0,0,0,.55)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); bgc.fillStyle = rg; bgc.fillRect(0, 0, 256, 256);
  const contact = add(new THREE.PlaneGeometry(0.9, 0.6), new THREE.MeshBasicMaterial({ map: tex(blob), transparent: true, depthWrite: false }), 0, 0.012, 0.1, scene, false); contact.rotation.x = -Math.PI / 2;

  // web line effect
  const webMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.95, toneMapped: false });
  const webLine = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 1, 6, 1, true), webMat); webLine.visible = false; scene.add(webLine);
  const W = { t: -1, from: new THREE.Vector3(), to: new THREE.Vector3() };
  const shootWeb = () => {
    spidey.J.rWr.getWorldPosition(W.from); const dir = new THREE.Vector3(); camera.getWorldDirection(dir);
    W.to.copy(camera.position).addScaledVector(dir, 0.4).add(new THREE.Vector3((Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.15, 0)); W.t = 0; webLine.visible = true; onWeb?.();
  };

  // ================= POST =================
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.5, 0.5, 1.0); composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(GradeShader); composer.addPass(grade);

  // ================= STATE =================
  const S = { mode: 'talk', news: false, t: 0, px: 0, py: 0, cam: new THREE.Vector3(0, 1.2, 4), tgt: new THREE.Vector3(0, 1, 0), onair: false, breaking: 0, tv: { mode: 'idle', headline: '', source: '', mood: '', country: '', level: 0, levels: new Array(48).fill(0) }, paperItems: [], paperPage: 0, flip: 0 };
  let tvAcc = 0;

  function drawTV() {
    const g = tvC.getContext('2d'), w = 640, h = 480, T = S.tv, t = S.t; g.save();
    const bgc2 = { idle: ['#1a2a6c', '#b21f1f'], listen: ['#0b3d4a', '#11253f'], think: ['#2b1055', '#7597de'], news: ['#0c1530', '#1c2f66'], repeat: ['#3a0b4a', '#0d3b3b'], talk: ['#0b2a3a', '#2b0b3a'], type: ['#2b1d0b', '#3a0b1d'] }[T.mode] || ['#111', '#222'];
    const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, bgc2[0]); gr.addColorStop(1, bgc2[1]); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.textAlign = 'center'; g.textBaseline = 'middle';
    if (T.mode === 'news' && T.headline) {
      g.fillStyle = S.breaking > 0 && Math.sin(t * 8) > 0 ? '#ff1a1a' : '#c4111f'; g.fillRect(0, 0, w, 70);
      g.fillStyle = '#fff'; g.font = '46px Bangers, Impact'; g.fillText(S.breaking > 0 ? '⚡ BREAKING NEWS ⚡' : 'SPIDEY NEWS 24', w / 2, 38);
      g.fillStyle = '#ffcf5a'; g.font = '28px VT323, monospace'; g.textAlign = 'left'; g.fillText(`${T.country || 'WORLD'} · ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`, 20, 96);
      g.textAlign = 'right'; g.fillText(T.mood ? T.mood.toUpperCase() : '', w - 20, 96);
      g.textAlign = 'left'; g.fillStyle = '#fff'; g.font = '700 38px Fredoka, sans-serif';
      const words = T.headline.split(/\s+/); let line = '', y = 150, n = 0;
      for (const wd of words) { const tt = line ? line + ' ' + wd : wd; if (g.measureText(tt).width > w - 40 && line) { g.fillText(line, 20, y); y += 46; line = wd; if (++n > 5) break; } else line = tt; }
      if (n <= 5) g.fillText(line, 20, y);
      g.fillStyle = 'rgba(255,255,255,.75)'; g.font = '26px VT323, monospace'; g.fillText('SOURCE: ' + (T.source || ''), 20, h - 30);
    } else if (T.mode === 'listen' || T.mode === 'repeat') {
      T.levels.push(T.level); T.levels.shift();
      g.fillStyle = '#fff'; g.font = '54px Bangers, Impact'; g.fillText(T.mode === 'repeat' ? 'SAY SOMETHING!' : 'I\'M LISTENING…', w / 2, 80);
      T.levels.forEach((v, i) => { const bh = 10 + v * 260; const x = 20 + i * 12.5; const c = g.createLinearGradient(0, 300 - bh / 2, 0, 300 + bh / 2); c.addColorStop(0, '#29e7ff'); c.addColorStop(1, '#ff2a6d'); g.fillStyle = c; g.fillRect(x, 300 - bh / 2, 8, bh); });
      g.font = '28px VT323, monospace'; g.fillStyle = '#ffcf5a'; g.fillText(T.mode === 'repeat' ? 'TALKING-TOM MODE · I COPY YOU' : 'ASK ME ANYTHING', w / 2, h - 50);
    } else if (T.mode === 'think') {
      g.fillStyle = '#fff'; g.font = '50px Bangers, Impact'; g.fillText('SEARCHING THE WEB…', w / 2, 110);
      for (let i = 0; i < 12; i++) { const a = t * 4 + (i / 12) * Math.PI * 2; g.fillStyle = `rgba(255,255,255,${(i + 1) / 12})`; g.beginPath(); g.arc(w / 2 + Math.cos(a) * 80, 280 + Math.sin(a) * 80, 12, 0, 7); g.fill(); }
      g.save(); g.translate(w / 2, 280); spider(g, 0, 0, 70, '#ff2a6d'); g.restore();
    } else {
      const bars = ['#fff', '#ee0', '#0ee', '#0e0', '#e0e', '#e00', '#00e']; bars.forEach((c, i) => { g.fillStyle = c; g.fillRect(i * (w / 7), 0, w / 7 + 1, 150); });
      g.fillStyle = '#111'; g.fillRect(0, 150, w, h - 150);
      g.save(); g.translate(w / 2, 300); g.rotate(Math.sin(t) * 0.1); g.fillStyle = '#c4111f'; g.beginPath(); g.arc(0, 0, 95, 0, 7); g.fill(); spider(g, 0, 0, 95, '#111'); g.restore();
      g.fillStyle = '#fff'; g.font = '56px Bangers, Impact'; g.fillText(T.mode === 'type' ? 'TYPE TO SPIDEY' : 'SPIDEY 3D', w / 2, 205 - 25);
      g.font = '30px VT323, monospace'; g.fillStyle = '#ffcf5a'; g.fillText(new Date().toLocaleTimeString(), w / 2, h - 40);
    }
    // CRT scanlines + vignette + noise
    g.fillStyle = 'rgba(0,0,0,.22)'; for (let y = 0; y < h; y += 3) g.fillRect(0, y, w, 1);
    const vg = g.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, h * 0.8); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,.6)'); g.fillStyle = vg; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(255,255,255,${Math.random() * 0.12})`; g.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
    g.restore(); tvTex.needsUpdate = true;
    const col = { news: '#6aa8ff', listen: '#29e7ff', repeat: '#d16bff', think: '#9a7bff' }[T.mode] || '#ff7a5a'; tvLight.color.set(col);
  }

  function wrap(g, text, x, y, maxW, lh, maxLines) {
    const words = (text || '').split(/\s+/); let line = '', n = 0;
    for (const wd of words) { const t = line ? line + ' ' + wd : wd; if (g.measureText(t).width > maxW && line) { g.fillText(line, x, y); y += lh; line = wd; if (++n >= maxLines) return y; } else line = t; }
    if (line && n < maxLines) { g.fillText(line, x, y); y += lh; } return y;
  }
  function drawPaper() {
    const g = paperC.getContext('2d'), Wd = 1200, H = 840, items = S.paperItems, pg2 = S.paperPage;
    const gr = g.createLinearGradient(0, 0, Wd, H); gr.addColorStop(0, '#f3e9cc'); gr.addColorStop(1, '#e1d1a5'); g.fillStyle = gr; g.fillRect(0, 0, Wd, H);
    for (let i = 0; i < 2500; i++) { g.fillStyle = `rgba(90,60,20,${Math.random() * 0.06})`; g.fillRect(Math.random() * Wd, Math.random() * H, 2, 2); }
    g.fillStyle = '#16120d'; g.textAlign = 'center'; g.font = '900 96px "Playfair Display", Georgia, serif'; g.fillText('THE DAILY WEB', Wd / 2, 100);
    g.fillRect(30, 120, Wd - 60, 6); g.fillRect(30, 132, Wd - 60, 2);
    g.font = 'italic 700 22px "Playfair Display", Georgia'; g.textAlign = 'left'; g.fillText('SPIDEY NEWS 24 · LIVE EDITION', 34, 162);
    g.textAlign = 'right'; g.fillText(new Date().toDateString().toUpperCase() + ' · PAGE ' + (pg2 + 1), Wd - 34, 162); g.fillRect(30, 176, Wd - 60, 2);
    const a = items[pg2 * 3] || { title: 'Fetching the latest news…', desc: '', source: '' }, b = items[pg2 * 3 + 1], d = items[pg2 * 3 + 2];
    g.textAlign = 'left'; g.fillStyle = '#16120d'; g.font = '900 56px "Playfair Display", Georgia, serif';
    const y = wrap(g, (a.title || '').toUpperCase(), 34, 246, 720, 62, 4);
    g.font = '400 24px Georgia, serif'; g.fillStyle = '#2b251c'; wrap(g, a.desc && a.desc !== a.title ? a.desc : '', 34, y + 14, 720, 30, 4);
    g.font = 'italic 700 20px Georgia'; g.fillText('— ' + (a.source || ''), 34, 600);
    g.save(); g.beginPath(); g.rect(790, 200, 376, 330); g.clip(); g.fillStyle = '#d9cba3'; g.fillRect(790, 200, 376, 330); g.fillStyle = '#2a2a2a';
    for (let j = 0; j < 330; j += 8) for (let i = 0; i < 376; i += 8) { const v = (Math.sin((i + pg2 * 40) * 0.05) + Math.cos((j + pg2 * 70) * 0.06) + 2) / 4; g.beginPath(); g.arc(790 + i + ((j / 8) % 2) * 4, 200 + j, 0.7 + v * 3, 0, 7); g.fill(); }
    g.restore(); g.strokeStyle = '#222'; g.lineWidth = 3; g.strokeRect(790, 200, 376, 330);
    g.fillRect(30, 630, Wd - 60, 4);
    [[b, 34], [d, 624]].forEach(([it, x]) => { if (!it) return; g.fillStyle = '#16120d'; g.font = '900 32px "Playfair Display", Georgia'; const yy = wrap(g, it.title, x, 680, 540, 36, 3); g.font = '18px Georgia'; g.fillStyle = '#2b251c'; g.fillText('— ' + it.source, x, Math.min(yy + 6, 820)); });
    paperTex.needsUpdate = true;
  }

  // ================= CAMERA FRAMING =================
  let vw = 1, vh = 1;
  function framing() {
    const tn = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), effA = Math.max(0.3, (vw - (vw < 700 ? 130 : 220)) / vh);
    const [cy, H, Wd, z0] = S.news ? [1.22, 1.22, 1.7, 0.0] : [1.0, 2.34, 1.25, 0.1];
    const d = Math.max((H / 2) / tn, (Wd / 2) / (tn * effA));
    return { pos: new THREE.Vector3(S.px * 0.25, cy + 0.12 + S.py * -0.08, z0 + d), tgt: new THREE.Vector3(0, cy, z0) };
  }

  // ================= POKES =================
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const onDown = (e) => {
    const r = canvas.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera); const hit = ray.intersectObjects(spidey.parts, false)[0];
    if (hit) onPoke?.(hit.object.userData.part, hit);
  };
  canvas.addEventListener('pointerdown', onDown);

  // ================= LOOP =================
  let raf, last = performance.now();
  function loop(now) {
    raf = requestAnimationFrame(loop);
    const dt = Math.min(0.05, (now - last) / 1000); last = now; frame(dt, true);
  }
  function frame(dt, render) {
    S.t += dt; const t = S.t;
    spidey.update(dt);
    spidey.root.position.z = damp(spidey.root.position.z, S.news ? -0.05 : 0.1, 4, dt);
    deskG.position.y = damp(deskG.position.y, S.news ? 0 : -1.4, 3.5, dt);
    chairG.position.y = damp(chairG.position.y, S.news ? 0 : -1.6, 3.5, dt);
    wall.position.y = damp(wall.position.y, S.news ? 1.78 : 4.6, 3, dt);
    deskLight.intensity = damp(deskLight.intensity, S.news ? 0.5 : 0, 3, dt);
    contact.visible = !S.news; contact.position.z = spidey.root.position.z;
    // newspaper: up (reading) / down on the desk (presenting)
    const rk = spidey.state.readK; paper.visible = S.news && spidey.state.sitK > 0.6;
    paper.position.set(0, -0.1 - (1 - rk) * 0.3, 0.44 + (1 - rk) * 0.12); paper.rotation.set(-0.3 - (1 - rk) * 1.15, 0, 0);
    if (S.flip > 0) { S.flip -= dt * 2.5; paper.scale.x = Math.max(0.05, Math.abs(Math.cos((1 - Math.max(0, S.flip)) * Math.PI))); if (S.flip < 0.5 && S.pendingPaper) { S.pendingPaper = false; drawPaper(); } } else paper.scale.x = 1;
    // web line
    if (W.t >= 0) {
      W.t += dt; const k = Math.min(1, W.t / 0.12); spidey.J.rWr.getWorldPosition(W.from);
      const end = W.from.clone().lerp(W.to, k), mid = W.from.clone().add(end).multiplyScalar(0.5), len = W.from.distanceTo(end);
      webLine.position.copy(mid); webLine.scale.set(1, Math.max(0.001, len), 1); webLine.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.clone().sub(W.from).normalize());
      webMat.opacity = W.t < 0.5 ? 0.95 : Math.max(0, 0.95 - (W.t - 0.5) * 2); if (W.t > 1) { W.t = -1; webLine.visible = false; }
    }
    // lights & signs
    onAirMat.opacity = S.onair ? 0.75 + 0.25 * Math.abs(Math.sin(t * 3)) : 0.22;
    neonMat.opacity = 0.92 + (Math.random() > 0.985 ? -0.5 : 0) + Math.sin(t * 9) * 0.03;
    tvLight.intensity = 1.1 + Math.sin(t * 13) * 0.15 + Math.random() * 0.1;
    S.breaking = Math.max(0, S.breaking - dt); grade.uniforms.flash.value = S.breaking > 0 ? 0.5 + 0.5 * Math.sin(t * 10) : 0;
    tvAcc += dt; if (tvAcc > 0.08) { tvAcc = 0; drawTV(); }
    // camera
    const f = S.dbg || framing(); S.cam.lerp(f.pos, 1 - Math.exp(-dt * 3)); S.tgt.lerp(f.tgt, 1 - Math.exp(-dt * 3));
    camera.position.copy(S.cam); camera.lookAt(S.tgt);
    grade.uniforms.time.value = t;
    if (render) composer.render(dt);
  }

  const api = {
    spidey, camera,
    setMode(m) { S.mode = m; S.news = m === 'news'; spidey.setSit(S.news); spidey.setRead(S.news); if (!S.news) S.onair = false; },
    setOnAir(b) { S.onair = b; }, setRead(b) { spidey.setRead(b); },
    tv(patch) { Object.assign(S.tv, patch); },
    level(v) { S.tv.level = v; },
    breaking(sec = 4) { S.breaking = sec; },
    setPaper(items, page = 0) { S.paperItems = items; S.paperPage = page; drawPaper(); },
    flipPage(page) { S.paperPage = page; S.flip = 1; S.pendingPaper = true; },
    web: shootWeb,
    pointer(x, y) { S.px = x; S.py = y; spidey.look(x * 0.9, -y * 0.5); },
    resize() {
      vw = canvas.clientWidth || window.innerWidth; vh = canvas.clientHeight || window.innerHeight;
      renderer.setSize(vw, vh, false); composer.setSize(vw, vh); camera.aspect = vw / vh; camera.updateProjectionMatrix();
      grade.uniforms.res.value.set(vw, vh); bloom.resolution.set(vw / 2, vh / 2);
    },
    redrawText() { drawPlate(); drawPaper(); neonMat.map.dispose(); neonMat.map = tex(neonTex('SPIDEY NEWS 24', '#ff2a6d', '#29e7ff')); neonMat.needsUpdate = true; onAirMat.map = tex(neonTex('ON AIR', '#ff2020', '#ff2020', 512, 192)); onAirMat.needsUpdate = true; poster.material.map = tex(posterTex()); poster.material.needsUpdate = true; },
    step(sec) { for (let i = 0; i < sec / 0.05; i++) frame(0.05, false); frame(0.016, true); },
    step(sec) { for (let i = 0; i < sec / 0.05; i++) frame(0.05, false); frame(0.016, true); },
    renderIcon(size = 1024) {
      const vis = scene.children.map((o) => [o, o.visible]);
      scene.children.forEach((o) => { if (o !== spidey.root && !o.isLight) o.visible = false; });
      const bg = scene.background; scene.background = null; renderer.setClearColor(0x000000, 0);
      const ic = new THREE.PerspectiveCamera(24, 1, 0.05, 20), hp = new THREE.Vector3(); spidey.J.head.getWorldPosition(hp);
      ic.position.set(hp.x + 0.2, hp.y + 0.2, hp.z + 1.5); ic.lookAt(hp.x, hp.y + 0.06, hp.z);
      const pr = renderer.getPixelRatio(); renderer.setPixelRatio(1); renderer.setSize(size, size, false);
      renderer.render(scene, ic); const url = canvas.toDataURL('image/png');
      renderer.setPixelRatio(pr); scene.background = bg; vis.forEach(([o, v]) => (o.visible = v)); api.resize();
      return url;
    },
    debugCam(p, t) { S.dbg = p ? { pos: new THREE.Vector3(...p), tgt: new THREE.Vector3(...t) } : null; if (p) { S.cam.copy(S.dbg.pos); S.tgt.copy(S.dbg.tgt); } },
    snapshot() { composer.render(0); return canvas.toDataURL('image/png'); },
    dispose() { cancelAnimationFrame(raf); canvas.removeEventListener('pointerdown', onDown); renderer.dispose(); },
  };
  api.resize(); drawPlate(); drawPaper();
  const f0 = framing(); S.cam.copy(f0.pos); S.tgt.copy(f0.tgt);
  raf = requestAnimationFrame(loop);
  if (document.fonts?.ready) document.fonts.ready.then(() => api.redrawText());
  return api;
}
