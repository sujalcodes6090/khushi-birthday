const btn = document.getElementById("startBtn");
const gallery = document.querySelector(".gallery");
const letter = document.getElementById("letter");
const nextBtn = document.getElementById("nextBtn");
const videoSection = document.getElementById("videoSection");
const birthdayVideo = document.getElementById("birthdayVideo");
const cakeBtn = document.getElementById("cakeBtn");
const cakeSection = document.getElementById("cakeSection");

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

            nextBtn.style.display = "inline-block";

            createHearts();
            createFireworks();

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

    confetti({
        particleCount: 40,
        spread: 60,
        startVelocity: 30,
        origin: { y: 0.7 }
    });

}nextBtn.addEventListener("click", () => {

    nextBtn.style.display = "none";

    videoSection.style.display = "block";

    birthdayVideo.play();

    videoSection.scrollIntoView({
        behavior: "smooth"
    });

});
birthdayVideo.addEventListener("ended", () => {

    cakeBtn.style.display = "block";

});

function showCake() {

    cakeBtn.style.display = "block";

    alert("Video Ended!");

}

    cakeSection.scrollIntoView({
        behavior: "smooth"
    });

    confetti({
        particleCount: 100,
        spread: 80
    });

});