function printCLG() {
  "use strict";
  for (let i = 0; i < 3; i++) {
    console.log("Hi!");
  }
}

function ultimoElemento(array) {
  if (array.length == 0) {
    return { fallo: true };
  } else {
    return { elemento: array[array.length - 1] };
  }
}

function pedirDireccion(pregunta = "izquierda") {
  let resultado = pregunta;
  if (resultado.toLowerCase() == "izquierda") return "I";
  if (resultado.toLowerCase() == "derecha") return "D";
  throw new Error("Dirección invalida: " + resultado);
}

function mirar() {
  if (pedirDireccion() == "I") {
    return "una casa";
  } else {
    return "dos osos furiosos";
  }
}

try {
  console.log("Tu ves", mirar());
} catch (error) {
  console.log("Algo incorrecto sucedio: " + error);
}
