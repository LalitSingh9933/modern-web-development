let btn1 = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let copyDiv = document.querySelector(".copyCode");
 let rgb1 ="";
  let rgb2 = "";

const hexValues = () => {
    let myHexaValue = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += myHexaValue[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const handleButton1 = () => {
     rgb1 = hexValues();
    btn1.innerHTML =rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},  #e293e0)`;
     copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
     rgb2 = hexValues();
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, #df4471)`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(copyDiv.innerText);
});

