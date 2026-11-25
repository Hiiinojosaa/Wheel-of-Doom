// Tests de la lógica del sorteo (js/logic.js)
const {
  pickRandomName, addPerson, removePerson, removeName,
  isGameOver, canStart, shuffle, buildRoundOrder, nextFreeSkin
} = require("../js/logic.js");

const people = [
  { name: "Laura", skin: 0 },
  { name: "Carlos", skin: 1 }
];

describe("pickRandomName", () => {
  test("devuelve un nombre que está en la lista", () => {
    const names = ["Ana", "Pedro", "Marta"];
    expect(names).toContain(pickRandomName(names));
  });

  test("devuelve null si la lista está vacía", () => {
    expect(pickRandomName([])).toBeNull();
  });
});

describe("addPerson", () => {
  test("añade una persona nueva", () => {
    const result = addPerson(people, "Ana", 2);
    expect(result).toHaveLength(3);
    expect(result[2]).toEqual({ name: "Ana", skin: 2 });
  });

  test("quita los espacios del nombre", () => {
    expect(addPerson([], "  Iván  ", 0)[0].name).toBe("Iván");
  });

  test("no cambia la lista original", () => {
    addPerson(people, "Ana", 2);
    expect(people).toHaveLength(2);
  });

  test("da error si el nombre está vacío", () => {
    expect(() => addPerson(people, "   ", 2)).toThrow();
  });

  test("da error si el nombre está repetido (sin importar mayúsculas)", () => {
    expect(() => addPerson(people, "laura", 2)).toThrow();
  });

  test("da error si el personaje ya está cogido", () => {
    expect(() => addPerson(people, "Ana", 0)).toThrow();
  });

  test("da error si la lista está llena (12 personas)", () => {
    const full = Array.from({ length: 12 }, (_, i) => ({ name: "P" + i, skin: i }));
    expect(() => addPerson(full, "Ana", 3)).toThrow();
  });
});

describe("removePerson y removeName", () => {
  test("removePerson quita a la persona por su nombre", () => {
    expect(removePerson(people, "Laura")).toEqual([{ name: "Carlos", skin: 1 }]);
  });

  test("removeName quita el nombre de la lista", () => {
    expect(removeName(["Ana", "Pedro"], "Ana")).toEqual(["Pedro"]);
  });
});

describe("isGameOver y canStart", () => {
  test("se acaba cuando no queda nadie", () => {
    expect(isGameOver([])).toBe(true);
    expect(isGameOver(["Ana"])).toBe(false);
  });

  test("hacen falta al menos 2 personas para empezar", () => {
    expect(canStart([{ name: "Ana", skin: 0 }])).toBe(false);
    expect(canStart(people)).toBe(true);
  });
});

describe("shuffle", () => {
  test("mantiene los mismos elementos", () => {
    const list = [1, 2, 3, 4, 5];
    expect(shuffle(list).sort()).toEqual(list);
  });
});

describe("buildRoundOrder", () => {
  test("el elegido aparece una vez y no se pierde nadie", () => {
    const alive = ["Ana", "Pedro", "Marta", "Iván"];
    const { before, chosen, after } = buildRoundOrder(alive, "Marta");
    expect(chosen).toBe("Marta");
    const all = [...before, chosen, ...after];
    expect(all.sort()).toEqual([...alive].sort());
  });
});

describe("nextFreeSkin", () => {
  test("salta los personajes ocupados", () => {
    expect(nextFreeSkin([1, 2], 0, 1, 12)).toBe(3);
  });

  test("da la vuelta hacia atrás", () => {
    expect(nextFreeSkin([], 0, -1, 12)).toBe(11);
  });

  test("devuelve null si están todos ocupados", () => {
    const all = Array.from({ length: 12 }, (_, i) => i);
    expect(nextFreeSkin(all, 0, 1, 12)).toBeNull();
  });
});
