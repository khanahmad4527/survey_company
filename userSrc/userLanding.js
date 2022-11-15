import { footer } from "../userComponents/userfooter.js";

let appendDiv = document.getElementById("user_append_footer");

appendDiv.innerHTML = footer();

let advert = document.querySelectorAll(
  "#user_choose_plan>#plandivs>div>button"
);

console.log('advert:', advert)

for (let a = 0; a < advert.length; a++) {
  advert[a].onclick = () => {
    window.location.href = "../userHTML/userPlan.html";
  };
}

let formDiv = document.getElementById("user_fetch_forms");

const appending = (read) => {
  formDiv.innerHTML = "";

  read.forEach((elem, i) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem.image;

    div.append(img);
    div.onclick = () => {
      window.location.href = "../userHTML/userSecond.html";
      localStorage.setItem("user_survey_template_id", elem.id);
    };
    formDiv.append(div);
  });
};

const fetchingFun = async () => {
  let request = await fetch("http://localhost:3000/template");

  let response = await request.json();

  appending(response);
};

fetchingFun();

let customer = document.getElementById("customer");
let education = document.getElementById("education");
let events = document.getElementById("events");
let employees = document.getElementById("employees");

customer.onclick = async () => {
  let value = customer.value;
  let request = await fetch("http://localhost:3000/template");

  let response = await request.json();

  let arr = response.filter((elem) => {
    return elem.type == value;
  });

  appending(arr);
  formDiv.style.overflow = "hidden";
};
education.onclick = async () => {
  let value = education.value;
  let request = await fetch("http://localhost:3000/template");

  let response = await request.json();

  let arr = response.filter((elem) => {
    return elem.type == value;
  });
  appending(arr);
  formDiv.style.overflow = "hidden";
};
events.onclick = async () => {
  let value = events.value;
  let request = await fetch("http://localhost:3000/template");

  let response = await request.json();

  let arr = response.filter((elem) => {
    return elem.type == value;
  });
  appending(arr);
  formDiv.style.overflow = "hidden";
};
employees.onclick = async () => {
  let value = employees.value;
  let request = await fetch("http://localhost:3000/template");

  let response = await request.json();

  let arr = response.filter((elem) => {
    return elem.type == value;
  });
  appending(arr);
  formDiv.style.overflow = "hidden";
};
