console.log("shivam");
let button = document.querySelector(".bottom-top");
button.addEventListener("click", topfun);
function topfun() {
  document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
import {
  admin_navbar,
  admin_navbar_2,
  planAppend,
  productAppend,
} from "../adminComponents/adminNavbar.js";

let div_navbar = document.getElementById("navbar");
div_navbar.innerHTML = admin_navbar();

console.log(admin_navbar());

let product_icon = document.querySelector(".product");
let plan_icon = document.querySelector(".plan");
let appenddiv = document.getElementById("navbar_append");
let count1 = 0;
let count2 = 0;
appenddiv.style.display = "none";
product_icon.onclick = () => {
  console.log("shivb");
  if (count1 % 2 == 0) {
    appenddiv.innerHTML = productAppend();
    appenddiv.style.display = "block";
    appenddiv.style.display = "flex";
    count1++;
    document.querySelector(
      ".product > span"
    ).innerHTML = `<i class = "fa-solid fa-angle-up"></i>`;
  } else {
    // appenddiv.innerHTML = null;
    document.querySelector(
      ".product > span"
    ).innerHTML = `<i class = "fa-solid fa-angle-down"></i>`;
    count1++;
    appenddiv.style.display = "none";
  }
};

plan_icon.onclick = () => {
  if (count2 % 2 == 0) {
    appenddiv.innerHTML = planAppend();
    appenddiv.style.display = "block";
    appenddiv.style.display = "flex";
    document.querySelector(
      ".plan > span"
    ).innerHTML = `<i class = "fa-solid fa-angle-up"></i>`;
    count2++;
  } else {
    appenddiv.innerHTML = null;
    document.querySelector(
      ".plan > span"
    ).innerHTML = `<i class = "fa-solid fa-angle-down"></i>`;
    count2++;
    appenddiv.style.display = "none";
  }
};

// append = () => {
//   //appenddiv.innerHTML = null;
// };

let count3 = 0;
let h2_ham = document.querySelector("#navbar_hamberger > h2");
let ham_div = document.getElementById("ham_div");
ham_div.innerHTML = admin_navbar_2();
ham_div.style.display = "none";
h2_ham.onclick = () => {
  if (count3 % 2 == 0) {
    h2_ham.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    ham_div.style.display = "block";
    count3++;
  } else {
    h2_ham.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    ham_div.style.display = "none";
    count3++;
  }
};

let ham_product = document.getElementById("ham_product");
let ham_plan = document.getElementById("ham_plan");
let ham_arrow = document.querySelectorAll("#ham_div > div >  div > h3 + h3 ");

let ham_append_plan = document.getElementById("ham_append_plan");
let ham_append_product = document.getElementById("ham_append_product");
let count_product_4 = 0;
let count_plan_5 = 0;

ham_product.onclick = () => {
  if (count_product_4 % 2 == 0) {
    ham_append_product.innerHTML = productAppend();
    ham_arrow[0].innerHTML = `<i class = "fa-solid fa-angle-up"></i>`;
    count_product_4++;
  } else {
    ham_append_product.innerHTML = null;
    ham_arrow[0].innerHTML = `<i class = "fa-solid fa-angle-down"></i>`;
    count_product_4++;
  }
};
ham_plan.onclick = () => {
  if (count_plan_5 % 2 == 0) {
    ham_append_plan.innerHTML = planAppend();
    ham_arrow[1].innerHTML = `<i class = "fa-solid fa-angle-up"></i>`;
    count_plan_5++;
  } else {
    ham_append_plan.innerHTML = null;
    ham_arrow[1].innerHTML = `<i class = "fa-solid fa-angle-down"></i>`;
    count_plan_5++;
  }
};

let signAndLoginButton = document.querySelectorAll("#navbar_button > button");

signAndLoginButton[0].onclick = () => {
  window.location.href = "./adminsigininpage.html";
  let obj1 = {
    login: false,
  };
  localStorage.setItem("login-tf", JSON.stringify(obj1));
};
signAndLoginButton[1].onclick = () => {
  let obj1 = {
    login: false,
  };
  localStorage.setItem("login-tf", JSON.stringify(obj1));
  window.location.href = "./adminloginpage.html";
};
let divappendbutton = document.getElementById("navbar_button");
let x = JSON.parse(localStorage.getItem("login-tf")) || undefined;

let divappend = document.querySelectorAll(".butt");
let appendbutton = document.createElement("button");
let login_data = JSON.parse(localStorage.getItem("login-details")) || undefined;
let logindiv = document.getElementById("admin-login");
let taglogindiv = document.querySelectorAll(".admin_login_details");
console.log(taglogindiv[0].innerHTML);
console.log(x);
console.log(login_data);

if (x != undefined && x.login == true) {
  divappend[0].style.display = "none";
  divappend[1].style.display = "none";
  if (login_data != undefined) {
    appendbutton.innerText = login_data.username;
    appendbutton.style.backgroundColor = "#00BF6F";
    divappendbutton.append(appendbutton);
    taglogindiv[0].innerText = login_data.email;
    // taglogindiv[0].style.color = "blue";
    taglogindiv[1].innerText = login_data.username;
    // taglogindiv[1].style.color = "blue";
    taglogindiv[2].innerText = login_data.number;
    // taglogindiv[2].style.color = "blue";
  }
}

logindiv.style.display = "none";
let countappend_button = 0;
appendbutton.onclick = () => {
  if (countappend_button % 2 == 0) {
    logindiv.style.display = "block";
    countappend_button++;
  } else {
    logindiv.style.display = "none";
    countappend_button++;
  }
};
let logoutbutton = document.querySelector("#admin-login > button");
logoutbutton.onclick = () => {
  logindiv.style.display = "none";
  appendbutton.style.display = "none";
  divappend[0].style.display = "inline";
  divappend[1].style.display = "inline";
  // divappendbutton.style.display="flex"
  let obj1 = {
    login: false,
  };
  localStorage.setItem("login-tf", JSON.stringify(obj1));
};
console.log(logoutbutton.innerText);

//  divappend.style.display="none"
