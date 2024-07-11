// "use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!🎁";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 2;

// document.querySelector(".guess").value = 29;

//add event listenr

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
});

document.querySelector(".check").addEventListener("click", function () {
  const val = Number(document.querySelector(".guess").value);
  console.log(val);

  console.log(typeof val);

  if (!val) {
    document.querySelector(".message").textContent = "Enter a  Number";
  } else if (val === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!🎁";
  } else if (val > secretNumber) {
    document.querySelector(".message").textContent = "Number is Too High🎁";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (val < secretNumber) {
    document.querySelector(".message").textContent = "Number is Too Low🎁";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
