///////////////
// Methods
///////////////

let gato = {};

gato.accion = function (accion) {
  console.log(`El gato esta ${accion}`);
};

// gato.accion("comiendo");

function estado(accion) {
  console.log(`El ${this.animal} esta ${accion}`);
}

let animales = {
  animal: "perro",
  estado,
};

// animales.estado("jugando pelota");

function sumTotal() {
  console.log(this.numeros.reduce((a, b) => a + b));
}

let sumaNumeros = {
  numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  sumTotal,
};

// sumaNumeros.sumTotal()

///////////////
// Prototypes
///////////////

let gatoPrototipo = {
  hablar(texto) {
    console.log(`El gato ${this.tipo} dice ${texto}`);
  },
};

let gatoPro = Object.create(gatoPrototipo);

gatoPro.tipo = "Angora";
gatoPro.hablar("qprooo");

////////////////////////////

function Gato(tipo) {
  this.tipo = tipo;
}

Gato.prototype.hablar = function (linea) {
  console.log(`El gato ${this.tipo} dice ${linea}`);
};

let gatoAngora = new Gato("Siames");

gatoAngora.hablar("HOLAAA");

class Perro {
  constructor(tipo) {
    this.tipo = tipo;
  }

  mensaje(linea) {
    console.log(`El perro de tipo ${this.tipo} dice ${linea}`);
  }
}

let chucho = new Perro("Salchicha");
chucho.mensaje("SIUUUUUU");

////////////////
// Mapas
////////////////

let edades = {
  Ander: 16,
  Eliu: 12,
  Camila: 6,
};

console.log(`La edad de Ander es ${edades["Ander"]}`);
console.log(`Se conoce la edad de Juan?`, "Juan" in edades);
console.log("Se conoce la edad de toString?", "toString" in edades);
console.log(edades.hasOwnProperty("toString"), "\n");

let edadesMap = new Map();

edadesMap.set("Boris", 20);
console.log(edadesMap.get("Boris"));
console.log(edadesMap.has("Ander"), "\n");

////////////////
// Polimorfismo
///////////////

function Conejo(tipo) {
  this.tipo = tipo;
}

Conejo.prototype.toString = function () {
  return `un conejo ${this.tipo}`;
};

let conejoNegro = new Conejo("negro");

console.log(String(conejoNegro));

let simbolo = Symbol("nombre");

Conejo.prototype[simbolo] = 55;

console.log(conejoNegro[simbolo]);

///////////////////
const simboloToString = Symbol("toString");
Array.prototype.simboloToString = function () {
  return `${this.length}cm de largo`;
};

console.log([1, 2, 3].simboloToString(), "\n");
////////////////////////////
// La interfaz de iterador
////////////////////////////

let iteradorSI = "SI"[Symbol.iterator]();

console.log(iteradorSI.next());
console.log(iteradorSI.next());
console.log(iteradorSI.next());

class Matriz {
  constructor(ancho, altura, elemento = (x, y) => undefined) {
    this.ancho = ancho;
    this.altura = altura;
    this.contenido = [];

    for (let y = 0; y < altura; y++) {
      for (let x = 0; x < ancho; x++) {
        this.contenido = elemento(x, y);
      }
    }
  }

  obtener(x, y) {
    return this.contenido[y * this.ancho + x];
  }

  establecer(x, y, valor) {
    this.contenido[y * this.ancho + x] = valor;
  }
}

class IteradorMatriz {
  constructor(matriz) {
    this.x = 0;
    this.y = 0;
    this.matriz = matriz;
  }

  next() {
    if (this.y == this.matriz.altura) return {done: true};

    let value = {
      x: this.x,
      y: this.y,
      value: this.matriz.obtener
    };
    this.x++;

    if (this.x == this.matriz.ancho) {
      this.x = 0;
      this.y++;
    }

    return {value, done: false}
  }

  static SIU() {
    return "SIUUUU";
  }
}
