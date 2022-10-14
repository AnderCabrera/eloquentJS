//Ejercicio 1
//Libro
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

//Mio
function rango(a, b) {
  let arr = [];

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
}

function sumar(arr) {
  let res = 0;

  for (const num of arr) {
    res += num;
  }

  return res;
}

// Ejercicio 2

function revertirArray(arr) {
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }

  return res;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    let temp2 = arr[arr.length - 1 - i];

    arr[arr.length - 1 - i] = temp;
    arr[i] = temp2;
  }

  return arr;
}

// Ejercicio 3
function arrayALista(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

function listaAArray(obj) {
  let arr = [];

  for (let i = obj; i; i = i.rest) {
    arr.push(i.value);
  }

  return arr;
}

function preceder(item, list) {
  return { item, list };
}

function posicion(list, item) {
  if (!list) return undefined;
  else if (item == 0) return list.value;
  else return posicion(list.rest, item - 1);
}

// console.log(arrayALista([1, 2, 3]));
// console.log(listaAArray(arrayALista([1, 2, 3])));
// console.log(preceder(10, preceder(20, preceder(30, null))));
// console.log(posicion(arrayALista([1, 2, 3]), 0));

//Ejercicio 4
//Libro
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

//Mio
const igualdadProfunda = (a, b) => {
  if (a === b) {
    console.log("1");
    return true;
  } else if (typeof a.here === typeof b.here) {
    console.log("2");
    return true;
  } else {
    console.log("3");
    return false;
  }
};



let obj2 = { here: { is: "an" }, object: 2 };

console.log(igualdadProfunda(obj, obj));

console.log(igualdadProfunda(obj, { here: 1, object: 2 }));

console.log(igualdadProfunda(obj, { here: { is: "an" }, object: 2 }));
