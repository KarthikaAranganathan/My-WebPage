let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    //document.querySelector(".message").textContent = "No Number";
    displayMessage("No Number");
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Correct Number");
    // document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //When Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High" : "To Low";
      displayMessage(guess > secretNumber ? "Too High" : "To Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost the game");
      // document.querySelector(".message").textContent = "You Lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  //  else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "To High";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //     // document.querySelector(".message").textContent = "To High!";
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "To Low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     // document.querySelector(".message").textContent = "To Low!";
  //   }
  //   console.log(guess);
});
//Css Manipulate
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  // document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
