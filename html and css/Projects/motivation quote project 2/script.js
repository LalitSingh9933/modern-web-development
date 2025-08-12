const quotes = [
    "Believe you can and you're halfway there.",
    "Do something today that your future self will thank you for.",
    "Dream big and dare to fail.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don’t wait. The time will never be just right.",
    "Act as if what you do makes a difference. It does."
];

document.getElementById("new-quote").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
})