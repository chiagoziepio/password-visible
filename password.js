const password = document.querySelector(".password");
const eyeIcon = document.querySelector(".icon");
const icon = document.querySelector("i")

eyeIcon.addEventListener("click", ()=>{
    if(password.type == "password"){
     password.type = "text";
     eyeIcon.innerHTML = " ";
     eyeIcon.innerHTML = '<i class="fa-sharp fa-solid fa-eye"></i>';
    }
    else{
        password.type = "password";
        eyeIcon.innerHTML = " ";
        eyeIcon.innerHTML = '<i class="fa-sharp fa-solid fa-eye-slash"></i>';
        console.log(32);
    }
    
})