let name = "Lalit Singh";
let Age = '25'
let city = "Kathmandu"

document.getElementById("welcome").textContent= `Hello ,my name is ${name}`;
document.getElementById("info").textContent= "I am "+Age+" years old from "+city;
let today=new Date();
document.getElementById("date").textContent= "Today is "+today.toDateString();