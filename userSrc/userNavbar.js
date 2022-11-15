import { navbar } from "../userComponents/userNavbar.js";

let appendDiv = document.getElementById("user_append_navbar");

appendDiv.innerHTML = navbar();

let login = document.getElementById("login");
let sign = document.getElementById("sign");
let div = document.getElementById("user_data_div");
let res = JSON.parse(localStorage.getItem("login"));

if (res != undefined && res.login === true) {
  div.innerHTML = "";
  let name = document.createElement("button");
  name.style.fontSize = "large";
  name.textContent = res.name;
  name.onclick = () => {
    window.location.href = "../userHTML/userLogin.html";
  }
  name.style.padding = "5% 6%";
  div.append(name);

  sign.style.display = "none";
  login.innerText = res.name;
}
let products = document.getElementById("user_products");
let solutions = document.getElementById("user_solutions");
let resources = document.getElementById("user_resources");
let solutionDiv = document.getElementById("user_solutions_div");
let productDiv = document.getElementById("user_products_div");
let resourceDiv = document.getElementById("user_resources_div");
let body = document.querySelector("body");

let prods = 0;
let sols = 0;
let resos = 0;

products.onclick = () => {
  let img1 = document.querySelector("#user_products>img");
  let img2 = document.querySelector("#user_solutions>img");
  let img3 = document.querySelector("#user_resources>img");
  if (prods % 2 == 0) {
    img1.src = "../images/icons8-chevron-up-20.png";
    img2.src = "../images/icons8-chevron-down-20.png";
    img3.src = "../images/icons8-chevron-down-20.png";
    sols = 0;
    resos = 0;
    prods++;
    productDiv.style.display = "flex";
    solutionDiv.style.display = "none";
    resourceDiv.style.display = "none";
  } else {
    img1.src = "../images/icons8-chevron-down-20.png";
    img2.src = "../images/icons8-chevron-down-20.png";
    img3.src = "../images/icons8-chevron-down-20.png";
    prods++;
    productDiv.style.display = "none";
    solutionDiv.style.display = "none";
    resourceDiv.style.display = "none";
  }
};

solutions.onclick = () => {
  let img1 = document.querySelector("#user_solutions>img");
  let img2 = document.querySelector("#user_products>img");
  let img3 = document.querySelector("#user_resources>img");
  if (sols % 2 == 0) {
    img1.src = "../images/icons8-chevron-up-20.png";
    img2.src = "../images/icons8-chevron-down-20.png";
    img3.src = "../images/icons8-chevron-down-20.png";
    sols++;
    prods = 0;
    resos = 0;
    productDiv.style.display = "none";
    solutionDiv.style.display = "flex";
    resourceDiv.style.display = "none";
  } else {
    img1.src = "../images/icons8-chevron-down-20.png";
    img2.src = "../images/icons8-chevron-down-20.png";
    img3.src = "../images/icons8-chevron-down-20.png";
    sols++;
    productDiv.style.display = "none";
    solutionDiv.style.display = "none";
    resourceDiv.style.display = "none";
  }
};

resources.onclick = () => {
  let img1 = document.querySelector("#user_resources>img");
  let img2 = document.querySelector("#user_products>img");
  let img3 = document.querySelector("#user_solutions>img");
  if (resos % 2 == 0) {
    img1.src = "../images/icons8-chevron-up-20.png";
    img2.src = "../images/icons8-chevron-down-20.png";
    img3.src = "../images/icons8-chevron-down-20.png";
    resos++;
    prods = 0;
    sols = 0;
    productDiv.style.display = "none";
    solutionDiv.style.display = "none";
    resourceDiv.style.display = "flex";
  } else {
    img1.src = "../images/icons8-chevron-down-20.png";
    img2.src = "../images/icons8-chevron-down-20.png";
    img3.src = "../images/icons8-chevron-down-20.png";
    resos++;
    productDiv.style.display = "none";
    solutionDiv.style.display = "none";
    resourceDiv.style.display = "none";
  }
};

let menu = document.querySelector("#user_menu>img");
let menuDiv = document.getElementById("user_menu_div");
let click = 0;

menu.onclick = () => {
  if (click % 2 == 0) {
    menu.src = "../images/icons8-close-50.png";
    menuDiv.style.display = "block";
    body.style.overflow = "hidden";
    click++;
  } else {
    menu.src = "../images/icons8-menu-rounded-50 (1).png";
    menuDiv.style.display = "none";
    body.style.overflow = "scroll";
    click++;
  }
};

let productSmallDiv = document.getElementById("user_products_small_div");
let userMenuProducts = document.getElementById("user_menu_products");
let productImage = document.querySelector("#small_product_img>img");

let productSmall = 0;

userMenuProducts.onclick = () => {
  if (productSmall % 2 == 0) {
    productSmallDiv.style.display = "flex";
    menuDiv.style.overflow = "scroll";
    productImage.src = "../images/icons8-chevron-up-20.png";
    productSmall++;
  } else {
    productSmallDiv.style.display = "none";
    menuDiv.style.overflow = "auto";
    productImage.src = "../images/icons8-chevron-down-20.png";
    productSmall++;
  }
};

let solutionSmallDiv = document.getElementById("user_solutions_small_div");
let userMenuSolutions = document.getElementById("user_menu_solutions");
let solutionImage = document.querySelector("#small_solution_img>img");

let solutionSmall = 0;

userMenuSolutions.onclick = () => {
  if (solutionSmall % 2 == 0) {
    solutionSmallDiv.style.display = "flex";
    menuDiv.style.overflow = "scroll";
    solutionImage.src = "../images/icons8-chevron-up-20.png";
    solutionSmall++;
  } else {
    solutionSmallDiv.style.display = "none";
    menuDiv.style.overflow = "auto";
    solutionImage.src = "../images/icons8-chevron-down-20.png";
    solutionSmall++;
  }
};

let resourceSmallDiv = document.getElementById("user_resources_small_div");
let userMenuResources = document.getElementById("user_menu_resources");
let resourceImage = document.querySelector("#small_resource_img>img");

let resourceSmall = 0;

userMenuResources.onclick = () => {
  if (resourceSmall % 2 == 0) {
    resourceSmallDiv.style.display = "flex";
    resourceImage.src = "../images/icons8-chevron-up-20.png";
    menuDiv.style.overflow = "scroll";
    resourceSmall++;
  } else {
    resourceSmallDiv.style.display = "none";
    resourceImage.src = "../images/icons8-chevron-down-20.png";
    menuDiv.style.overflow = "auto";
    resourceSmall++;
  }
};

login.onclick = () => {
  window.location.href = "../userHTML/userLogin.html";
};

let signin = document.querySelectorAll(".signin");

for (let a = 0; a < signin.length; a++) {
  signin[a].onclick = () => {
    window.location.href = "../userHTML/userSignin.html";
  };
}

let logoDiv = document.getElementById("user_logo");
logoDiv.onclick = () => {
  window.location.href = "../userHTML/userLanding.html";
};

let navbarDiv = document.getElementById("navbar");

window.onscroll = () => {
  navbarDiv.style.boxShadow = "rgba(0, 0, 0, 0.18) 0px 2px 4px";
};
