let homeBtn = document.querySelector("#head>button");

homeBtn.onclick = () => {
  window.location.href = "../userHTML/userLanding.html";
};

let form = document.querySelector("form");
let loader = document.getElementById("loader");

let res = JSON.parse(localStorage.getItem("login"));

if (res != undefined && res.login === true){
  form.innerHTML = "";
  // form.style.border = "none";
  let des = document.createElement("h2");
  des.innerText = `${res.name} logged in`
  let button = document.createElement("button");
  button.innerText = "Log out";
  button.style.padding = "4%";
  button.style.marginTop = "6%";
  button.style.fontSize = "medium";
  button.onclick = () => {
    localStorage.removeItem("login");
    window.location.href = "../userHTML/userLanding.html";
  }

  form.append(des,button);
}


form.onsubmit = async (event) => {
  event.preventDefault();

  let email = form.email.value;
  let password = form.password.value;

  if (email != "" && password != "") {
    loader.style.display = "block";
    loader.style.animation = "loading ease-in-out 2s";
    let request = await fetch("http://localhost:3000/usersignin");

    let response = await request.json();
    let n = response.length;
    for (let a = 0; a < n; a++) {
      if (response[a].email === email && response[a].password === password) {
        let login = { name: response[a].name , login : true}
        localStorage.setItem("login", JSON.stringify(login));
        alert(`Welcome ${response[a].name}`);
        window.location.href = "../userHTML/userLanding.html";
        return;
      } else if (
        (response[a].email === email && response[a].password !== password) ||
        (response[a].email !== email && response[a].password === password)
      ) {
        alert("Incorrect Credentials");
        loader.style.display = "none";
      }
    }
  } else {
    alert("Please enter Credentials");
  }
};

