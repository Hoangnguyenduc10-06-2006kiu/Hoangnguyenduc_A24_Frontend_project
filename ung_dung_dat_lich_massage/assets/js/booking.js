let localBooking = JSON.parse(localStorage.getItem("booking")) || [];
// phần gọi phần tử
let newNameEdit = document.getElementById("edit-name");
let newEmailEdit = document.getElementById("edit-email");
let newTimeEdit = document.getElementById("edit-time");
let newDateEdit = document.getElementById("edit-date");
let newClassEdit = document.getElementById("edit-class");
let btn_shedule_new = document.querySelector("#btn-shedule-new");
let tbodyListUserBooking = document.querySelector("#tbodyListUserBooking");
let closeformelement = document.querySelector("#btn-close");
let btntonpageselement = document.querySelector("#btnpages");
let btnprev = document.querySelector("#btn-prev");
let btnnext = document.querySelector("#btn-next");
//--------------------------------------------------//
//tao ra cac bien toan cuc
let curenpage = 1;
let totalperpages = 5; // bien tong so hs tren 1 trang
//tong so trang
let totalpages = Math.ceil(localBooking.length / totalperpages); //4

let renderpage = () => {
  //clear ket qua cua lan render trc ddaay
  btntonpageselement.textContent = "";

  //hien thi ra tung nut
  for (let i = 1; i <= totalpages; i++) {
    //tao tung buton
    let btnelement = document.createElement("button");

    //gan tieu de cho nut
    btnelement.textContent = i;

    //kiem tra button nao dang dc active
    if (curenpage === i) {
      btnelement.classList.add("btn-active");
    }

    //disable nut prev khi dang hien thi trang 1
    if (curenpage === 1) {
      btnprev.setAttribute("disabled", "disabled");
    } else {
      btnprev.removeAttribute("disabled");
    }

    //disable nut prev khi dang hien thi trang 1
    if (curenpage === totalpages) {
      btnnext.setAttribute("disabled", "disabled");
    } else {
      btnnext.removeAttribute("disabled");
    }

    //add sk khi click vao nut
    btnelement.addEventListener("click", function () {
      curenpage = i;
      renderpage();
      renderListUserBooking();
    });

    //gan button vao id but-pages
    btntonpageselement.appendChild(btnelement);
  }
};

btnprev.addEventListener("click", function () {
  //khi bam vao nut prev se tang curenpage len 1 don vi
  if (curenpage > 1) {
    curenpage--;
    renderpage();
    renderListUserBooking();
  }
});

btnnext.addEventListener("click", function () {
  //khi bam vao nut prev se giam curenpage  1 don vi
  if (curenpage <= totalperpages) {
    curenpage++;
    renderpage();
    renderListUserBooking();
  }
});
renderpage();

// phần gắn sự kiện
// btn_shedule_new.addEventListener("click", function () {
//   window.location.href = "../../pages/booking/scheduleNew.html";
// });

//phần  hàm
function renderListUserBooking() {
  let star = (curenpage - 1) * totalperpages; // tong so trang tru 1 nhan voi so phan tu xuat hien trong 1 trang
  let end = totalperpages * curenpage; //so phan tu xuat hien trong 1 trang nhan voi tongso trang
  let listBookingslice = localBooking.slice(star, end);
  let listBooking = listBookingslice.map((user, index) => {
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
      
<!-- Button delete -->
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

function handledelette(indexInPage) {
  const start = (curenpage - 1) * totalperpages;
  const realIndex = start + indexInPage;

  localBooking.splice(realIndex, 1);

  localStorage.setItem("booking", JSON.stringify(localBooking));

  totalpages = Math.ceil(localBooking.length / totalperpages);
  if (curenpage > totalpages) curenpage = totalpages;

  renderpage();
  renderListUserBooking();
}

// //phần gọi hàm
renderListUserBooking();
