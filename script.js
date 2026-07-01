const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");

// YES Button
yesBtn.addEventListener("click", async () => {

    try {
        await fetch("https://formspree.io/f/mykqnpla", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                subject: "💖 Someone accepted your date request!",
                message: "Someone clicked the YES button on your website! 🎉",
                time: new Date().toLocaleString()
            })
        });
    } catch (error) {
        console.log("Formspree error:", error);
    }

    popup.style.display = "flex";

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 160
        });
    }, 500);
});

// Close popup
function closePopup() {
    popup.style.display = "none";
}

// Move NO Button
function moveButton() {

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moveButton);

noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

window.addEventListener("resize", () => {
    noBtn.style.left = "";
    noBtn.style.top = "";
});
