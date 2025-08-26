const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const submitMessage= document.querySelector("#submitMessage")

username.addEventListener("input",() =>{
    if(username.value.length<3){
        userError.textContent="Username must at least 3 characters";

    }else{
        userError.textContent ="";

    }
});
email.addEventListener("input", ()=>{
    if(!email.value.includes("@")){
        emailError.textContent ="Enter a valid email";
    }
    else{
        emailError.textContent ="";

    }
});
password.addEventListener("input",() =>{
    if(password.value.length <6){
        passError.textContent ="Password must be 6+ characters";
    }
    else{
        passError.textContent ="";
    }
})
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    if(!userError.textContent && ! emailError.textContent && !passError.textContent){
       submitMessage.textContent ="Signup Successful "; 
       submitMessage.style.color ="green";
    }
    else{
        submitMessage.textContent="Please fix errors ";
        submitMessage.style.color ="red";
    }
})