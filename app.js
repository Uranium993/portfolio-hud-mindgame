// // Make the DIV element draggable:
// dragElement(document.getElementById("draggable"));

// function dragElement(elmnt) {
//   var pos1 = 0,
//     pos2 = 0,
//     pos3 = 0,
//     pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = elmnt.offsetTop - pos2 + "px";
//     elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

const title = document.getElementById("titleID");
const subtitle1 = document.getElementsByClassName("subtitle1");
const subtitle2 = document.getElementsByClassName("subtitle2");
const redBtn = document.getElementById("red-pill");
const blueBtn = document.getElementById("blue-pill");

const doorOne = document.getElementById("doorOne");
const doorTwo = document.getElementById("doorTwo");
const doorThree = document.getElementById("doorThree");

//Animations
// gsap.to(doorOne, { duration: 2, y: "-85%", delay: 1 });
// gsap.to(doorTwo, { duration: 2, x: "-55%", delay: 1 });
// gsap.to(doorThree, { duration: 2, x: "37%", delay: 1 });

gsap.to(doorOne, { duration: 1, opacity: 0.5, delay: 2 });
