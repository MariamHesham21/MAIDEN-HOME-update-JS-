let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(email.value === "" || password.value == ""){
        alert("please enter your Email Or Password")
    }else{
        if( getEmail && getEmail.trim() === email.value.trim() && getPassword && getPassword.trim() === password.value.trim()){
            setTimeout (() => {
                window.location = "index.html"   
            },500)
        }else{
            alert( " your username or password is rong")
        }
    }
})