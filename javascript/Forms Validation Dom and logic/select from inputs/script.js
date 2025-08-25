const form = document.getElementById("loginForm");
const username= document.getElementById("username");
const password= document.getElementById("password");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("Username:" , username.value);
    console.log("Password", password.value);
});