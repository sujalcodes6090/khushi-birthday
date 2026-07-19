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

    for (let i = 0; i < 25; i++) {

        const firework = document.createElement("div");

        firework.className = "firework";

        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 70 + "vh";

        firework.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1200);
    }

}