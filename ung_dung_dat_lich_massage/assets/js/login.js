let check_form_login;
let local_user = JSON.parse(localStorage.getItem("users")) || [];

let error_email_log_in = document.querySelector("#error_email_log_in");

let error_password_log_in = document.querySelector("#error_password_log_in");

let email_input = document.querySelector("#email-input");

let password_input = document.querySelector("#password-input");

let form_log_in = document.querySelector("#form-login");

email_input.addEventListener("input", function () {
  if (!email_input.value) {
    error_email_log_in.textContent = "Không được bỏ trống Email !!!";
    error_email_log_in.style.color = "red";
    check_form_login='on'
  } else if (!email_input.value.includes("@gmail.com")) {
    error_email_log_in.textContent = "Email phải có '@gmail.com'";
    error_email_log_in.style.color = "red";
        check_form_login = "on";
  } else {
    error_email_log_in.textContent = "";
        check_form_login = "off";
  }
});

password_input.addEventListener("input", function () {
  if (!password_input.value) {
    error_password_log_in.textContent = "Không được bỏ trống Mật khẩu !!!";
    error_password_log_in.style.color = "red";

  } else if (password_input.value.length < 8) {
    error_password_log_in.textContent = "Mật khẩu phải có ít nhất 8 kí tự";
    error_password_log_in.style.color = "red";

  } else {
    error_password_log_in.textContent = "";


  }
});

//thêm sự kiện cho form-login
form_log_in.addEventListener("submit", function (event) {
  event.preventDefault();
  //validate du lieu

  //lay dulieu từ local
  let local_user = JSON.parse(localStorage.getItem("users")) || [];

  //tìm dữ liệu trên loccal có tồn tại fioongs với người dùng nhập vào ko
  let find_user = local_user.find(
    (user) =>
      email_input.value === user.userEmail &&
      password_input.value === user.userPassword
  );
  if (!find_user) {
    alert("Email hoặc mật khẩu bạn không đúng!");
  } else {
    window.location.href = "../../pages/home/home.html";
  }
  //hiển thị thông báo cho người dung
});


