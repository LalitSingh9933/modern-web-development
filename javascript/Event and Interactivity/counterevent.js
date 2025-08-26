const counter = document.getElementById("counter");
const inc= document.getElementById("inc");
const dec = document.getElementById("dec");
const rest= document.getElementById("reset");

let count = 0;

function update(){
    counter.textContent = count;

}
inc.addEventListener("click",() =>{ count++; update();});
dec.addEventListener("click", () =>{ count--; update();});
rest.addEventListener("click",()=>{ count =0; update();});

document.addEventListener("keydown", (e) =>{
    if(e.key === "ArrowUp"){count++;}
    else if(e.key === "ArrowDown"){count--;}
    else if(e.key.toLowerCase()== "r") {count =0;}
    update();
});