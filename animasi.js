document.addEventListener("DOMContentLoaded", () => {
    // Generate floating hearts in the background
    const heartContainer = document.getElementById("heart-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        // Randomly choose between a few romantic emojis
        const emojis = ["❤️", "💖", "💕", "✨"];
        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        // Randomize position, size, and animation duration
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 4 + 4 + "s"; // 4s to 8s
        heart.style.fontSize = Math.random() * 15 + 10 + "px"; // 10px to 25px

        heartContainer.appendChild(heart);

        // Remove heart after animation finishes to prevent memory leak
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    // Create new heart every 400ms
    const heartInterval = setInterval(createHeart, 400);

    // Handle button click for secret message reveal
    const revealBtn = document.getElementById("reveal-btn");
    const secretMessage = document.getElementById("secret-message");

    revealBtn.addEventListener("click", () => {
        // Show the message
        secretMessage.classList.remove("hidden");
        secretMessage.classList.add("reveal");

        // Hide the button gracefully
        revealBtn.style.opacity = "0";
        setTimeout(() => {
            revealBtn.style.display = "none";
        }, 300);

        // Speed up heart generation briefly for an exciting "burst" effect
        let burstCount = 0;
        const burstInterval = setInterval(() => {
            createHeart();
            burstCount++;
            if (burstCount > 40) {
                clearInterval(burstInterval);
            }
        }, 50);
    });
});
