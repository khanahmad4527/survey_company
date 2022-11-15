console.log("satyam");

// divappend.append(buttons)

// but[1].display="none"

async function getdata(obj) {
  let get = await fetch(` http://localhost:3000/adminsignin`);

  let data = await get.json();
  console.log("data:-", data);
  let flag = false;
  let x;
  for (let a = 0; a < data.length; a++) {
    if (data[a].username == obj.username && data[a].password == obj.password) {
      flag = true;

      // console.log(data[a])
      x = data[a];
      break;
    }
  }
  if (flag == false) {
    alert("Wrong credential");
  } else {
    console.log(x);
    console.log("YES");
    alert("Login Sucessfull");
    localStorage.setItem("login-details", JSON.stringify(x));
    window.location.href = "./adminTemplate.html";
    let obj1 = {
      login: true,
    };
    localStorage.setItem("login-tf", JSON.stringify(obj1));
  }

  //()
}

let button = document.querySelector("button");
button.onclick = () => {
  let obj = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  if (obj.username == "" || obj.password == "") {
    alert("Fill all the Credential");
  } else {
    getdata(obj);
  }
};
