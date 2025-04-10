let check_form_register;
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



let local_user = JSON.parse(localStorage.getItem("users")) || [];
// thêm sự kiện ô fullname-đắng kí
register_fullname_input.addEventListener("input", function () {
  if (register_fullname_input.value) {
    error_fullname_register.textContent = "";
    check_form_register = "on";
  } else {
    error_fullname_register.textContent = "Không được bỏ trống họ và tên !!!";
    error_fullname_register.style.color = "red";
    check_form_register = "off";
  }
});

// thêm sự kiện ô email-đắng kí
register_email_input.addEventListener("input", function () {
  if (!register_email_input.value) {
    error_email_register.textContent = "Không được bỏ trống Email !!!";
    error_email_register.style.color = "red";
    check_form_register = "off";
  } else if (!register_email_input.value.includes("@gmail.com")) {
    error_email_register.textContent = "Email phải có '@gmail.com'";
    error_email_register.style.color = "red";
    check_form_register = "off";
  } else {
    error_email_register.textContent = "";
    check_form_register = "on";
  }
});
// thêm sự kiện ô password-đắng kí
register_password_input.addEventListener("input", function () {
  if (!register_password_input.value) {
    error_password_register.textContent = "Không được bỏ trống Mật khẩu !!!";
    error_password_register.style.color = "red";
    check_form_register = "off";
  } else if (register_password_input.value.length < 8) {
    error_password_register.textContent = "Mật khẩu phải có ít nhất 8 kí tự";
    error_password_register.style.color = "red";
    check_form_register = "off";
  } else {
    error_password_register.textContent = "";
    check_form_register = "on";
  }
});
// thêm sự kiện ô confirm-đắng kí
register_password_confirm_input.addEventListener("input", function () {
  if (!register_password_confirm_input.value) {
    error_password_confirm_register.textContent =
      "Không được bỏ trống Xác nhận mật khẩu !!!";
    error_password_confirm_register.style.color = "red";
    check_form_register = "off";
  } else if (
    register_password_confirm_input.value !== register_password_input.value
  ) {
    error_password_confirm_register.textContent = "mật khẩu không trung khớp";
    error_password_confirm_register.style.color = "red";
    check_form_register = "off";
  } else {
    error_password_confirm_register.textContent = "";
    check_form_register = "on";
  }
});

// thêm sự kiện cho form-register
form_register.addEventListener("submit", function (event) {
  event.preventDefault();
  if (check_form_register === "on") {
    //ép các dữ liệu người dùng
    let user = {
      userId: Math.ceil(Math.random() * 1000000),
      userName: register_fullname_input.value,
      userEmail: register_email_input.value,
      userPassword: register_password_input.value,
    };
    local_user.push(user);
    localStorage.setItem("users", JSON.stringify(local_user));
    register_fullname_input.value = "";
    register_email_input.value = "";

    let userConfirm = confirm(
      "Bạn đã tạo tài khoản thành công. Bạn có chắc chắn muốn tiếp tục đăng nhập không?"
    );
    if (userConfirm) {
      window.location.href = "login.html";
    }
  } else if (check_form_register === "on") {
    alert("bạn chưa tạo tài khoản thành công");
  }
console()
});
