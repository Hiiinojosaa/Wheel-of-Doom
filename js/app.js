/* =====================================================
   SPRITES PIXEL ART
   ===================================================== */
const HEADS = {
  pompadour: ["....HHHHHHHH....", "..HHHHHHHHHHH...", "..HHHHHHHHHHHH..", "..HHHHHSSSSSHH..", "..HHHSSSSSSSSH..", "..HHSSSSSSESSS..", "..HSSSSSSSESSS..", "..HSSSSSSSSSSS..", "...SSSSSSSKKKS..", "....SSSSSSSSS..."],
  short: ["................", "....HHHHHHH.....", "...HHHHHHHHHH...", "..HHHHHHHHHHH...", "..HHHSSSSSSSS...", "..HHSSSSSSESS...", "..HSSSSSSSESS...", "..HSSSSSSSSSS...", "...SSSSSSSKKS...", "....SSSSSSSS...."],
  long: ["................", "....HHHHHHHH....", "...HHHHHHHHHH...", "..HHHHHHHHHHHH..", "..HHHHSSSSSSHH..", "..HHHSSSSSESSH..", "..HHHSSSSSESS...", "..HHHSSSSSSSS...", "..HHHSSSSSKKS...", "..HHH.SSSSSS...."],
  afro: ["...HHHHHHHHH....", "..HHHHHHHHHHHH..", ".HHHHHHHHHHHHHH.", ".HHHHHHHHHHHHHH.", ".HHHHSSSSSSSHHH.", ".HHHSSSSSSESSH..", "..HHSSSSSSESS...", "...SSSSSSSSSS...", "...SSSSSSSKKS...", "....SSSSSSSS...."],
  cap: ["................", "....CCCCCCC.....", "...CCCCCCCCCC...", "..CCCCCCCCCCCCCC", "..HHHSSSSSSSS...", "..HHSSSSSSESS...", "..HSSSSSSSESS...", "..HSSSSSSSSSS...", "...SSSSSSSKKS...", "....SSSSSSSS...."],
  bun: ["...HHH..........", "..HHHHHHHHHH....", "..HHHHHHHHHHH...", "..HHHHHHHHHHH...", "..HHHSSSSSSSS...", "..HHSSSSSSESS...", "..HSSSSSSSESS...", "..HSSSSSSSSSS...", "...SSSSSSSKKS...", "....SSSSSSSS...."],
  bald: ["................", "................", "....SSSSSSS.....", "...SSSSSSSSSS...", "..SSSSSSSSSSS...", "..SSSSSSSSESS...", "..SSSSSSSSESS...", "..SSSSSSSSSSS...", "...SSSSSSSKKS...", "....SSSSSSSS...."]
};
const TORSO_SUIT = ["....JJWTWJJ.....", "...DJJWTWJJD....", "..DDJJWTWJJDD...", "..DDJJWWWJJDD...", "..SDJJJJJJJDS...", "...JJJJJJJJJ...."];
const TORSO_TEE = ["....JJJJJJJ.....", "...DJJJJJJJD....", "..DDJJAAAJJDD...", "..DDJJAAAJJDD...", "..SDJJJJJJJDS...", "...JJJJJJJJJ...."];
const LEGS_STAND = ["...PPPPPPPPP....", "...PPPPPPPPP....", "...PPPP.PPPP....", "...PPPP.PPPP....", "...BBBBB.BBBBB..", "...BBBBB.BBBBB.."];
const LEGS_STEP = ["...PPPPPPPPP....", "..PPPP...PPPP...", "..PPP.....PPP...", ".PPP.......PPP..", ".BBBB......BBBB.", "BBBB.......BBBB."];

const BOUNCER = { hair: "pompadour", hairColor: "#121016", skin: "#f7b8a6", top: "#3a3a40", pants: "#8a8a90", suit: true };

const SKINS = [
  { label: "Disco Kid", hair: "short", hairColor: "#2b1a10", skin: "#f3c4a8", top: "#ff4fb8", accent: "#ffffff", pants: "#2d3a6b" },
  { label: "Melena Neón", hair: "long", hairColor: "#f2c94c", skin: "#f8d0b8", top: "#39e6ff", accent: "#0b3d66", pants: "#33333d" },
  { label: "Afro Funk", hair: "afro", hairColor: "#1b1b1b", skin: "#8a5a3c", top: "#ffd23f", accent: "#e83f6f", pants: "#4b2e83" },
  { label: "Gorra Roja", hair: "cap", hairColor: "#3a2414", cap: "#e8413f", skin: "#d9a07b", top: "#2ecc71", accent: "#ffffff", pants: "#2b2b3d" },
  { label: "Moño Morado", hair: "bun", hairColor: "#7a3b1d", skin: "#f1c2a2", top: "#9b59ff", accent: "#ffd23f", pants: "#1f2a44" },
  { label: "Tupé Rojo", hair: "pompadour", hairColor: "#c0392b", skin: "#f6c6ad", top: "#26222e", accent: "#ff4fb8", pants: "#55555f" },
  { label: "Calvo Naranja", hair: "bald", hairColor: "#000000", skin: "#b07a55", top: "#ff8a3d", accent: "#222222", pants: "#2c3e50" },
  { label: "Melena Gótica", hair: "long", hairColor: "#3b1f4d", skin: "#e7b192", top: "#e83f6f", accent: "#39e6ff", pants: "#222228" },
  { label: "Canas Azules", hair: "short", hairColor: "#d8d8d8", skin: "#f2c9b0", top: "#3d7dff", accent: "#ffffff", pants: "#6b4f2a" },
  { label: "Afro Rosa", hair: "afro", hairColor: "#ff4fb8", skin: "#6e452e", top: "#17141c", accent: "#39e6ff", pants: "#3a3a44" },
  { label: "Gorra Cian", hair: "cap", hairColor: "#111111", cap: "#39e6ff", skin: "#f4c7a1", top: "#f2f2f2", accent: "#e83f6f", pants: "#2d2d5a" },
  { label: "Moño Verde", hair: "bun", hairColor: "#111111", skin: "#c68863", top: "#3dff9a", accent: "#111111", pants: "#4a2b5f" }
];

function shade(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  const f = c => Math.max(0, Math.min(255, Math.round(c * (1 + amount))));
  return "rgb(" + f(n >> 16) + "," + f((n >> 8) & 255) + "," + f(n & 255) + ")";
}

function spriteRows(skin, legs) {
  const rows = [...HEADS[skin.hair], ...(skin.suit ? TORSO_SUIT : TORSO_TEE), ...legs].map(r => r.padEnd(16, ".").slice(0, 16).split(""));
  if (skin.hair === "long") [10, 11, 12].forEach(r => { rows[r][2] = "H"; rows[r][3] = "H"; });
  return rows;
}

const spriteCache = new Map();

// Hoja de 2 fotogramas (quieto + paso) como data URL
function spriteSheet(skin) {
  if (spriteCache.has(skin)) return spriteCache.get(skin);
  const colors = {
    H: skin.hairColor, S: skin.skin, E: "#14101c", K: "#14101c", J: skin.top, D: shade(skin.top, -0.3),
    A: skin.accent || "#ffffff", W: "#f5f1ea", T: "#14101c", P: skin.pants, B: "#141018", C: skin.cap || skin.hairColor
  };
  const canvas = document.createElement("canvas");
  canvas.width = 36;
  canvas.height = 24;
  const ctx = canvas.getContext("2d");
  [LEGS_STAND, LEGS_STEP].forEach((legs, frame) => {
    const rows = spriteRows(skin, legs);
    const filled = (x, y) => y >= 0 && y < rows.length && x >= 0 && x < 16 && rows[y][x] !== ".";
    const ox = frame * 18 + 1;
    ctx.fillStyle = "#0e0a14"; // contorno negro automático
    for (let y = -1; y <= rows.length; y++) {
      for (let x = -1; x <= 16; x++) {
        if (!filled(x, y) && (filled(x - 1, y) || filled(x + 1, y) || filled(x, y - 1) || filled(x, y + 1))) ctx.fillRect(ox + x, y + 1, 1, 1);
      }
    }
    rows.forEach((row, y) => row.forEach((ch, x) => {
      if (ch === ".") return;
      ctx.fillStyle = colors[ch];
      ctx.fillRect(ox + x, y + 1, 1, 1);
    }));
  });
  const url = "url(" + canvas.toDataURL() + ")";
  spriteCache.set(skin, url);
  return url;
}

function pixelImage(w, h, draw) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext("2d"));
  return "url(" + canvas.toDataURL() + ")";
}

function carImage(color) {
  return pixelImage(26, 11, ctx => {
    const r = (x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(x, y, w, h); };
    r(5, 0, 13, 1, "#0e0a14"); r(4, 1, 15, 3, shade(color, -0.35));
    r(6, 1, 5, 2, "#9ef0ff"); r(12, 1, 5, 2, "#9ef0ff");
    r(0, 4, 26, 4, color); r(0, 7, 26, 1, shade(color, -0.4));
    r(25, 5, 1, 1, "#fff3a0"); r(0, 5, 1, 1, "#ff3b4f");
    r(3, 7, 5, 4, "#0e0a14"); r(18, 7, 5, 4, "#0e0a14"); r(5, 8, 1, 1, "#888888"); r(20, 8, 1, 1, "#888888");
  });
}

function cloudImage() {
  return pixelImage(48, 14, ctx => {
    [[10, 9, 6], [20, 6, 7], [31, 8, 6], [40, 10, 4]].forEach(([cx, cy, rad]) => {
      for (let y = -rad; y <= rad; y++) for (let x = -rad; x <= rad; x++) {
        if (x * x + y * y > rad * rad || cy + y > 13) continue;
        ctx.fillStyle = y < -rad + 2 ? "#3a2c5e" : "#241a3d";
        ctx.fillRect(cx + x, cy + y, 1, 1);
      }
    });
  });
}

function rainImage() {
  const rnd = mulberry32(7);
  return pixelImage(48, 48, ctx => {
    for (let i = 0; i < 14; i++) {
      const x = Math.floor(rnd() * 48), y = Math.floor(rnd() * 48);
      ctx.fillStyle = "rgba(190, 210, 255, .55)";
      ctx.fillRect(x, y, 1, 3);
      ctx.fillStyle = "rgba(190, 210, 255, .25)";
      ctx.fillRect(x, (y + 3) % 48, 1, 1);
    }
  });
}

/* =====================================================
   SONIDOS (Web Audio API)
   ===================================================== */
const sound = (() => {
  let ctx = null;
  let muted = false;

  function getCtx() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      ctx = new AudioCtx();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function tone({ freq = 440, to = null, dur = 0.12, type = "sine", vol = 0.15, delay = 0 }) {
    const c = getCtx();
    if (!c || muted) return;
    const t = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (to) osc.frequency.exponentialRampToValueAtTime(to, t + dur);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  function noise({ dur = 0.1, vol = 0.2, from = 2000, to = null, delay = 0 }) {
    const c = getCtx();
    if (!c || muted) return;
    const t = c.currentTime + delay;
    const buffer = c.createBuffer(1, Math.floor(c.sampleRate * dur), c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    const filter = c.createBiquadFilter();
    const gain = c.createGain();
    src.buffer = buffer;
    filter.type = "bandpass";
    filter.Q.value = 4;
    filter.frequency.setValueAtTime(from, t);
    if (to) filter.frequency.exponentialRampToValueAtTime(to, t + dur);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(c.destination);
    src.start(t);
  }

  return {
    kick(loud) { tone({ freq: 120, to: 42, dur: 0.22, vol: loud ? 0.5 : 0.22 }); if (loud) noise({ dur: 0.05, vol: 0.08, from: 7000 }); },
    start() { [392, 523, 659, 784].forEach((f, i) => tone({ freq: f, dur: 0.16, type: "square", vol: 0.06, delay: i * 0.08 })); },
    open() { tone({ freq: 180, to: 520, dur: 0.25, type: "triangle", vol: 0.08 }); },
    talk() { for (let i = 0; i < 3; i++) tone({ freq: 140 + Math.random() * 80, dur: 0.07, type: "square", vol: 0.05, delay: i * 0.08 }); },
    hmm() { tone({ freq: 160, to: 120, dur: 0.5, type: "triangle", vol: 0.08 }); },
    pass() { tone({ freq: 880, dur: 0.08, type: "triangle", vol: 0.12 }); tone({ freq: 1320, dur: 0.16, type: "triangle", vol: 0.12, delay: 0.07 }); },
    stop() { tone({ freq: 1800, dur: 0.08, type: "square", vol: 0.05 }); tone({ freq: 1800, dur: 0.25, type: "square", vol: 0.05, delay: 0.12 }); }, // silbato
    reject() {
      noise({ dur: 0.35, vol: 0.4, from: 3000, to: 200 }); // rayada de disco
      tone({ freq: 400, to: 70, dur: 0.35, type: "sawtooth", vol: 0.08 });
      tone({ freq: 110, dur: 0.5, type: "square", vol: 0.1, delay: 0.35 });
      tone({ freq: 104, dur: 0.5, type: "square", vol: 0.1, delay: 0.35 });
    },
    swap(up) { tone({ freq: up ? 660 : 520, to: up ? 880 : 390, dur: 0.08, type: "square", vol: 0.04 }); },
    key() { tone({ freq: 1200 + Math.random() * 400, dur: 0.02, type: "square", vol: 0.02 }); },
    dice() { for (let i = 0; i < 5; i++) tone({ freq: 500 + Math.random() * 700, dur: 0.04, type: "square", vol: 0.04, delay: i * 0.05 }); },
    stamp() { [523, 784, 1047].forEach((f, i) => tone({ freq: f, dur: i === 2 ? 0.2 : 0.1, type: "square", vol: 0.07, delay: i * 0.09 })); },
    error() { tone({ freq: 160, dur: 0.2, type: "square", vol: 0.07 }); },
    gameOver() {
      [523, 494, 466, 440].forEach((f, i) => tone({ freq: f, dur: 0.35, type: "square", vol: 0.06, delay: i * 0.3 }));
      tone({ freq: 220, to: 55, dur: 1.2, type: "sawtooth", vol: 0.08, delay: 1.2 });
    },
    toggleMute() { muted = !muted; return muted; }
  };
})();

/* =====================================================
   ESTADO + localStorage (bonus)
   ===================================================== */
const STORAGE_KEY = "doomClub";
const SAMPLE_PEOPLE = [
  { name: "Laura", skin: 1 }, { name: "Carlos", skin: 0 }, { name: "Ana", skin: 4 },
  { name: "Pedro", skin: 3 }, { name: "Marta", skin: 7 }, { name: "Iván", skin: 2 }
];

const state = {
  screen: "intro",
  purpose: "pagar la ronda",
  people: [...SAMPLE_PEOPLE],
  alive: SAMPLE_PEOPLE.map(p => p.name),
  out: [],
  selectedSkin: null,
  running: false,
  gameOver: false
};

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ purpose: state.purpose, people: state.people, alive: state.alive, out: state.out }));
  } catch (e) { /* sin localStorage */ }
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.people)) {
      state.purpose = saved.purpose ?? state.purpose;
      state.people = saved.people;
      state.alive = saved.alive || saved.people.map(p => p.name);
      state.out = saved.out || [];
    }
  } catch (e) { /* datos rotos: usamos los de ejemplo */ }
}

const getPerson = name => state.people.find(p => p.name === name);
const skinOf = name => SKINS[getPerson(name)?.skin ?? 0];
const usedSkins = () => state.people.map(p => p.skin);

/* =====================================================
   DOM Y UTILIDADES
   ===================================================== */
const $ = id => document.getElementById(id);
const screens = { intro: $("introScreen"), purpose: $("purposeScreen"), people: $("peopleScreen"), club: $("clubScreen") };
const scene = $("scene");
const canvas = $("sceneCanvas");
const fxLayer = $("sceneFx");
const actorsLayer = $("sceneActors");
const ticker = $("ticker");
const roundBtn = $("roundBtn");
const nameInput = $("nameInput");
const purposeInput = $("purposeInput");
const stageSprite = $("stageSprite");

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let speedFactor = 1; // botón ⏩ para ir el doble de rápido
const speed = ms => (reducedMotion() ? 10 : ms / speedFactor);
const randomOf = list => list[Math.floor(Math.random() * list.length)];
const between = (min, max) => min + Math.random() * (max - min);

function addDiv(parent, className, text) {
  const el = document.createElement("div");
  el.className = className;
  if (text) el.textContent = text;
  parent.appendChild(el);
  return el;
}

function logoHtml() {
  return '<span class="logo__doom">DOOM</span><span class="logo__club">Club</span>';
}

function openModal(id) {
  $(id).hidden = false;
  $(id).querySelector(".btn")?.focus();
}
function closeModal(id) { $(id).hidden = true; }

/* =====================================================
   FASE 1: PRESENTACIÓN Y REGLAS
   ===================================================== */
function buildParade() {
  const parade = $("parade");
  parade.innerHTML = "";
  const count = window.innerWidth < 600 ? 6 : SKINS.length; // en móvil caben menos
  SKINS.slice(0, count).forEach((skin, i) => {
    const walker = addDiv(parade, "parade__walker sprite");
    walker.style.backgroundImage = spriteSheet(skin);
    walker.style.animationDelay = (-i * 22 / count) + "s, 0s";
  });
  addDiv(parade, "parade__bouncer sprite").style.backgroundImage = spriteSheet(BOUNCER);
}

/* =====================================================
   FASE 3: LA ESCENA
   ===================================================== */
let L = null;
const actors = new Map();
let bouncerEl = null, door = null, doorSpill = null, bubbleEl = null, moreEl = null;

function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function computeLayout() {
  const sw = scene.clientWidth, sh = scene.clientHeight;
  // tamaño de píxel según el alto, sin que la calle quede demasiado estrecha
  const ps = Math.max(2, Math.min(6, Math.round(sh / 165), Math.floor(sw / 110)));
  const W = Math.ceil(sw / ps);
  const H = Math.ceil(sh / ps);
  const hudH = scene.querySelector(".hud--bottom").offsetHeight;
  const gy = H - 6 - Math.ceil(hudH / ps); // deja sitio abajo para el botón y el texto
  const clubW = Math.max(72, Math.min(130, Math.round(W * 0.42)));
  const clubX = W - clubW;
  const doorW = 20, doorH = 27;
  const doorX = clubX + Math.round((clubW - doorW) * 0.42);
  const canopyY = gy - doorH - 9;
  const signY = canopyY - 15;
  return {
    ps, W, H, gy, clubW, clubX, doorW, doorH, doorX, canopyY, signY,
    clubTop: Math.max(Math.ceil(80 / ps), Math.min(signY - 40, Math.round(gy * 0.3))),
    bouncerX: doorX + doorW + 2, checkX: doorX - 20, spacing: 19, feet: gy + 4
  };
}

const slotX = i => L.checkX - (i + 1) * L.spacing;
const px = v => v * L.ps + "px";

function place(el, x, y, w, h) {
  el.style.left = px(x);
  el.style.top = px(y);
  if (w !== undefined) el.style.width = px(w);
  if (h !== undefined) el.style.height = px(h);
  return el;
}

function drawCity() {
  const { W, H, gy, clubX, clubW, clubTop, doorX, doorW, doorH, canopyY, signY, checkX, bouncerX } = L;
  canvas.width = W;
  canvas.height = H;
  canvas.style.width = px(W);
  canvas.style.height = px(H);
  const ctx = canvas.getContext("2d");
  const rnd = mulberry32(42);
  const rect = (x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(x, y, w, h); };
  const signs = [];
  const extra = Math.max(0, gy - 110); // en pantallas altas, edificios más altos

  // cielo, estrellas y luna
  const sky = ["#0b0719", "#100a26", "#170d32", "#1f113e", "#29154a", "#351a56"];
  sky.forEach((c, i) => rect(0, Math.floor(gy * i / sky.length), W, Math.ceil(gy / sky.length) + 1, c));
  for (let i = 0; i < W / 3; i++) rect(Math.floor(rnd() * W), Math.floor(rnd() * gy * 0.6), 1, 1, rnd() > 0.5 ? "#cfc3ff" : "#6f5fa0");
  const mx = Math.floor(W * 0.16), my = Math.ceil(90 / L.ps) + 6;
  for (let y = -7; y <= 7; y++) for (let x = -7; x <= 7; x++) {
    const d = x * x + y * y;
    if (d <= 49) rect(mx + x, my + y, 1, 1, (x - 3) * (x - 3) + (y + 1) * (y + 1) <= 20 ? "#d8cfa8" : "#f3e9c6");
    else if (d <= 81 && (x + y) % 2 === 0) rect(mx + x, my + y, 1, 1, "rgba(243,233,198,.15)");
  }

  // edificios lejanos (dos capas)
  [["#140c28", 0.5, 30], ["#1a1030", 0.75, 24]].forEach(([color, density, base]) => {
    for (let x = -2; x < W;) {
      const w = 8 + Math.floor(rnd() * 14), h = base + Math.floor(rnd() * 40) + Math.floor(rnd() * extra * 0.8);
      rect(x, gy - h, w, h, color);
      if (rnd() > 0.7) rect(x + Math.floor(w / 2), gy - h - 4, 1, 4, color); // antena
      for (let wy = gy - h + 3; wy < gy - 4; wy += 5) for (let wx = x + 2; wx < x + w - 2; wx += 4) if (rnd() > density + 0.1) rect(wx, wy, 1, 2, "#6b4f8a");
      x += w;
    }
  });

  // edificios de la calle
  const walls = ["#3a3350", "#433a5e", "#2f2a45", "#4a3f63"];
  const awnings = ["#b0183a", "#1f6fb5", "#7b2cbf", "#c77d12"];
  const texts = ["ホテル", "ラーメン", "カラオケ", "コーヒー", "24時間", "居酒屋", "寿司"];
  const tones = ["pink", "cyan", "yellow", "red"];
  let si = 0;
  for (let x = -4; x < clubX - 2;) {
    const w = Math.min(26 + Math.floor(rnd() * 16), clubX - 2 - x);
    if (w < 10) break;
    const h = Math.min(40 + Math.floor(rnd() * 34) + Math.floor(rnd() * extra * 0.6), gy - 6);
    const top = gy - h;
    rect(x, top, w, h, walls[Math.floor(rnd() * walls.length)]);
    rect(x, top, w, 1, "#6b6290");
    rect(x + 2, top - 2, 4, 2, "#2a2440"); // aire acondicionado
    for (let i = 0; i < w * h * 0.05; i++) rect(x + Math.floor(rnd() * w), top + Math.floor(rnd() * h), 2, 1, "rgba(0,0,0,.18)");
    for (let wy = top + 4; wy < gy - 16; wy += 7) {
      for (let wx = x + 3; wx < x + w - 9; wx += 6) {
        rect(wx, wy, 3, 4, rnd() > 0.45 ? ["#ffd37a", "#ff9ed8", "#9ef0ff"][Math.floor(rnd() * 3)] : "#1b1628");
      }
    }
    rect(x + 2, gy - 12, w - 4, 2, awnings[Math.floor(rnd() * awnings.length)]);
    rect(x + 3, gy - 9, w - 6, 8, "rgba(255,207,110,.35)");
    rect(x + 3, gy - 2, w - 6, 2, "#1b1628");
    if (h > 34) {
      signs.push({ x: x + w - 7, y: top + 5, text: texts[si % texts.length], tone: tones[si % tones.length], vertical: true, flicker: si % 3 === 1 });
      si++;
    }
    x += w + 1;
  }

  // farolas
  for (let lx = 22; lx < clubX - 14; lx += 64) {
    ctx.fillStyle = "rgba(255,230,150,.08)";
    ctx.beginPath(); ctx.moveTo(lx + 4, gy - 42); ctx.lineTo(lx - 8, gy + 7); ctx.lineTo(lx + 16, gy + 7); ctx.fill();
    rect(lx, gy - 44, 1, 44, "#22202c");
    rect(lx, gy - 44, 5, 1, "#22202c");
    rect(lx + 3, gy - 43, 3, 1, "#fff2b0");
  }

  // ===== DOOM CLUB =====
  rect(clubX, clubTop, clubW + 2, gy - clubTop, "#22122d");
  for (let y = clubTop + 2; y < gy; y += 3) {
    rect(clubX, y, clubW + 2, 1, "#1a0d24");
    for (let x = clubX + ((y / 3) % 2 ? 0 : 3); x < W; x += 6) rect(x, y - 2, 1, 2, "#1a0d24");
  }
  rect(clubX + 1, clubTop - 3, clubW, 3, "#140a1c");
  rect(clubX + 1, clubTop - 4, clubW, 1, "#3a2450");
  // fondo del cartel y marquesina con postes
  rect(doorX - 14, signY - 1, doorW + 28, 14, "#120818");
  rect(doorX - 11, canopyY, doorW + 22, 5, "#3a0f22");
  rect(doorX - 11, canopyY, doorW + 22, 1, "#6a1d3d");
  rect(doorX - 11, canopyY + 5, doorW + 22, 1, "#d4a640");
  rect(doorX - 11, canopyY + 6, 1, gy - canopyY - 6, "#b88a2e");
  rect(doorX + doorW + 10, canopyY + 6, 1, gy - canopyY - 6, "#b88a2e");
  // puerta: marco y escalón
  rect(doorX - 2, gy - doorH - 2, doorW + 4, doorH + 2, "#d4a640");
  rect(doorX - 1, gy - doorH - 1, doorW + 2, doorH + 1, "#8a6420");
  rect(doorX - 3, gy, doorW + 6, 1, "#8a83a8");
  // pósters
  const posterX = bouncerX + 20;
  if (posterX + 10 < W) {
    rect(posterX, gy - 26, 10, 14, "#ffd23f"); rect(posterX + 1, gy - 25, 8, 6, "#9b59ff"); rect(posterX + 2, gy - 17, 6, 1, "#120818"); rect(posterX + 2, gy - 15, 4, 1, "#120818");
    if (posterX + 24 < W) { rect(posterX + 13, gy - 24, 10, 13, "#39e6ff"); rect(posterX + 14, gy - 23, 8, 5, "#ff4fb8"); rect(posterX + 15, gy - 16, 6, 1, "#120818"); }
  }

  // acera y carretera mojada
  rect(0, gy, W, 8, "#3f3a55");
  rect(0, gy, W, 1, "#5a5475");
  for (let x = 0; x < W; x += 8) rect(x, gy + 1, 1, 7, "#353049");
  rect(0, gy + 8, W, 1, "#7a7395");
  rect(0, gy + 9, W, H - gy - 9, "#100e18");
  for (let x = 0; x < W; x += 12) rect(x, gy + 14, 6, 1, "#a88c3a");
  for (let i = 0; i < W / 2; i++) rect(Math.floor(rnd() * W), gy + 10 + Math.floor(rnd() * (H - gy - 10)), 2 + Math.floor(rnd() * 3), 1, rnd() > 0.5 ? "rgba(255,79,184,.25)" : "rgba(57,230,255,.2)");

  // alfombra roja
  const carpetX = checkX - 4;
  rect(carpetX, gy + 1, doorX + doorW + 3 - carpetX, 6, "#9e1030");
  rect(carpetX, gy + 1, doorX + doorW + 3 - carpetX, 1, "#d4a640");
  rect(carpetX, gy + 6, doorX + doorW + 3 - carpetX, 1, "#d4a640");
  for (let x = carpetX + 2; x < doorX + doorW; x += 4) rect(x, gy + 3, 2, 1, "#b8183c");

  // cordón de la cola
  for (let i = 0; slotX(i) + 18 > 0; i++) {
    const postX = slotX(i) + 18;
    rect(postX, gy - 8, 1, 10, "#d4a640");
    rect(postX - 1, gy - 9, 3, 1, "#f2c94c");
    for (let t = 1; t < L.spacing; t++) rect(postX - t, gy - 7 + Math.round(Math.sin(Math.PI * t / L.spacing) * 2), 1, 1, "#b0183a");
  }
  return signs;
}

const TONE_COLORS = { pink: "#ff4fb8", cyan: "#39e6ff", yellow: "#ffd23f", red: "#ff3b4f", green: "#3dff9a" };

function addReflection(x, w, color) {
  const r = place(addDiv(fxLayer, "reflection"), x, L.gy + 10, w, L.H - L.gy - 10);
  r.style.background = "linear-gradient(to bottom, " + color + ", transparent 85%)";
}

function buildFx(signs) {
  const { W, gy, clubX, clubW, clubTop, doorX, doorW, doorH, canopyY, signY, bouncerX } = L;
  fxLayer.innerHTML = "";
  fxLayer.style.setProperty("--to", px(W + 10));

  const cloudUrl = cloudImage();
  [[Math.ceil(90 / L.ps) + 2, 70, 0], [Math.ceil(90 / L.ps) + 16, 95, -40]].forEach(([y, dur, delay]) => {
    const c = place(addDiv(fxLayer, "cloud"), 0, y, 48, 14);
    c.style.left = "0";
    c.style.backgroundImage = cloudUrl;
    c.style.animationDuration = dur + "s";
    c.style.animationDelay = delay + "s";
  });

  [[clubX + 10, ""], [W - 10, " beam--b"]].forEach(([x, extra]) => {
    const height = clubTop + 40;
    place(addDiv(fxLayer, "beam" + extra), x - 12, clubTop - height, 24, height);
  });

  place(addDiv(fxLayer, "club-outline"), clubX, clubTop - 4, clubW + 6, gy - clubTop + 4);

  // ventanas con fiesta dentro
  for (let wy = clubTop + 4; wy + 7 < signY - 4; wy += 10) {
    for (let wx = clubX + 18; wx + 8 < W - 2; wx += 12) {
      const win = place(addDiv(fxLayer, "club-window"), wx, wy, 8, 7);
      if ((wx + wy) % 3 !== 0) addDiv(win, "dancer");
    }
  }

  // letrero vertical DOOM en la esquina
  const bladeH = Math.min(46, canopyY - clubTop - 12);
  if (bladeH > 30) {
    const blade = place(addDiv(fxLayer, "blade"), clubX + 3, clubTop + 4, 12, bladeH);
    blade.style.fontSize = px(5.5);
    blade.innerHTML = "<span>D</span><span>O</span><span>O</span><span>M</span>";
    addReflection(clubX + 3, 12, "rgba(255,79,184,.6)");
  }

  // cartel principal sobre la marquesina
  const clubSign = place(addDiv(fxLayer, "club-sign"), doorX - 13, signY, doorW + 26, 12);
  clubSign.innerHTML = '<p class="logo">' + logoHtml() + "</p>";
  clubSign.querySelector(".logo").style.fontSize = px(4.6);

  // bombillas, apliques y notas
  for (let bx = doorX - 10; bx < doorX + doorW + 11; bx += 3) place(addDiv(fxLayer, "bulb"), bx, canopyY + 4, 1.2, 1.2);
  place(addDiv(fxLayer, "sconce"), doorX - 6, gy - doorH + 6, 2, 3);
  place(addDiv(fxLayer, "sconce"), doorX + doorW + 4, gy - doorH + 6, 2, 3);
  for (let i = 0; i < 4; i++) {
    const note = place(addDiv(fxLayer, "note", i % 2 ? "♫" : "♪"), doorX + 2 + i * 5, canopyY - 2);
    note.style.fontSize = px(4);
    note.style.animationDelay = (i * 0.9) + "s";
  }
  addReflection(doorX - 2, doorW + 4, "rgba(255,79,184,.55)");
  addReflection(doorX - 11, doorW + 22, "rgba(255,230,150,.25)");

  // cartel ABIERTO
  if (bouncerX + 40 < W) signs.push({ x: bouncerX + 20, y: gy - 38, text: "ABIERTO", tone: "green", flicker: true });

  signs.forEach(s => {
    const el = addDiv(fxLayer, "sign sign--" + s.tone + (s.vertical ? " sign--v" : "") + (s.flicker ? " sign--flicker" : ""), s.text);
    place(el, s.x, s.y);
    el.style.fontSize = px(3.6);
    addReflection(s.x, s.vertical ? 5 : 22, TONE_COLORS[s.tone] + "99");
  });
}

function buildScene() {
  L = computeLayout();
  const signs = drawCity();
  buildFx(signs);

  // lluvia
  const rain = $("rain");
  rain.style.backgroundImage = rainImage();
  rain.style.backgroundSize = px(48) + " " + px(48);
  rain.style.setProperty("--rain-x", "-" + px(8));
  rain.style.setProperty("--rain-y", px(48));

  actorsLayer.innerHTML = "";
  actors.clear();

  doorSpill = place(addDiv(actorsLayer, "door-spill"), L.doorX - 10, L.gy + 1, L.doorW + 20, 8);
  door = place(addDiv(actorsLayer, "door"), L.doorX, L.gy - L.doorH, L.doorW, L.doorH);
  addDiv(door, "door__inside");
  addDiv(door, "door__leaf door__leaf--l");
  addDiv(door, "door__leaf door__leaf--r");
  place(addDiv(actorsLayer, "haze"), L.doorX - 16, L.gy - 10, L.doorW + 32, 14);

  [["#ff4fb8", "9s", "0s"], ["#39e6ff", "13s", "-5s"]].forEach(([color, dur, delay]) => {
    const car = place(addDiv(actorsLayer, "car"), 0, L.gy + 10, 26, 11);
    car.style.left = "0";
    car.style.backgroundImage = carImage(color);
    car.style.animationDuration = dur;
    car.style.animationDelay = delay;
    car.style.setProperty("--to", px(L.W + 40));
  });

  bouncerEl = createActor("Portero", BOUNCER, true);
  sizeActor(bouncerEl, L.bouncerX);

  moreEl = addDiv(actorsLayer, "queue-more");
  moreEl.style.top = px(L.feet - 44);
  moreEl.hidden = true;
  bubbleEl = null;
}

/* ---------- Personajes ---------- */
function createActor(name, skin, isBouncer) {
  const el = addDiv(actorsLayer, "actor" + (isBouncer ? " actor--bouncer" : ""));
  el.innerHTML = '<span class="actor__label"></span><div class="actor__sprite sprite"></div>';
  el.querySelector(".actor__label").textContent = name;
  el.querySelector(".actor__sprite").style.backgroundImage = spriteSheet(skin);
  return el;
}

function sizeActor(el, x) {
  el.style.transition = "none";
  place(el, x, L.feet - 24, 18, 24);
  el.dataset.x = x;
}

const walkTime = (from, to) => Math.max(250, Math.abs(to - from) * 9);

function walkTo(el, x, ms, delay = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      const from = parseFloat(el.dataset.x);
      const duration = speed(ms ?? walkTime(from, x));
      el.dataset.x = x;
      el.classList.toggle("actor--left", x < from - 0.5);
      el.style.transition = "left " + duration + "ms linear";
      el.classList.add("actor--walking");
      el.style.left = px(x);
      setTimeout(() => { el.classList.remove("actor--walking", "actor--left"); resolve(); }, duration);
    }, speed(delay));
  });
}

// mode: "instant" | "walk" (los nuevos llegan andando) | "exit" (salen de la discoteca y vuelven a la cola)
function placeQueue(mode) {
  const moves = [];
  state.alive.forEach((name, i) => {
    const target = slotX(i);
    let el = actors.get(name);
    if (!el) {
      el = createActor(name, skinOf(name));
      actors.set(name, el);
      if (mode === "instant") { sizeActor(el, target); return; }
      sizeActor(el, -22);
      moves.push(walkTo(el, target, null, i * 120));
      return;
    }
    const wasInside = el.classList.contains("actor--inside");
    el.className = "actor";
    if (mode === "instant") { sizeActor(el, target); return; }
    if (mode === "exit" && wasInside) {
      sizeActor(el, L.doorX + 1);
      el.classList.add("actor--appear");
      moves.push(walkTo(el, target, null, i * 100));
    } else {
      moves.push(walkTo(el, target));
    }
  });
  actors.forEach((el, name) => {
    if (!state.alive.includes(name)) {
      el.classList.add("actor--leave");
      setTimeout(() => el.remove(), 320);
      actors.delete(name);
    }
  });
  updateMore(state.alive.length);
  return Promise.all(moves);
}

function updateMore(count) {
  if (!moreEl) return;
  let hidden = 0;
  for (let i = 0; i < count; i++) if (slotX(i) < -8) hidden++;
  moreEl.hidden = hidden === 0;
  moreEl.textContent = "+" + hidden + " en la cola";
}

function say(text, type) {
  if (bubbleEl) bubbleEl.remove();
  bubbleEl = null;
  bouncerEl?.classList.toggle("is-talking", !!text);
  if (!text) return;
  bubbleEl = addDiv(actorsLayer, "bubble" + (type ? " bubble--" + type : ""), text);
  bubbleEl.style.right = Math.max(4, (L.W - L.bouncerX - 17) * L.ps) + "px";
  bubbleEl.style.bottom = px(L.H - L.feet + 32);
}

/* ---------- Música (bombo amortiguado) ---------- */
let musicTimer = null;
let doorOpen = false;
function startMusic() { stopMusic(); musicTimer = setInterval(() => sound.kick(doorOpen), 470); }
function stopMusic() { clearInterval(musicTimer); musicTimer = null; }

/* =====================================================
   EL PORTERO: frases y forma de decidir
   ===================================================== */
const THINK_LINES = [
  "Mmm…", "A ver, a ver…", "¿DNI?", "Date la vuelta.", "¿Vienes sola o con alguien?", "Ese peinado…",
  "¿Tú no eras el del año pasado?", "Déjame pensar.", "¿Esas zapatillas son de verdad?", "¿Sabes bailar?",
  "Sóplame aquí.", "Me suena tu cara…", "¿Estás en la lista? Mmm…"
];
const PASS_LINES = [
  "Pasa, que hace frío.", "Venga, tira p'adentro.", "Con esa sonrisa, pasa.", "¿Eres el DJ? Pasa.",
  "Bonitas zapatillas. Dentro.", "Pasa, pero no pidas reguetón.", "Tienes cara de pagar copas. Pasa.",
  "Vale, pero no me mires así.", "Huele a colonia buena. Adelante.", "Pasa antes de que me arrepienta.",
  "Hoy estoy de buenas. Pasa.", "Venga, que me caes bien."
];
const FAKE_STOP = ["¡ALTO AHÍ!", "Tú… quieto.", "¿Tú? ¿Aquí?"];
const FAKE_PASS = ["…es broma, pasa 😏", "Jajaja, tu cara. Pasa.", "Que noooo, pasa, pasa."];
const NO_LINES = [
  "Hoy no, campeón.", "Con esos calcetines, no.", "Tú a tu casa.", "Ni de broma.", "Esta noche te toca a ti.",
  "Aforo completo… para ti.", "Vuelve cuando aprendas a bailar.", "Lo siento, no estás en la lista."
];
const FAKE_NO_INTRO = ["Venga, pasa…", "Vale, adelante…"];
const FAKE_NO = ["…¡QUE NO! Tú fuera.", "…¡JA! Es broma. Tú no entras."];

// Todos pasan por la misma "duda", así no se sabe quién va a caer
async function inspect(name, isChosen) {
  setTicker("El portero mira a " + name + " de arriba abajo…");
  actors.get(name).classList.add("actor--nervous");
  const doubts = Math.random() < 0.5 ? 1 : 2;
  for (let i = 0; i < doubts; i++) {
    say(randomOf(THINK_LINES), "think");
    sound.hmm();
    await wait(speed(between(1100, 1900)));
  }
  actors.get(name).classList.remove("actor--nervous");

  if (!isChosen) {
    if (Math.random() < 0.3) {
      say(randomOf(FAKE_STOP), "no");
      sound.stop();
      await wait(speed(between(1200, 1700)));
      say(randomOf(FAKE_PASS), "ok");
    } else {
      say(randomOf(PASS_LINES), "ok");
    }
    sound.pass();
    return;
  }
  if (Math.random() < 0.35) {
    say(randomOf(FAKE_NO_INTRO), "ok");
    sound.pass();
    await wait(speed(between(1100, 1500)));
    say(randomOf(FAKE_NO), "no");
  } else {
    say(randomOf(NO_LINES), "no");
  }
  sound.reject();
}

/* =====================================================
   LA RONDA
   ===================================================== */
async function playRound() {
  if (state.running || state.alive.length === 0) return;
  state.running = true;
  renderClubControls();

  // 1) El sorteo se decide aquí; lo demás es animación
  const chosen = pickRandomName(state.alive);
  const { before, after } = buildRoundOrder(state.alive, chosen);
  const lineup = [...before, chosen, ...after];

  // 2) Se recoloca la cola en el orden de la ronda
  setTicker("El portero se cruje los nudillos…");
  actors.forEach(el => { el.className = "actor"; });
  await Promise.all(lineup.map((name, i) => walkTo(actors.get(name), slotX(i))));
  updateMore(lineup.length);
  startMusic();

  for (let i = 0; i < lineup.length; i++) {
    const name = lineup[i];
    const el = actors.get(name);
    const rest = lineup.slice(i + 1);
    el.classList.add("actor--front");
    await Promise.all([walkTo(el, L.checkX, 450), ...rest.map((n, j) => walkTo(actors.get(n), slotX(j), 450))]);
    updateMore(rest.length);
    await inspect(name, name === chosen);

    if (name !== chosen) {
      setTicker(name + " entra en Doom Club ✓");
      await wait(speed(700));
      await enterClub(el);
      say(null);
    } else {
      setTicker("¡" + name + " se queda fuera!");
      el.classList.add("actor--rejected");
      addDiv(el, "actor__stamp", "✕");
      await wait(speed(1100));
      el.classList.add("actor--thrown");
      el.dataset.x = L.checkX - 70;
      el.style.left = px(L.checkX - 70);
      await wait(speed(900));
      break;
    }
  }

  stopMusic();
  say(null);
  finishRound(chosen);
}

async function enterClub(el) {
  doorOpen = true;
  door.classList.add("is-open");
  doorSpill.classList.add("is-open");
  sound.open();
  await walkTo(el, L.doorX + 1, 340);
  el.classList.add("actor--inside");
  await wait(speed(260));
  doorOpen = false;
  door.classList.remove("is-open");
  doorSpill.classList.remove("is-open");
}

function finishRound(chosen) {
  state.alive = removeName(state.alive, chosen);
  state.out.push(chosen);
  state.running = false;
  state.gameOver = isGameOver(state.alive);
  saveState();
  const thrown = actors.get(chosen);
  actors.delete(chosen);
  setTimeout(() => thrown?.remove(), 400);
  renderClubControls();
  if (state.gameOver) openFinal();
  else openResult(chosen);
}

async function returnToQueue() {
  state.running = true;
  renderClubControls();
  setTicker("Los de dentro salen a la calle y vuelven a la cola…");
  await placeQueue("exit");
  state.running = false;
  renderClubControls();
  setTicker("Quedan " + state.alive.length + " en la cola. El portero espera.");
}

function setTicker(text) { ticker.textContent = text; }

/* =====================================================
   TARJETAS
   ===================================================== */
let countdownTimer = null;

function openResult(name) {
  $("dialogAvatar").style.backgroundImage = spriteSheet(skinOf(name));
  $("dialogName").textContent = name;
  $("dialogTask").textContent = state.purpose;
  $("dialogKicker").textContent = randomOf(["¡TÚ NO!", "¡FUERA!", "¡HOY NO!"]);
  $("dialogExtra").textContent = "Quedan " + state.alive.length + " en la cola para la siguiente ronda.";
  openModal("resultModal");
}

function openFinal() {
  sound.gameOver();
  const list = $("ranking");
  list.innerHTML = "";
  state.out.forEach((name, i) => {
    const li = document.createElement("li");
    li.style.animationDelay = (i * 120) + "ms";
    li.innerHTML = '<div class="guest__avatar sprite"></div><span class="ranking__name"></span>';
    li.querySelector(".sprite").style.backgroundImage = spriteSheet(skinOf(name));
    li.querySelector(".ranking__name").textContent = name;
    list.appendChild(li);
  });
  $("finalAvatar").style.backgroundImage = spriteSheet(BOUNCER);
  $("finalLead").textContent = state.gameOver
    ? "No queda nadie en la cola. Así habéis ido cayendo:"
    : "Así habéis ido cayendo:";
  let seconds = 20;
  const update = () => { $("finalCountdown").textContent = "Volviendo al inicio en " + seconds + " s."; };
  update();
  countdownTimer = setInterval(() => {
    seconds--;
    update();
    if (seconds <= 0) playAgain();
  }, 1000);
  openModal("finalModal");
}

function playAgain() {
  clearInterval(countdownTimer);
  countdownTimer = null;
  closeModal("finalModal");
  resetRound();
  showScreen("intro");
}

$("nextRoundBtn").addEventListener("click", async () => {
  closeModal("resultModal");
  await returnToQueue();
  playRound();
});
$("finishBtn").addEventListener("click", () => {
  closeModal("resultModal");
  openFinal();
});
$("playAgainBtn").addEventListener("click", playAgain);

/* =====================================================
   FASE 2: TAQUILLA
   ===================================================== */
function ensureSelectedSkin() {
  const used = usedSkins();
  if (state.selectedSkin === null || used.includes(state.selectedSkin)) {
    state.selectedSkin = nextFreeSkin(used, state.selectedSkin ?? -1, 1, SKINS.length);
  }
}

function renderStage(animate) {
  ensureSelectedSkin();
  const full = state.people.length >= MAX_PEOPLE || state.selectedSkin === null;
  const stage = $("stage");
  stage.querySelector(".stage__full")?.remove();
  if (full) addDiv(stage, "stage__full", "La lista está llena. Quita a alguien para apuntar a otra persona.");

  const skin = SKINS[state.selectedSkin ?? 0];
  stageSprite.style.backgroundImage = spriteSheet(skin);
  $("stageSkin").textContent = skin.label;
  if (animate) {
    stageSprite.classList.remove("stage__sprite--swap");
    void stageSprite.offsetWidth;
    stageSprite.classList.add("stage__sprite--swap");
  }
  const name = nameInput.value.trim();
  $("stageTag").textContent = name || "¿Quién eres?";
  $("stageTag").classList.toggle("stage__tag--empty", !name);
  ["prevSkin", "nextSkin", "randomSkin", "addBtn"].forEach(id => { $(id).disabled = full; });
  nameInput.disabled = full;
}

function renderSkinPicker() {
  const picker = $("skinPicker");
  const used = usedSkins();
  picker.innerHTML = "";
  SKINS.forEach((skin, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "skin-option";
    btn.disabled = used.includes(i);
    btn.title = skin.label + (used.includes(i) ? " (ocupado)" : "");
    btn.setAttribute("aria-pressed", String(i === state.selectedSkin));
    btn.setAttribute("aria-label", skin.label + (used.includes(i) ? ", ocupado" : ""));
    addDiv(btn, "sprite").style.backgroundImage = spriteSheet(skin);
    btn.addEventListener("click", () => selectSkin(i, true));
    picker.appendChild(btn);
  });
}

function selectSkin(index, up) {
  if (index === null || index === state.selectedSkin) return;
  state.selectedSkin = index;
  sound.swap(up);
  renderStage(true);
  renderSkinPicker();
}

function stepSkin(dir) {
  selectSkin(nextFreeSkin(usedSkins(), state.selectedSkin, dir, SKINS.length), dir > 0);
}

function stampStage(text) {
  const stage = $("stage");
  stage.querySelector(".stage__stamp")?.remove();
  const stamp = addDiv(stage, "stage__stamp", text);
  stageSprite.classList.remove("stage__sprite--swap", "stage__sprite--jump");
  void stageSprite.offsetWidth;
  stageSprite.classList.add("stage__sprite--jump");
  setTimeout(() => { stamp.remove(); stageSprite.classList.remove("stage__sprite--jump"); }, 1100);
}

function renderPeople() {
  const guests = $("guestList");
  guests.innerHTML = "";
  if (state.people.length === 0) guests.innerHTML = '<li class="empty">Todavía no hay nadie apuntado.</li>';
  state.people.forEach(p => {
    const li = document.createElement("li");
    li.className = "guest";
    li.innerHTML = '<div class="guest__avatar sprite"></div><span class="guest__name"></span>';
    li.querySelector(".sprite").style.backgroundImage = spriteSheet(SKINS[p.skin]);
    li.querySelector(".guest__name").textContent = p.name;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "guest__delete";
    btn.textContent = "✕";
    btn.setAttribute("aria-label", "Quitar a " + p.name + " de la lista");
    btn.addEventListener("click", () => handleRemove(p.name));
    li.appendChild(btn);
    guests.appendChild(li);
  });
  $("taquillaCount").textContent = state.people.length + "/" + MAX_PEOPLE + " apuntados";
  renderStage(false);
  renderSkinPicker();

  const ok = canStart(state.people);
  $("goBtn").disabled = !ok;
  $("goBtn").classList.toggle("btn--pulse", ok);
  $("goHint").innerHTML = ok
    ? "Listo: <strong>" + state.people.length + "</strong> en la lista."
    : "Hace falta apuntar al menos <strong>" + MIN_PEOPLE + " personas</strong>.";
}

function markPurposeChip() {
  const value = purposeInput.value.trim().toLowerCase();
  document.querySelectorAll(".chip").forEach(chip => chip.setAttribute("aria-pressed", String(chip.dataset.value === value)));
  $("purposeNext").disabled = !value;
}

/* =====================================================
   FASE 3: CONTROLES
   ===================================================== */
function renderClubControls() {
  roundBtn.disabled = state.running || state.alive.length === 0;
  $("resetBtn").disabled = state.running;
  $("editBtn").disabled = state.running;
}

/* =====================================================
   NAVEGACIÓN ENTRE FASES
   ===================================================== */
async function showScreen(name) {
  state.screen = name;
  Object.entries(screens).forEach(([key, el]) => { el.hidden = key !== name; });
  $("app").classList.toggle("app--wide", name === "club");
  window.scrollTo(0, 0);

  if (name === "intro") buildParade();
  if (name === "purpose") {
    purposeInput.value = state.purpose;
    markPurposeChip();
    purposeInput.focus();
  }
  if (name === "people") {
    renderPeople();
    nameInput.focus();
  }
  if (name === "club") {
    buildScene();
    $("hudPurpose").textContent = "Se sortea: " + state.purpose;
    state.running = true;
    renderClubControls();
    setTicker("Abriendo puertas… la gente llega a la cola.");
    sound.kick(true);
    await placeQueue("walk");
    state.running = false;
    renderClubControls();
    setTicker("El portero está listo. Pulsa «¡Que pase la cola!».");
  }
}

function resetRound() {
  state.alive = state.people.map(p => p.name);
  state.out = [];
  state.gameOver = false;
  saveState();
}

/* =====================================================
   EVENTOS
   ===================================================== */
$("playBtn").addEventListener("click", () => { sound.start(); showScreen("purpose"); });
$("rulesBtn").addEventListener("click", () => {
  sound.swap(true);
  $("ruleSprite").style.backgroundImage = spriteSheet(SKINS[2]);
  $("ruleBouncer").style.backgroundImage = spriteSheet(BOUNCER);
  $("ruleBouncer").style.transform = "scaleX(-1)";
  openModal("rulesModal");
});
$("rulesClose").addEventListener("click", () => closeModal("rulesModal"));
$("rulesPlay").addEventListener("click", () => { closeModal("rulesModal"); sound.start(); showScreen("purpose"); });

// Paso 1: qué se sortea
$("purposeChips").addEventListener("click", event => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  purposeInput.value = chip.dataset.value;
  purposeInput.classList.remove("input--error");
  markPurposeChip();
  sound.swap(true);
});
purposeInput.addEventListener("input", () => {
  purposeInput.classList.remove("input--error");
  markPurposeChip();
  sound.key();
});
$("purposeForm").addEventListener("submit", event => {
  event.preventDefault();
  const value = purposeInput.value.trim();
  if (!value) {
    purposeInput.classList.remove("input--error");
    void purposeInput.offsetWidth;
    purposeInput.classList.add("input--error");
    sound.error();
    return;
  }
  state.purpose = value;
  saveState();
  sound.swap(true);
  showScreen("people");
});
$("purposeBack").addEventListener("click", () => showScreen("intro"));

// Paso 2: quién viene
$("prevSkin").addEventListener("click", () => stepSkin(-1));
$("nextSkin").addEventListener("click", () => stepSkin(1));
$("stage").addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") { event.preventDefault(); stepSkin(-1); }
  if (event.key === "ArrowRight") { event.preventDefault(); stepSkin(1); }
});
$("randomSkin").addEventListener("click", () => {
  const free = SKINS.map((_, i) => i).filter(i => !usedSkins().includes(i) && i !== state.selectedSkin);
  if (free.length === 0) return;
  sound.dice();
  selectSkin(randomOf(free), true);
});
nameInput.addEventListener("input", () => {
  $("formError").textContent = "";
  nameInput.classList.remove("input--error");
  sound.key();
  renderStage(false);
});
$("addForm").addEventListener("submit", event => {
  event.preventDefault();
  try {
    state.people = addPerson(state.people, nameInput.value, state.selectedSkin);
    state.alive = [...state.alive, state.people[state.people.length - 1].name];
    $("formError").textContent = "";
    nameInput.value = "";
    sound.stamp();
    saveState();
    stampStage("¡APUNTADO!");
    renderPeople();
  } catch (err) {
    $("formError").textContent = err.message;
    nameInput.classList.remove("input--error");
    void nameInput.offsetWidth;
    nameInput.classList.add("input--error");
    sound.error();
  }
  nameInput.focus();
});
function handleRemove(name) {
  state.people = removePerson(state.people, name);
  state.alive = removeName(state.alive, name);
  state.out = removeName(state.out, name);
  sound.swap(false);
  saveState();
  renderPeople();
}
$("peopleBack").addEventListener("click", () => showScreen("purpose"));
$("goBtn").addEventListener("click", () => {
  if (!canStart(state.people)) return;
  sound.start();
  showScreen("club");
});

// Fase 3: la entrada
roundBtn.addEventListener("click", playRound);
$("resetBtn").addEventListener("click", async () => {
  sound.swap(true);
  resetRound();
  state.running = true;
  renderClubControls();
  setTicker("Reinicio: todo el mundo vuelve a la cola.");
  await placeQueue("walk");
  state.running = false;
  renderClubControls();
});
$("editBtn").addEventListener("click", () => { sound.swap(false); showScreen("people"); });
$("muteBtn").addEventListener("click", event => {
  const muted = sound.toggleMute();
  event.currentTarget.textContent = muted ? "♪ No" : "♪ Sí";
  event.currentTarget.setAttribute("aria-pressed", String(muted));
});

$("speedBtn").addEventListener("click", event => {
  speedFactor = speedFactor === 1 ? 2 : 1;
  event.currentTarget.textContent = "⏩ x" + speedFactor;
  event.currentTarget.setAttribute("aria-pressed", String(speedFactor === 2));
});

// Atajo: barra espaciadora = ¡Que pase la cola!
document.addEventListener("keydown", event => {
  const modalOpen = document.querySelector(".modal:not([hidden])");
  if (event.code === "Space" && state.screen === "club" && !modalOpen) {
    event.preventDefault();
    playRound();
  }
});
document.addEventListener("keyup", event => {
  if (event.code === "Space" && state.screen === "club") event.preventDefault(); // que no pulse otro botón
});

let resizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (state.screen === "club" && !state.running) {
      buildScene();
      placeQueue("instant");
    }
    if (state.screen === "intro") buildParade();
  }, 200);
});

/* ---------- Arranque ---------- */
loadState();
showScreen("intro");
