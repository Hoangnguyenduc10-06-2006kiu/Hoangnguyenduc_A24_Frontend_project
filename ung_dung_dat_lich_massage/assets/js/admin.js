let log_out = document.querySelector("#log-out-button");

log_out.addEventListener("click",function(){
    let log_out_confirm = confirm("bạn chắc chắn muốn đăng xuất tài khoản không")
    if (log_out_confirm) {
        window.location.href = "../../pages/auth/login.html";
    }
})