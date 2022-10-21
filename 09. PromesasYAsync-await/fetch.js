let url = "https://apii.github.com/users";

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// .then((githubUser) => {
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.setAttribute('class', 'img')
//   document.body.appendChild(img);
// });

function getImgProfile(user) {
  return fetch(url)
  .then(() => fetch(`${url}/${user}`))
  
  .catch((err) => {
    console.log(err);

    window.addEventListener("unhandledrejection", (event) => {
      alert(event.promise);
      alert(event.reason);
    })

    return fetch(`https://api.github.com/users/${user}`)
  })
  .then((response) => response.json())
  .then((githubUser) => {
    let userName = document.getElementById("user_name");
    let img = document.createElement("img");
    let userLink = document.getElementById("siu");
    
    console.log(githubUser);
    
    userName.textContent = githubUser.name;
    
    img.src = githubUser.avatar_url;
    img.setAttribute("class", "img");
    document.body.appendChild(img);
    
    userLink.setAttribute("href", githubUser.html_url);
  })
}
  
  getImgProfile("andercabrera");
