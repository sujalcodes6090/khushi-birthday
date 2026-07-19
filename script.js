const btn = document.getElementById("startBtn");
const gallery = document.querySelector(".gallery");
const letter = document.getElementById("letter");

btn.addEventListener("click", () => {

    // Gallery dikhana
    gallery.classList.add("show");

    // Letter dikhana
    letter.classList.add("show");

    // Button hide karna
    btn.style.display = "none";

    // Hearts banana
    for (let i = 0; i < 30; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "💖";
        heart.className = "heart";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

});