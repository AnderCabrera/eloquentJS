async function loadJsonExercise(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    return response.json();
  }
  else throw new HttpError(response);

}

async function demoGithubUser() {
  let user;

  while (true) {
    let name = prompt("ingrese usuario", "");
    
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (error) {
      if (error instanceof HttpError && error.response.status == 404) {
        alert("No existe tal usuario, por favor reingrese.");
      } else {
        throw err;
      }
    }
  }

  alert(`Nombre completo: ${user.name}`);
  return user;
}

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ¿...qué escribir aquí?
  // Necesitamos llamar async wait() y esperar a obtener 10
  // recuerda, no podemos usar "await"

  wait().then(res => console.log(res));
}

f()