import { footer } from "../userComponents/userfooter.js";

let appendDiv = document.getElementById("user_append_footer");

appendDiv.innerHTML = footer();

/*******************  this gets the id from localstorage ****************/

let user_survey_template_id = localStorage.getItem("user_survey_template_id");

/*******************  this function fetch the data ****************/

const get_user_survey_template_form = async () => {
  try {
    let responce = await fetch(
      `http://localhost:3000/template/${user_survey_template_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let { form, title } = await responce.json();

    appendTitle(title);

    appendQuestion(form);
  } catch (err) {
    alert(err);
  }
};

/*****************          here we are appending the question in preview div      *****************/

let user_survey_form_preview = document.getElementById(
  "user_survey_form_preview"
);

/*****************          here we are appending the title in preview div      *****************/

const appendTitle = (title) => {
  let user_survey_top_title_h1 = document.getElementById(
    "user_survey_top_title_h1"
  );

  user_survey_top_title_h1.textContent = title;

  let template_title = document.createElement("h1");

  template_title.id = "user_survey_form_preview_id";

  template_title.textContent = title;

  user_survey_form_preview.append(template_title);
};

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

      user_survey_form_preview.append(mcq_div);
    }

    if (el.questionType == "checkbox") {
      let checkbox_div = document.createElement("div");

      let checkbox_para = document.createElement("p");

      checkbox_para.textContent = `${i + 1}. ${el.question}`;

      checkbox_div.append(checkbox_para);

      appendCheckbox(el.answer.length, el.answer, checkbox_div, i);

      user_survey_form_preview.append(checkbox_div);
    }

    if (el.questionType == "rating") {
      let rating_div = document.createElement("div");

      let rating_para = document.createElement("p");

      rating_para.textContent = `${i + 1}. ${el.question}`;

      rating_div.append(rating_para);

      appendRating(el.answer.length, rating_div, i);

      user_survey_form_preview.append(rating_div);
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

      user_survey_form_preview.append(textbox_div);
    }
  });

  /*********  here we are appending the question length ****************/

  let user_survey_mid_green_question_id = document.getElementById(
    "user_survey_mid_green_question_id"
  );

  user_survey_mid_green_question_id.textContent = questionsData.length;

  /*********  there we are appending submit button which we can see in the end of the form ****************/

  let user_survey_form_preview_submitBtn_div = document.createElement("div");

  user_survey_form_preview_submitBtn_div.id =
    "user_survey_form_preview_submitBtn";

  let user_survey_form_preview_submitBtn = document.createElement("button");

  user_survey_form_preview_submitBtn.textContent = "Done";

  user_survey_form_preview_submitBtn_div.append(
    user_survey_form_preview_submitBtn
  );

  user_survey_form_preview.append(user_survey_form_preview_submitBtn_div);
};

/*********  this function call the respective function whenever the page load ****************/

window.onload = () => {
  get_user_survey_template_form();
};
