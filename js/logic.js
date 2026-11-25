/* Lógica del sorteo: funciones puras (sin DOM) que se testean con Jest */
/* =====================================================
   LÓGICA PURA (lo que se testea con Jest)
   ===================================================== */
const MAX_PEOPLE = 12;
const MIN_PEOPLE = 2;

function pickRandomName(names) {
  if (names.length === 0) return null;
  return names[Math.floor(Math.random() * names.length)];
}

function addPerson(people, name, skin) {
  const clean = name.trim();
  if (clean === "") throw new Error("Escribe tu nombre para apuntarte.");
  if (clean.length > 14) throw new Error("Máximo 14 letras.");
  if (people.length >= MAX_PEOPLE) throw new Error("La lista está llena: máximo " + MAX_PEOPLE + " personas.");
  if (skin === null || skin === undefined) throw new Error("Elige un personaje.");
  if (people.some(p => p.name.toLowerCase() === clean.toLowerCase())) throw new Error(clean + " ya está en la lista.");
  if (people.some(p => p.skin === skin)) throw new Error("Ese personaje ya lo lleva otra persona.");
  return [...people, { name: clean, skin }];
}

function removePerson(people, name) {
  return people.filter(p => p.name !== name);
}

function removeName(names, name) {
  return names.filter(n => n !== name);
}

function isGameOver(aliveNames) {
  return aliveNames.length === 0;
}

function canStart(people) {
  return people.length >= MIN_PEOPLE;
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Orden de la ronda: los que entran antes, el elegido y los que se quedan esperando
function buildRoundOrder(alive, chosen) {
  const others = shuffle(removeName(alive, chosen));
  const position = Math.floor(Math.random() * (others.length + 1));
  return { before: others.slice(0, position), chosen, after: others.slice(position) };
}

// Siguiente personaje libre hacia delante (dir = 1) o hacia atrás (dir = -1)
function nextFreeSkin(usedSkins, current, dir, total) {
  for (let step = 1; step <= total; step++) {
    const index = ((current + dir * step) % total + total) % total;
    if (!usedSkins.includes(index)) return index;
  }
  return null;
}

if (typeof module !== "undefined") {
  module.exports = { pickRandomName, addPerson, removePerson, removeName, isGameOver, canStart, shuffle, buildRoundOrder, nextFreeSkin };
}
