class Objectcreate {
  constructor(name, phone, email, password) {
    this.id = Math.round(Math.random() * 1000);
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
}

let buttons = document.querySelectorAll("#head>button");

for (let a = 0; a < buttons.length; a++) {
  if (a == 0) {
    buttons[a].onclick = () => {
      window.location.href = "../userHTML/userLanding.html";
    };
  } else {
    buttons[a].onclick = () => {
      window.location.href = "../userHTML/userLogin.html";
    };
  }
}

let form = document.querySelector("form");
let loader = document.getElementById("loader");

form.onsubmit = (event) => {
  event.preventDefault();
  loader.style.display = "block";
  loader.style.animation = "loading ease-in-out 2s";

  let name = form.name.value;
  let phone = Number(form.phone.value);
  let email = form.email.value;
  let password = form.password.value;

  let userObject = new Objectcreate(name, phone, email, password);

  let request = fetch("http://localhost:3000/usersignin", {
    method: "POST",
    body: JSON.stringify(userObject),
    headers: {
      "Content-Type": "application/json",
    },
  });

    alert("Sign in Successful");
};
