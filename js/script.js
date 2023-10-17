let userInfo = document.querySelector("#user_info");
let userlinks = document.querySelector("#links");
let userName= document.querySelector("#user-name");

let getUserName = localStorage.getItem("userName");

if (getUserName){
    userlinks.remove();
    userInfo.style.display = "flex"
    userName.innerHTML = getUserName
}

/////////////////////////////////////////////////////////////
let logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", function(){
        localStorage.clear();
        setTimeout(()=>{
            window.location = 'login.html'
        },1500)
})

