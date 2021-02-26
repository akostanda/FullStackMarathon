"use strict"

let clickCounter = 1;

function transformation() {
    const name = document.getElementById("hero");
    const backFon = document.getElementById("lab");

    if (clickCounter === 1) {
        name.textContent = "Hulk";
        name.style.fontSize = "130px";
        name.style.letterSpacing = "6px";
        backFon.style.background = "#70964b";
        clickCounter++;
    }
    else {
        name.textContent = "Bruce Banner";
        name.style.fontSize = "60px";
        name.style.letterSpacing = "2px";
        backFon.style.background = "#ffb300";
        clickCounter--;
    }
}