let localBooking = JSON.parse(localStorage.getItem("booking")) || [];
// phần gọi phần tử
let btn_shedule_new = document.querySelector("#btn-shedule-new");
let tbodyListUserBooking = document.querySelector("#tbodyListUserBooking");
// phần gắn sự kiện
btn_shedule_new.addEventListener("click", function () {
  window.location.href = "../../pages/booking/scheduleNew.html";
});

//phần  hàm
function renderListUserBooking() {
  let listBooking = localBooking.map((user, index) => {
    return ` <tr>
    <td>${user.className}</td>
    <td>${user.date}</td>
    <td>${user.time}</td>
    <td>${user.nameUser}</td>
    <td>${user.emailUser}</td>
    <td>
      <button >Sửa</button>
      <button onclick=handledelette(${index})>Xóa</button>
    </td>
    </tr>`;
  });

  let converArraytoString = listBooking.join("");
  tbodyListUserBooking.innerHTML = converArraytoString;
}
function handledelette(index) {
  //xoa con vc khoi mang
  localBooking.splice(index, 1);

  //luu thong tin local
  localStorage.setItem("booking", JSON.stringify(localBooking));
  //render lai
  renderListUserBooking();
}
//phần gọi hàm
renderListUserBooking();
