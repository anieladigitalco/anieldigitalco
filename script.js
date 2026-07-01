// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");

// YES Button
yesBtn.addEventListener("click", () => {

    // Show popup
    popup.style.display = "flex";

    // Confetti 🎉
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    // Extra confetti
    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 160
        });
    }, 500);

});

// Close popup
function closePopup(){
    popup.style.display = "none";
}

// Move NO Button
function moveButton(){

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Desktop
noBtn.addEventListener("mouseenter", moveButton);

// Mobile
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});

// Resize Fix
window.addEventListener("resize", () => {
    noBtn.style.left = "";
    noBtn.style.top = "";
});
