let url = "https://api.github.com/users";
let users = ["torvalds", "alex", "jeresig", "andercabrera"];

let requests = users.map((user) => fetch(`${url}/${user}`));

Promise.all(requests)
  .then((responses) => responses)
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then((users) => users.map((user) => console.log(user.name, user.followers)));

Promise.race([
  fetch(`${url}/${users[0]}`).then((request) =>
    setTimeout(() => request.json().then((json) => console.log(json)), 2000)
  ),
  new Promise((resolve, reject) => {
    reject(new Error("XD"));
  }),
]).catch(console.log);

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
//   ).catch((error) => alert(error)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(alert); // 1

// Promisify

function sum(num1, num2, callback) {
  if (!num1 || !num2) return callback(new Error("Ingresa los numeros"));
  return callback(null, num1 + num2);
}

function promisify(f) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) reject(err);
        else resolve(result);
      }

      args.push(callback);
      f.call(this, ...args);
    });
  };
}

let sumaa = promisify(sum);

sumaa(11, 11)
  .catch(err => console.log(err))
  .then((res) => res)
  .then(console.log)
