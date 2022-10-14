let a = [1, 2, 3];
let b = [4, 5, 6];

console.log(a.concat(b));

console.log("   HOLA   ".trim());

console.log(String(6).padStart(3, "0"));

console.log("LA".repeat(4));

function min(...numeros) {
  let res = Infinity;

  for (const num of numeros) {
    if (num < res) {
      res = num;
    }
  }
  return res;
}

let string = JSON.stringify({ ardilla: false, eventos: ["fin de semana"] });

console.log(string);
// → {"ardilla":false,"eventos":["fin de semana"]}

console.log(JSON.parse(string).eventos);
// → ["fin de semana"]
