"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 22;

// console.log((document.querySelector(".guess").value = 22));

let secretNumber = Math.trunc(Math.random() * 20) + 1; // get a random number between 1 and 20
console.log(secretNumber);
let score = 20;
let highscore = 0;

console.log(document.querySelector(".score"));

const displayMsg = function (cls, msg) {
  document.querySelector(`.${cls}`).textContent = msg;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  if (!guess) {
    displayMsg("message", "No Number");
  } else if (guess === secretNumber) {
    displayMsg("message", "Correct Number!");
    displayMsg("number", secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      displayMsg("highscore", highscore);
    } else {
      displayMsg("highscore", highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMsg("message", guess > secretNumber ? "Too High!" : "Too Low!");
      score--;

      displayMsg("score", score);
    } else {
      displayMsg("message", "GAME OVER!");
      displayMsg("score", 0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  displayMsg("message", "Start guessing..");
  score = 20;
  displayMsg("score", 20);
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
  displayMsg("number", "?");

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
