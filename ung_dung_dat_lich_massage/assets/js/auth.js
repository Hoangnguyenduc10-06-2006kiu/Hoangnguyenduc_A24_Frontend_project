let check_Email_form_register = "off";
let check_Fullname_form_register = "off";
let check_Password_form_register = "off";
let check_Confirm_Password_form_register = "off";
let form_register = document.querySelector("#form-register");

let register_fullname_input = document.querySelector(
  "#register-fullname-input"
);

let register_email_input = document.querySelector("#register-email-input");

let register_password_input = document.querySelector(
  "#register-password-input"
);

let register_password_confirm_input = document.querySelector(
  "#register-password-confirm-input"
);

let error_fullname_register = document.querySelector(
  "#error-fullname-register"
);

let error_email_register = document.querySelector("#error-email-register");
let error_password_register = document.querySelector(
  "#error_password_register"
);

let error_password_confirm_register = document.querySelector(
  "#error_password_confirm_register"
);
let modalNewUser = new bootstrap.Modal(document.querySelector("#modalNewUser"));
let nextLogin = document.querySelector("#nextLogin");

let local_user = JSON.parse(localStorage.getItem("users")) || [];

// thêm sự kiện ô fullname-đắng kí
register_fullname_input.addEventListener("input", function () {
  if (register_fullname_input.value) {
    error_fullname_register.textContent = "";
    check_Fullname_form_register = "on";
  } else {
    error_fullname_register.textContent = "Không được bỏ trống họ và tên !!!";
    error_fullname_register.style.color = "red";
    check_Fullname_form_register = "off";
  }
});

// thêm sự kiện ô email-đắng kí
register_email_input.addEventListener("input", function () {
  if (!register_email_input.value) {
    error_email_register.textContent = "Không được bỏ trống Email !!!";
    error_email_register.style.color = "red";
    check_Email_form_register = "off";
  } else if (!register_email_input.value.includes("@gmail.com")) {
    error_email_register.textContent = "Email phải có '@gmail.com'";
    error_email_register.style.color = "red";
    check_Email_form_register = "off";
  } else {
    error_email_register.textContent = "";
    check_Email_form_register = "on";
  }
});
// thêm sự kiện ô password-đắng kí
register_password_input.addEventListener("input", function () {
  if (!register_password_input.value) {
    error_password_register.textContent = "Không được bỏ trống Mật khẩu !!!";
    error_password_register.style.color = "red";
    check_Password_form_register = "off";
  } else if (register_password_input.value.length < 8) {
    error_password_register.textContent = "Mật khẩu phải có ít nhất 8 kí tự";
    error_password_register.style.color = "red";
    check_Password_form_register = "off";
  } else {
    error_password_register.textContent = "";
    check_Password_form_register = "on";
  }
});
// thêm sự kiện ô confirm-đắng kí
register_password_confirm_input.addEventListener("input", function () {
  if (!register_password_confirm_input.value) {
    error_password_confirm_register.textContent =
      "Không được bỏ trống Xác nhận mật khẩu !!!";
    error_password_confirm_register.style.color = "red";
    check_Confirm_Password_form_register = "off";
  } else if (
    register_password_confirm_input.value !== register_password_input.value
  ) {
    error_password_confirm_register.textContent = "mật khẩu không trung khớp";
    error_password_confirm_register.style.color = "red";
    check_Confirm_Password_form_register = "off";
  } else {
    error_password_confirm_register.textContent = "";
    check_Confirm_Password_form_register = "on";
  }
});

// thêm sự kiện cho form-register
form_register.addEventListener("submit", function (event) {
  event.preventDefault();
  if (local_user.length === 0) {
    let admin = {
      userId: Math.ceil(Math.random() * 1000000),
      userName: "admin01",
      userEmail: "admin@gmail.com",
      phone: "", // Số điện thoại
      userPassword: "0000000000",
      role: "admin", // Vai trò (admin/user)
      createdAt: new Date(),
    };
    local_user.push(admin);
    localStorage.setItem("users", JSON.stringify(local_user));
  }

  if (
    check_Confirm_Password_form_register === "on" &&
    check_Password_form_register === "on" &&
    check_Fullname_form_register === "on" &&
    check_Email_form_register === "on"
  ) {
    //ép các dữ liệu người dùng
    let user = {
      userId: Math.ceil(Math.random() * 1000000),
      userName: register_fullname_input.value,
      userEmail: register_email_input.value,
      phone: "", // Số điện thoại
      userPassword: register_password_input.value,
      role: "User", // Vai trò (admin/user)
      createdAt: new Date(),
    };
    local_user.push(user);
    localStorage.setItem("users", JSON.stringify(local_user));
    register_fullname_input.value = "";
    register_email_input.value = "";
    register_password_input.value = "";
    register_password_confirm_input.value = "";

    modalNewUser.show();
    console.log(modalNewUser);

    check_Email_form_register = "off";
    check_Fullname_form_register = "off";
    check_Password_form_register = "off";
    check_Confirm_Password_form_register = "off";
    nextLogin.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  } else {
    check_Email_form_register = "off";
    check_Fullname_form_register = "off";
    check_Password_form_register = "off";
    check_Confirm_Password_form_register = "off";
  }
});
