let firstname = document.querySelector("#firstname")
let secondname = document.querySelector("#secondname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let signUpBtn = document.querySelector("#sign_up")

signUpBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(firstname.value === "" || secondname.value === "" || email.value === "" ||password.value === "" ){
        alert("please, enter your infornation")
    }else{
        console.log("sign up")
        localStorage.setItem("userName" , firstname.value +" "+ secondname.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)
        setInterval(function(){
            window.location = "login.html"
        },700)
    }
})
