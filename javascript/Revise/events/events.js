//  let btn=document.getElementById("myBtn");
// btn.onclick=()=>{
//     alert("hello javascript language");
// }
//  let btnA=document.getElementById("myBtnAgain");
// btnA.ondblclick=()=>{
//     alert("You double click  to get me thank you!");
// }
//addEventListener way 

// let btn = document.getElementById("myBtn");
// btn.addEventListener("click",()=>{
//     alert("hello");
// })
//
const inputElem = document.getElementById("myInput");
const handleInput = (event) => {
    document.querySelector(".inputValue").textContent = ` Input value: ${event.target.value}`;
    document.querySelector(".inputName").textContent = `Input Name:${event.target.name}`;
    document.querySelector(".inputType").textContent = `Input Type: ${event.inputType}`;
    document.querySelector(".eventType").textContent = `Event Type: ${event.type}`;

}

inputElem.addEventListener('input', handleInput);
