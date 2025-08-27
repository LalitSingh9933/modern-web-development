const profile = document.getElementById("user");
const userImg = document.getElementById("userImg");
const newBtn = document.getElementById("nextuser");

async function getQuote() {
    try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        const user = data.results[0];

        // fetching detail
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
        const email = user.email;

        // Display
        profile.textContent = `${fullName} (${email})`;
        userImg.src = user.picture.large;

    } catch (error) {
        profile.textContent = " Error fetching user!";
    }
}

// First load
getQuote();

newBtn.addEventListener("click", getQuote);
