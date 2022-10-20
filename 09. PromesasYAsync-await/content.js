let num = 101;

let promise = new Promise(function (resolve, reject) {
  if (num % 2 == 0) {
    // setTimeout(() => resolve("The number is even!"), 2000);
  } else {
    // setTimeout(() => reject(new Error("The number isn't even")), 1000);
  }
});

// solo terminaciones exitosas, lo mismo para las promesas
promise.then(console.log);

// ambas terminaciones
promise
  .then(function (result) {
    console.log(result);
  })
  .catch()
  .finally(() => console.log("I'm a finally"));

// MiniExercise

function arithmeticOperation(nums) {
  return new Promise((resolve, reject) => {
    resolve(nums);
  });
}

let azar = arithmeticOperation([10, 10, 20]);
azar
  .then((nums) => nums.reduce((a, b) => a + b))
  .then((res) => console.log(res));

// Demora con promesa
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let delayPromise = delay(3000);
delayPromise.then(() => console.log("Runs after 3s"));

function greeting(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

greeting(1000)
  .then(() => console.log("Hola "))
  .then(() => greeting(1000))
  .then(() => console.log("buen dia!"));

// ====================================================
//                       Fetch
// ====================================================

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve); // function() { código nativo }
    // resolve con this.num*2 después de 1 segundo
    setTimeout(() => resolve(this.num * 2), 500); // (**)
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result); // (*)
  })
  .then(console.log); // muestra 2 después de 1000 ms
