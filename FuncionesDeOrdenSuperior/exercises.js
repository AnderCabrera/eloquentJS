//Ejercicio 1
let arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(arrays.reduce((a, b) => a.concat(b), []));

//Ejercicio 2

function ciclo(n, prueba, actualizacion, cuerpo) {
  if (prueba(n)) {
    cuerpo(n);
    ciclo(actualizacion(n), prueba, actualizacion, cuerpo);
  }
}

// ciclo(1, n => n <= 10, n => n + 1, console.log);

//Ejercicio 3

function everyLibro(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }

  return true;
}

function everyAnder(array, test) {
  let com = false;

  if (array.length <= 0) {
    array[0] = 0;
  }

  for (const element of array) {
    if (test(element)) {
      com = true;
    } else {
      com = false;
      break;
    }
  }

  return com;
}

// console.log(everyAnder([], (n) => n < 10));

function everySome(array, test) {
  return !array.some((n) => !test(n));
}

// console.log(everySome([2, 22, 2], (n) => n < 10));
// console.log(!(!true || !false || !true));
