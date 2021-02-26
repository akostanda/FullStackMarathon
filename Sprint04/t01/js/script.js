"use strict"

let liElement = document.getElementsByTagName("li");
for (let i = 0; i < liElement.length; i++) {
    if (!liElement[i].hasAttribute("class") || (liElement[i].hasAttribute("class")
        && (liElement[i].getAttribute("class") !== "good"
            && liElement[i].getAttribute("class") !== "evil"
            && liElement[i].getAttribute("class") !== "unknown"))) {
        liElement[i].setAttribute("class", "unknown");
    }
    if (!liElement[i].hasAttribute("data-element")) {
        liElement[i].setAttribute("data-element", "none");
    }

    let circleClassNames = liElement[i].getAttribute("data-element").split(" ");
    let newline = document.createElement("br");
    liElement[i].appendChild(newline);
    for (let j = 0; j < circleClassNames.length; j++) {
        divCreation(circleClassNames[j], liElement[i]);
    }
}

function divCreation(circleClassName, liElement) {
    let newDiv = document.createElement("div");
    let lineDiv = document.createElement("div");
    if (circleClassName === "none") {
        lineDiv.setAttribute("class", "line");
        newDiv.setAttribute("class", "elem");
        newDiv.appendChild(lineDiv);
    }
    else {
        newDiv.setAttribute("class", "elem " + circleClassName);
    }
    liElement.appendChild(newDiv);

}