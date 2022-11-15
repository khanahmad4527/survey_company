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



/*******************  this stores all the question in localstorage ****************/

let questionsData = JSON.parse(localStorage.getItem("questionsData")) || [];

/*******************  this stores the template on the local server ****************/

let admin_create_add_template_button = document.getElementById(
  "admin_create_add_template_button"
);

document.getElementById("admin_create_template_survey_type").onchange = () => {
  localStorage.setItem(
    "templateType",
    document.getElementById("admin_create_template_survey_type").value
  );
};

let admin_create_template_form = document.getElementById(
  "admin_create_template_form"
);

admin_create_template_form.onsubmit = async (e) => {
  try {
    e.preventDefault();
    let admin_create_template_id = document.getElementById(
      "admin_create_template_id"
    ).value;

    localStorage.setItem("id", admin_create_template_id);

    let admin_create_template_image_url_value = document.getElementById(
      "admin_create_template_image_url"
    ).value;

    let admin_create_template_image_name_value = document.getElementById(
      "admin_create_template_image_name"
    ).value;

    localStorage.setItem(
      "template_title",
      admin_create_template_image_name_value
    );

    let obj = {
      id: admin_create_template_id.trim(),
      image: admin_create_template_image_url_value.trim(),
      title: admin_create_template_image_name_value.trim(),
      type: localStorage.getItem("templateType"),
    };

    //console.log(obj);

    let responce = await fetch(`http://localhost:3000/custom`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    admin_create_template_form.reset();
  } catch (err) {
    alert(err);
  }
};

/*******************  this function creates the mcq option ****************/

let admin_create_template_mcq_quantity = document.getElementById(
  "admin_create_template_mcq_quantity"
);

admin_create_template_mcq_quantity.oninput = () => {
  let admin_create_template_mcq_quantity_div = document.getElementById(
    "admin_create_template_mcq_quantity_div"
  );

  admin_create_template_mcq_quantity_div.innerHTML = null;

  let admin_create_template_mcq_quantity_value = document.getElementById(
    "admin_create_template_mcq_quantity"
  ).value;

  for (let i = 0; i < admin_create_template_mcq_quantity_value; i++) {
    let mcq = document.createElement("input");
    mcq.type = "text";
    mcq.required = true;
    mcq.placeholder = `Enter the mcq question ${i + 1}`;
    mcq.id = `admin_create_template_mcq_${i + 1}`;
    admin_create_template_mcq_quantity_div.append(mcq);
  }
};

/*******************  this function stores the mcq question data ****************/

let admin_create_template_mcq_button = document.getElementById(
  "admin_create_template_mcq_button"
);

let admin_create_template_mcq_form = document.getElementById(
  "admin_create_template_mcq_form"
);

admin_create_template_mcq_form.onsubmit = (e) => {
  e.preventDefault();
  let admin_create_template_mcq_quantity_value = document.getElementById(
    "admin_create_template_mcq_quantity"
  ).value;

  let admin_create_template_mcq_question = document.getElementById(
    "admin_create_template_mcq_question"
  ).value;

  let arr = [];

  for (let i = 0; i < admin_create_template_mcq_quantity_value; i++) {
    let id = `admin_create_template_mcq_${i + 1}`;
    arr.push(document.getElementById(id).value.trim());
  }

  let obj = {
    questionType: "mcq",
    question: admin_create_template_mcq_question.trim(),
    answer: arr,
  };

  questionsData.push(obj);

  localStorage.setItem("questionsData", JSON.stringify(questionsData));
  admin_create_template_mcq_form.reset();
  window.location.reload();
};

/*******************  this function creates the checkbox option ****************/

let admin_create_template_checkbox_quantity = document.getElementById(
  "admin_create_template_checkbox_quantity"
);

admin_create_template_checkbox_quantity.oninput = () => {
  let admin_create_template_checkbox_quantity_div = document.getElementById(
    "admin_create_template_checkbox_quantity_div"
  );

  admin_create_template_checkbox_quantity_div.innerHTML = null;

  let admin_create_template_checkbox_quantity_value = document.getElementById(
    "admin_create_template_checkbox_quantity"
  ).value;

  for (let i = 0; i < admin_create_template_checkbox_quantity_value; i++) {
    let checkbox = document.createElement("input");
    checkbox.type = "text";
    checkbox.placeholder = `Enter the checkbox question ${i + 1}`;
    checkbox.id = `admin_create_template_checkbox_${i + 1}`;
    admin_create_template_checkbox_quantity_div.append(checkbox);
  }
};

/*******************  this function stores the checkbox question data ****************/

let admin_create_template_checkbox_button = document.getElementById(
  "admin_create_template_checkbox_button"
);

let admin_create_template_checkbox_form = document.getElementById(
  "admin_create_template_checkbox_form"
);

admin_create_template_checkbox_form.onsubmit = (e) => {
  e.preventDefault();
  let admin_create_template_checkbox_quantity_value = document.getElementById(
    "admin_create_template_checkbox_quantity"
  ).value;

  let admin_create_template_checkbox_question = document.getElementById(
    "admin_create_template_checkbox_question"
  ).value;

  let arr = [];

  for (let i = 0; i < admin_create_template_checkbox_quantity_value; i++) {
    let id = `admin_create_template_checkbox_${i + 1}`;
    arr.push(document.getElementById(id).value.trim());
  }

  let obj = {
    questionType: "checkbox",
    question: admin_create_template_checkbox_question.trim(),
    answer: arr,
  };

  questionsData.push(obj);

  localStorage.setItem("questionsData", JSON.stringify(questionsData));
  admin_create_template_checkbox_form.reset();
  window.location.reload();
};

/*******************  this function creates the rating option ****************/

let admin_create_template_rating_quantity = document.getElementById(
  "admin_create_template_rating_quantity"
);

admin_create_template_rating_quantity.oninput = () => {
  let admin_create_template_rating_quantity_div = document.getElementById(
    "admin_create_template_rating_quantity_div"
  );

  admin_create_template_rating_quantity_div.innerHTML = null;

  let admin_create_template_rating_quantity_value = document.getElementById(
    "admin_create_template_rating_quantity"
  ).value;

  for (let i = 0; i < admin_create_template_rating_quantity_value; i++) {
    let btn = document.createElement("button");
    btn.textContent = `${i + 1}`;
    btn.id = `admin_create_template_button_${i + 1}`;
    admin_create_template_rating_quantity_div.append(btn);
  }
};

/*******************  this function stores the rating question data ****************/

let admin_create_template_rating_button = document.getElementById(
  "admin_create_template_rating_button"
);

let admin_create_template_rating_form = document.getElementById(
  "admin_create_template_rating_form"
);

admin_create_template_rating_form.onsubmit = (e) => {
  e.preventDefault();
  let admin_create_template_rating_quantity_value = document.getElementById(
    "admin_create_template_rating_quantity"
  ).value;

  let admin_create_template_rating_question = document.getElementById(
    "admin_create_template_rating_question"
  ).value;

  let arr = [];

  for (let i = 0; i < admin_create_template_rating_quantity_value; i++) {
    let id = `admin_create_template_button_${i + 1}`;
    arr.push(i + 1);
  }

  let obj = {
    questionType: "rating",
    question: admin_create_template_rating_question.trim(),
    answer: arr,
  };

  questionsData.push(obj);

  localStorage.setItem("questionsData", JSON.stringify(questionsData));
  admin_create_template_rating_form.reset();
  window.location.reload();
};

/*******************  this function stores the textbox question and data ****************/

let admin_create_template_textbox_button = document.getElementById(
  "admin_create_template_textbox_button"
);

let admin_create_template_textbox_form = document.getElementById(
  "admin_create_template_textbox_form"
);

admin_create_template_textbox_form.onsubmit = (e) => {
  e.preventDefault();
  let admin_create_template_textbox_question = document.getElementById(
    "admin_create_template_textbox_question"
  ).value;

  let obj = {
    questionType: "textbox",
    question: admin_create_template_textbox_question.trim(),
    answer: true,
  };

  questionsData.push(obj);

  localStorage.setItem("questionsData", JSON.stringify(questionsData));
  admin_create_template_textbox_form.reset();
  window.location.reload();
};

/*******************  this function adds the question on the server ****************/

let admin_create_template_addquestiontoserver_button = document.getElementById(
  "admin_create_template_addquestiontoserver_button"
);

admin_create_template_addquestiontoserver_button.onclick = async () => {
  try {
    if (questionsData.length == 0) {
      alert("Please add question");
    } else {
      let admin_create_template_id = localStorage.getItem("id");

      let obj = {
        form: questionsData,
      };

      let responce = await fetch(
        `http://localhost:3000/custom/${admin_create_template_id}`,
        {
          method: "PATCH",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.removeItem("id");
      localStorage.removeItem("questionsData");
      localStorage.removeItem("templateType");
      window.location.reload();
    }
  } catch (err) {
    alert(err);
  }
};

/*****************          this catch the question data and preview it       *****************/

let total_question = document.getElementById(
  "admin_create_template_preview_topsection_questioncount_span"
);

total_question.textContent = questionsData.length;

let survey_type = document.getElementById(
  "admin_create_template_preview_topsection_category_span"
);

survey_type.textContent = localStorage.getItem("templateType");

let admin_create_template_preview_botsection = document.getElementById(
  "admin_create_template_preview_botsection"
);

let template_title = document.createElement("h2");

template_title.style.color = "#00bf6f";

template_title.style.textTransform = "capitalize";

template_title.textContent = localStorage.getItem("template_title");

admin_create_template_preview_botsection.append(template_title);

/*****************          here we are appending the question in preview div      *****************/

const appendQuestion = (questionsData) => {
  /*****************    here we have to create individual functions for radio, checkbox etc   *****************/

  /**********************  function to append radio *********************************/

  const appendRadio = (l, arrData, mcq_div, id) => {
    let mcq_option_div = document.createElement("div");

    mcq_option_div.className = "mcq";

    for (let i = 0; i < l; i++) {
      let mcq_option_radio_label = document.createElement("label");

      mcq_option_radio_label.className = `mcqlabel${id}`;

      mcq_option_radio_label.setAttribute("for", `mcq${id}${i}`);

      let mcq_option_radio = document.createElement("input");

      mcq_option_radio.type = "radio";

      mcq_option_radio.name = `mcq${id}`;

      mcq_option_radio.id = `mcq${id}${i}`;

      mcq_option_radio_label.append(mcq_option_radio);

      mcq_option_radio_label.append(arrData[i]);

      mcq_option_div.append(mcq_option_radio_label);
    }
    mcq_div.append(mcq_option_div);
  };

  /**********************  function to append checkbox *********************************/

  const appendCheckbox = (l, arrData, checkbox_div, id) => {
    let checkbox_option_div = document.createElement("div");

    checkbox_option_div.className = "checkbox";

    for (let i = 0; i < l; i++) {
      let checkbox_option_checkbox_label = document.createElement("label");

      checkbox_option_checkbox_label.className = `checkboxlabel${id}`;

      checkbox_option_checkbox_label.setAttribute("for", `checkbox${id}${i}`);

      let checkbox_option_checkbox = document.createElement("input");

      checkbox_option_checkbox.type = "checkbox";

      checkbox_option_checkbox.name = `checkbox${id}`;

      checkbox_option_checkbox.id = `checkbox${id}${i}`;

      checkbox_option_checkbox_label.append(checkbox_option_checkbox);

      checkbox_option_checkbox_label.append(arrData[i]);

      checkbox_option_div.append(checkbox_option_checkbox_label);
    }
    checkbox_div.append(checkbox_option_div);
  };

  /**********************  function to append rating *********************************/

  const appendRating = (l, rating_div, id) => {
    let rating_option_div = document.createElement("div");

    rating_option_div.className = "rating";

    let rating_option_div_english = document.createElement("div");

    rating_option_div_english.className = "ratingEnglish";

    let rating_option_div_english_p1 = document.createElement("p");

    rating_option_div_english_p1.textContent = "NOT AT ALL LIKELY";

    let rating_option_div_english_p2 = document.createElement("p");

    rating_option_div_english_p2.textContent = "EXTREMELY LIKELY";

    rating_option_div_english.append(
      rating_option_div_english_p1,
      rating_option_div_english_p2
    );

    let rating_option_div_button = document.createElement("div");

    rating_option_div_button.className = "ratingBtn";

    rating_option_div.append(
      rating_option_div_english,
      rating_option_div_button
    );

    for (let i = 1; i <= l; i++) {
      let rating_option_rating_button = document.createElement("button");

      rating_option_rating_button.textContent = i;

      rating_option_rating_button.id = `ratigBtn${id}${i}`;

      rating_option_div_button.append(rating_option_rating_button);
    }
    rating_div.append(rating_option_div);
  };

  /*****************         appending starts here      *****************/

  questionsData.forEach((el, i) => {
    if (el.questionType == "mcq") {
      let mcq_div = document.createElement("div");

      let mcq_para = document.createElement("p");

      mcq_para.textContent = `${i + 1}. ${el.question}`;

      mcq_div.append(mcq_para);

      appendRadio(el.answer.length, el.answer, mcq_div, i);

      admin_create_template_preview_botsection.append(mcq_div);
    }

    if (el.questionType == "checkbox") {
      let checkbox_div = document.createElement("div");

      let checkbox_para = document.createElement("p");

      checkbox_para.textContent = `${i + 1}. ${el.question}`;

      checkbox_div.append(checkbox_para);

      appendCheckbox(el.answer.length, el.answer, checkbox_div, i);

      admin_create_template_preview_botsection.append(checkbox_div);
    }

    if (el.questionType == "rating") {
      let rating_div = document.createElement("div");

      let rating_para = document.createElement("p");

      rating_para.textContent = `${i + 1}. ${el.question}`;

      rating_div.append(rating_para);

      appendRating(el.answer.length, rating_div, i);

      admin_create_template_preview_botsection.append(rating_div);
    }

    /**************    for textbox we don't need to call textbox function like we do for radio and checkbox   *****************/

    if (el.questionType == "textbox") {
      let textbox_div = document.createElement("div");

      let textbox_para = document.createElement("label");

      textbox_para.className = "textbox";

      textbox_para.setAttribute("for", `textbox${i}`);

      let textbox_textarea = document.createElement("textarea");

      textbox_textarea.className = "textbox_textarea";

      textbox_textarea.id = `textbox${i}`;

      textbox_para.append(`${i + 1}. ${el.question}`, textbox_textarea);

      textbox_div.append(textbox_para);

      admin_create_template_preview_botsection.append(textbox_div);
    }
  });
};

appendQuestion(questionsData);
