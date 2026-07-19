const btn = document.getElementById("startBtn");
const gallery = document.querySelector(".gallery");
const letter = document.getElementById("letter");

const countdown = document.getElementById("countdown");
const count = document.getElementById("count");

btn.addEventListener("click", () => {

    btn.style.display = "none";
    countdown.style.display = "block";

    let number = 3;

    count.innerText = number;

    const timer = setInterval(() => {

        number--;

        if(number > 0){
            count.innerText = number;
        }

        else if(number === 0){
            count.innerText = "🎉";
        }

        else{

            clearInterval(timer);

            countdown.style.display = "none";

            letter.classList.add("show");
            gallery.classList.add("show");

            createHearts();
            createFireworks();
            setTimeout(createFireworks, 700);
setTimeout(createFireworks, 1400);
setTimeout(createFireworks, 2100);

        }

    },1000);

});

function createHearts(){

    for(let i=0;i<30;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";
        heart.className="heart";

        heart.style.left=Math.random()*100+"vw";
        heart.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    }

}
function createFireworks() {

    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 8,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}