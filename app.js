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

const words = [
  "Hello Stranger.",
  "Welcome to the random access memory.",
  "Think of me now, as the input.",
  "You are the medium. ",
  " We are the network.",
  "But the reality is our output.",
  "Sounds cringy?",
  "Yep. You guessed right. ",
  "Do make the next choice, with care.",
];

function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }

  return browserName;
}

fnBrowserDetect();

const title = document.getElementById("titleID");
const subtitle1 = document.getElementsByClassName("subtitle1");
const subtitle2 = document.getElementsByClassName("subtitle2");
const redBtn = document.getElementById("red-pill");
const blueBtn = document.getElementById("blue-pill");
const nextBtn = document.getElementById("next-btn-wrapper");

const doorOne = document.getElementById("doorOne");
const doorTwo = document.getElementById("doorTwo");
const doorThree = document.getElementById("doorThree");

//browser compensation
const leftPercentage =
  fnBrowserDetect() === "firefox"
    ? (doorTwo.style.height = "133vh")
    : (doorTwo.style.height = "123vh");

const rightPercange =
  fnBrowserDetect() === "firefox"
    ? (doorThree.style.height = "133vh")
    : (doorThree.style.height = "123vh");

//Animations
gsap.to(doorOne, { duration: 1.3, y: "-85%" });
gsap.to(doorTwo, { duration: 1.3, x: "-59%" });
gsap.to(doorThree, { duration: 1.3, x: "43%" });

gsap.to(doorOne, { duration: 1, opacity: 0.5, delay: 2 });

let cursor = gsap.to(".cursor", {
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1,
});
let masterTl = gsap.timeline({ repeat: -1 }).delay(4);
let boxTl = gsap.timeline();

// .to(".box", { duration: 2, width: "17vw", ease: "power4.inOut" })
// .from(".hi", { duration: 1, y: "7vw", ease: "power3.out" })
// .to(".box", {
//   duration: 3,
//   height: "7vw",
//   ease: "elastic.out",
// })
// .to(".box", {
//   duration: 2,
//   autoAlpha: 0.7,
//   yoyo: true,
//   repeat: -1,
//   ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
// });
words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });

  tl.to(".changing-text", { duration: 2, text: word }, "+=0.5");
  masterTl.add(tl);
  masterTl.addPause(0);
});

boxTl

  .from(".title", {
    duration: 2,
    y: -600,
    delay: 1.1,
    ease: "power2.inOut",
  })
  .from(
    ".next-btn",
    {
      duration: 1,
      opacity: 0,
    },
    "+=5"
  )
  .to(".fas", {
    duration: 0.5,
    y: "25px",
    repeat: 5,
    yoyo: true,
    ease: new SlowMo(0.1, 0.5),
  });

//Click events
nextBtn.addEventListener("click", () => {
  masterTl
    .from(".subtitle1", { duration: 3, x: -1200 })
    .from(".subtitle2", { duration: 3, x: 1400 })
    .from(".subtitle3", { duration: 3, y: 1200 });
});
blueBtn.addEventListener("mouseenter", () => console.log("mouse"));
