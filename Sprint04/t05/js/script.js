let mainDiv = document.getElementById("wrapper");
let block = {
    offsetX: 0,
    offsetY: 0,
    target: null
};

mainDiv.addEventListener("dblclick", event => {
    const target = event.target;
    if (target && target.classList.contains("blocks")) {
        if (target.getAttribute("value") === "on") {
            target.setAttribute("value", "off");
        }
        else {
            target.setAttribute("value", "on")
        }
    }
});

mainDiv.addEventListener("mousedown", event => {
    if (event.target && event.target.classList.contains("blocks")
        && event.target.getAttribute("value") === "on") {
        block.target = event.target;
        block.offsetX = event.offsetX;
        block.offsetY = event.offsetY;
    }
});

mainDiv.addEventListener("mouseup", () => {
    block.target = null;
});

mainDiv.addEventListener("mousemove", e => {
    if (block.target) {
        block.target.style.top = (e.pageY - block.offsetY) + "px";
        block.target.style.left = (e.pageX - block.offsetX) + "px";
    }
});






















// function checkFunc(block) {
//     if (checkMove) {
//         checkMove = false;
//         block.style.border = "2px dashed black";
//     }
//     else {
//         checkMove = true;
//         block.style.border = "none";
//     }
// }
//
// btn.addEventListener('dblclick', event => {
//     checkFunc(btn);
// })

var div = document.getElementById('first');
var listener = function(e) {
    div.style.left = e.pageX + "px";
    div.style.top = e.pageY + "px";
};

function move() {
    document.addEventListener('mousemove', listener);
}

function stop() {
    document.removeEventListener('mousemove', listener);
}

// btn1.addEventListener('click', event => {
//     checkFunc(btn1);
// })

// btn.onmousedown = function(event) {
//     if (check) {
//         let shiftX = event.clientX - btn.getBoundingClientRect().left;
//         let shiftY = event.clientY - btn.getBoundingClientRect().top;
//
//         btn.style.position = 'absolute';
//         btn.style.zIndex = 1000;
//         document.body.append(btn);
//
//         moveAt(event.pageX, event.pageY);
//
//         // moves the btn at (pageX, pageY) coordinates
//         // taking initial shifts into account
//         function moveAt(pageX, pageY) {
//             btn.style.left = pageX - shiftX + 'px';
//             btn.style.top = pageY - shiftY + 'px';
//         }
//
//         function onMouseMove(event) {
//             moveAt(event.pageX, event.pageY);
//         }
//
//         // move the btn on mousemove
//         document.addEventListener('mousemove', onMouseMove);
//
//         // drop the btn, remove unneeded handlers
//         btn.onmouseup = function() {
//             document.removeEventListener('mousemove', onMouseMove);
//             btn.onmouseup = null;
//         };
//     }
// };
//
// btn.ondragstart = function() {
//     return false;
// };

