 

let register = async () => {
  try {
    let register_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("pass").value,
      gender: document.getElementById("gender").value,
      age: document.getElementById("age").value,
      
    };
    register_data = JSON.stringify(register_data);
    let res = await fetch(
      "http://localhost:5000/register",
      {
        method: "POST",
        body: register_data,
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    window.location.href="auth_login.html"
    // console.log("data", data);
    // goToLogin_page(data);
  } catch (err) {
    console.log("err", err);
    // let a = "hello";
  }
};

let Login = async () => {
  try {
    let login_data = {
      email: document.getElementById("login_username").value,
      password: document.getElementById("login_password").value,
    };
    let login_data_json = JSON.stringify(login_data);
    let res = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: login_data_json,
      headers: {
        "content-Type": "application/json",
      },
    });
    let data2 = await res.json();
    window.location.href="index.html"
    // console.log("data", data2);
    
    // getUser(login_data.email, data.token);
  } catch (err) {
    console.log("err", err);
  }
};

// let getUser = async (email, token) => {
//   try {
//     let res = await fetch(
//       `https://localhost:5000/register`,
//       {
//         headers: {
//           "content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     let data3 = await res.json();
//     console.log("data", data3);
//     // SuccessAndGo(data, email);
//   } catch (err) {
//     console.log("err", err);
//   }
// };

// let SuccessAndGo = (data, email) => {
//   if (email === data.email) {
//     window.location.href = "index.html";
//   } else {
//     alert("Invalid email/Password");
//   }
// };

// html input action by click event
document.querySelector("#name").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#email").style.display = "block";
  }
});
//
document.querySelector("#email").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#pass").style.display = "block";
  }
});
//
document.querySelector("#pass").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#gender").style.display = "block";
  }
});
//
document.querySelector("#gender").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#age").style.display = "block";
  }
});
// //
// document.querySelector("#mobile").addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     document.querySelector("#description").style.display = "block";
//   }
// });

//
let goToLogin_page = (data) => {
  if (data.message) {
    alert("sign_In Succesful");
    window.location.href = "auth_login.html";
  }
};
