import { footer } from "../userComponents/userfooter.js";

let appendDiv = document.getElementById("user_append_footer");

appendDiv.innerHTML = footer();
let table = document.querySelectorAll("table");

let tablediv = document.querySelectorAll(
  "#user_plan_table > div > div > h2:last-child"
);
let count0 = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;

tablediv[0].onclick = () => {
  if (count0 % 2 == 0) {
    count0++;
    table[0].style.display = "block";
  } else {
    count0++;
    table[0].style.display = "none";
  }
};
tablediv[1].onclick = () => {
  if (count1 % 2 == 0) {
    count1++;
    table[1].style.display = "block";
  } else {
    count1++;
    table[1].style.display = "none";
  }
};
tablediv[2].onclick = () => {
  if (count2 % 2 == 0) {
    count2++;
    table[2].style.display = "block";
  } else {
    count2++;
    table[2].style.display = "none";
  }
};
tablediv[3].onclick = () => {
  if (count3 % 2 == 0) {
    count3++;
    table[3].style.display = "block";
  } else {
    count3++;
    table[3].style.display = "none";
  }
};

table[0];
table[1];
table[2];
table[3];

table[0].style.display = "none";
table[1].style.display = "none";
table[2].style.display = "none";
table[3].style.display = "none";

let all_expand_button = document.getElementById("user_plan_expand_all");

let expandcount = 0;
all_expand_button.onclick = () => {
  if (expandcount % 2 == 0) {
    expandcount++;
    all_expand_button.innerHTML = `Collapse all  <i class="fa-solid fa-square-caret-down"></i>`;
    console.log("shivam");
    table[0].style.display = "block";
    table[1].style.display = "block";
    table[2].style.display = "block";
    table[3].style.display = "block";
    tablediv[0].innerHTML = `<i class="fa-solid fa-square-caret-down"></i>`;
    tablediv[1].innerHTML = `<i class="fa-solid fa-square-caret-down"></i>`;
    tablediv[2].innerHTML = `<i class="fa-solid fa-square-caret-down"></i>`;
    tablediv[3].innerHTML = `<i class="fa-solid fa-square-caret-down"></i>`;
  } else {
    expandcount++;
    all_expand_button.innerHTML = `Expand all <i class="fa-solid fa-square-caret-right"></i>`;
    console.log("satyam");
    table[0].style.display = "none";
    table[1].style.display = "none";
    table[2].style.display = "none";
    table[3].style.display = "none";
    tablediv[3].innerHTML = `<i class="fa-solid fa-square-caret-right"></i>`;
    tablediv[2].innerHTML = `<i class="fa-solid fa-square-caret-right"></i>`;
    tablediv[1].innerHTML = `<i class="fa-solid fa-square-caret-right"></i>`;
    tablediv[0].innerHTML = `<i class="fa-solid fa-square-caret-right"></i>`;
  }
};
