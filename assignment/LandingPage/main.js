const images = document.querySelector(".slide"),
  slides = document.querySelectorAll(".review-card"),
  length = slides.length;
// console.log(container, slides);

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let curPos = 1;
let position = 0;
let imgWidth = 600;

function prev() {
  //앞으로 이동
  if (curPos > 0) {
    if (nextBtn.getAttribute("disabled") === "true") {
      nextBtn.removeAttribute("disabled");
    }
    position += imgWidth;
    images.style.transform = `translateX(${position}px)`;
    curPos = curPos - 1;
  }
  if (curPos === 0) {
    prevBtn.setAttribute("disabled", "true");
  }
  console.log(curPos);
}
function next() {
  if (curPos < length - 1) {
    if (prevBtn.getAttribute("disabled") === "true") {
      prevBtn.removeAttribute("disabled");
    }
    position -= imgWidth;
    console.log(images);
    images.style.transform = `translate(${position}px)`;
    curPos = curPos + 1;
  }
  if (curPos === length - 1) {
    nextBtn.setAttribute("disabled", "true");
  }
  console.log(curPos);
}

function init() {
  prevBtn.setAttribute("disabled", "true");
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
}
init();
