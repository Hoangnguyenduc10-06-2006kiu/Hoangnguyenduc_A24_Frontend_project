let localBooking = JSON.parse(localStorage.getItem("booking")) || [];
// phần gọi phần tử
let newNameEdit=document.getElementById("edit-name") ;
let newEmailEdit=document.getElementById ("edit-email");
let newTimeEdit=document.getElementById("edit-time");
let newDateEdit=document.getElementById("edit-date");
let newClassEdit=document.getElementById("edit-class")
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

     <!-- Nút sửa -->
<button type="button" class="edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="openEditModal(${index})">
  Sửa
</button>

<!-- Modal sửa -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Chỉnh sửa thông tin</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
      </div>
      <div class="modal-body">

        <form id="editForm">
          <div class="mb-3">
            <label class="form-label">Họ tên</label>
            <input placeholder="${user.nameUser}" type="text" class="form-control" id="edit-name"
            placeholder ="klsdlasdl" >
          </div>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input placeholder="${user.emailUser}" type="email" class="form-control" id="edit-email">
          </div>

          <div class="mb-3">
            <label class="form-label">Khung giờ</label>
            <input placeholder="${user.time}" type="email" class="form-control" id="edit-time">
          </div>

          <div class="mb-3">
            <label class="form-label">Ngày tập</label>
            <input placeholder="${user.date}" type="email" class="form-control" id="edit-date">
          </div>

          <div class="mb-3">
            <label class="form-label">Lớp học</label>
            <select class="form-select" id="edit-class">
              <option>Gym</option>
              <option>Yoga</option>
              <option>Zumba</option>
            </select>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hoàn tác</button>
        <button data-bs-dismiss="modal" type="button" class="btn btn-danger" onclick="handleConfirmEdit(${index})">Xác nhận</button>
      </div>
    </div>
  </div>
</div>
      
<!-- Button trigger modal -->
<button type="button" class="delete" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Xóa
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Xác nhận xóa lịch tập</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Bạn có chắc chắn xóa mục này ?
      </div>
      <div class="modal-footer">
        <button  type="button" class="btn btn-secondary 	" data-bs-dismiss="modal">không</button>
         <button onclick=handledelette(${index}) type="button" class="  btn btn-secondary btn-danger " data-bs-dismiss="modal">có</button>
      </div>
    </div>
  </div>
</div>      
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

// //phần gọi hàm
 renderListUserBooking();
