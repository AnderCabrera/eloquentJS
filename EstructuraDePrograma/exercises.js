// Ejercicio 1
let string = "#";

for (let i = 0; i < 7; i++) {
  console.log(string);
  string += "#";
}

// Ejercicio 2
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log("fizzbuzz");
  }
}

// Ejercicio 3
let size = 8;

let board = "";

for (let y = 0; y < size; ++y) {
  for (let x = 0; x < size; x++) {
    if (board.length % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);