let skip = document.querySelector("#skip>a");
let user = document.getElementById("user");
let admin = document.getElementById("admin");

skip.onclick = () => {
  window.location.href = "./userHTML/userLanding.html";
};

admin.onclick = () => {
  window.location.href = "./adminHTML/adminsigininpage.html";
};

user.onclick = () => {
  window.location.href = "./userHTML/userLanding.html";
};

let redirect = () => {
  window.location.href = "./userHTML/userLanding.html";
};

setTimeout(redirect,5000);
