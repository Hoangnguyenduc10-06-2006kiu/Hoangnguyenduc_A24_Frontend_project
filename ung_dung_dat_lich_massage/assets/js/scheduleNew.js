let checkValidateFormSchedule = "off";
let classNameValue = document.querySelector("#class-name-value");

let traningDay = document.querySelector("#date");

let timeTraning = document.querySelector("#time");

let nameUserTraning = document.querySelector("#fullname");

let emailUserTraning = document.querySelector("#emailuser");
let errorClassSheduleNew = document.querySelector("#errorClassSheduleNew");

let errorDaySheduleNew = document.querySelector("#errorDaySheduleNew");

let errorTimeSheduleNew = document.querySelector("#errorTimeSheduleNew");
let errorNameSheduleNew = document.querySelector("#errorNameSheduleNew");
let errorEmailSheduleNew = document.querySelector("#errorEmailSheduleNew");
let closeFormScheduleNew = document.querySelector("#close-form-schedule-new");
let formSchedule = document.querySelector("#form-schedule");

let localBooking = JSON.parse(localStorage.getItem("booking")) || [];
let local_user = JSON.parse(localStorage.getItem("users")) || [];

formSchedule.addEventListener("submit", function (e) {
  e.preventDefault();
  //validate class
  if (classNameValue.value === "null" || classNameValue.value === "") {
    errorClassSheduleNew.textContent = "Không được bỏ trống !!!";
    errorClassSheduleNew.style.color = "red";
    checkValidateFormSchedule = "off";
  } else {
    errorClassSheduleNew.textContent = "";
    checkValidateFormSchedule = "on";
  }
  //validate day
  if (traningDay.value === "null" || traningDay.value === "") {
    errorDaySheduleNew.textContent = "Không được bỏ trống !!!";
    errorDaySheduleNew.style.color = "red";
    checkValidateFormSchedule = "off";
  } else {
    errorDaySheduleNew.textContent = "";
    checkValidateFormSchedule = "on";
  }
  //validat time
  if (timeTraning.value === "null" || timeTraning.value === "") {
    errorTimeSheduleNew.textContent = "Không được bỏ trống !!!";
    errorTimeSheduleNew.style.color = "red";
    checkValidateFormSchedule = "off";
  } else {
    errorTimeSheduleNew.textContent = "";
    checkValidateFormSchedule = "on";
  }
  //validate fullname
  if (nameUserTraning.value === "null" || nameUserTraning.value === "") {
    errorNameSheduleNew.textContent = "Không được bỏ trống !!!";
    errorNameSheduleNew.style.color = "red";
    checkValidateFormSchedule = "off";
  } else {
    errorNameSheduleNew.textContent = "";
    checkValidateFormSchedule = "on";
  }
  //validate email
  if (emailUserTraning.value === "null" || emailUserTraning.value === "") {
    errorEmailSheduleNew.textContent = "Không được bỏ trống !!!";
    errorEmailSheduleNew.style.color = "red";
    checkValidateFormSchedule = "off";
  } else {
    errorEmailSheduleNew.textContent = "";
    checkValidateFormSchedule = "on";
  }

  //validate locals
  if (checkValidateFormSchedule === "on") {
    let findUserId = local_user.find(
      (user) =>
        emailUserTraning.value === user.userEmail &&
        nameUserTraning.value === user.userName
    );
    if (!findUserId) {
      alert("khongo tìm thấy người này");
    }
    let listBookingUser = {
      idBooking: Math.ceil(Math.random() * 100000),
      userId: findUserId.userId, // ID người đặt
      nameUser:nameUserTraning.value,
      emailUser:emailUserTraning.value,
      className: classNameValue.value,
      classId: "null", // ID lớp học
      date: traningDay.value, // Ngày đặt (YYYY-MM-DD)
      time: timeTraning.value, // Giờ đặt (HH:mm)
      status: "pending", // Trạng thái (pending/approved/cancelled)
      createdAt: "null", // Ngày tạo lịch
      updatedAt: "null", // Ngày cập nhật lịch
    };
    localBooking.push(listBookingUser);
    localStorage.setItem("booking", JSON.stringify(localBooking));
    console.log("findUserId", findUserId);

    alert("đặt lịch  thành công");
    window.location.href="../../pages/booking/schedule.html"
  } else {
    alert("đặt lịch không thành công");
  }
});
