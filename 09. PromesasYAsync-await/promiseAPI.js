let url = "https://api.github.com/users";
let users = ["torvalds", "alex", "jeresig"];

let requests = users.map((name) => fetch(`${url}/${name}`));

Promise.all(requests)
  .then((responses) => {
    return responses;
}).then(responses => Promise.all(responses.map(response => response.json())))
.then(users => users.map(user => console.log(user.name, user.followers)))