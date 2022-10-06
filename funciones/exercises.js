// ejercicio 1
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(45214, 125));

// ejercicio 2
function esPar(a) {
  if (a % 2 == 0) return true;
  else if (a % 2 != 0) return false;
}

console.log(esPar(-1));

// ejercicio 3
function contarCaracteres(palabra, letra) {
  var contador = 0;

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      contador++;
    }
  }

  return contador;
}

function contarFs(string) {
  return contarCaracteres(string, "B");
}

console.log(contarFs("FASADASBABABASDBASBASD"));
console.log(contarCaracteres("AnderEzequielCabreraCalel", "a"));
