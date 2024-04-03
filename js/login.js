let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector(".login-btn")

let getusername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if ( username.value === "" || password.value === ""){
        alert("Please Enter Data")
    }else{

        if(getusername && getusername.trim() === username.value.trim() && getpassword && getpassword.trim() === password.value.trim()) {
            setTimeout( () => {
                window.location = "index.html"
            } , 1500 )
        }else{
            alert("Username or Password incorrect")
        }
    }
})