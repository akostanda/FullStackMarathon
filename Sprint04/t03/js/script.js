let slideIndex = 0;
let timeId;
manualMove(0);

function move(direction) {
    manualMove(direction);
}

function manualMove(direction) {

    if (!isNaN(direction)) {
        slideIndex += direction;
        console.log("direction: " + slideIndex);
    }
    else {
        console.log("nonDirection: " + slideIndex);
        slideIndex++;
    }
    let slides = document.getElementsByClassName("slides");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log("slideIndex: " + slideIndex);
    slides[slideIndex].style.display = "block";
    clearInterval(timeId);
    timeId = setInterval(manualMove, 3000);
}

