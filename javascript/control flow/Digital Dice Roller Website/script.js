function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;

    let diceImage = document.getElementById("diceImage");
    //Add animation in image by dice(number)
    diceImage.classList.add("roll");
    setTimeout(() => diceImage.classList.remove("roll"), 1000);
    diceImage.src = "assets/dice" + dice + ".png";
    document.getElementById("result").textContent = "You rolled  dice number is:" + dice;
}