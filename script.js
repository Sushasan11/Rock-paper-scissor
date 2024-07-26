// Possible choices for the game
const choices = ["rock", "paper", "scissors"];

// Get DOM elements to display game information
const playerDisplay = document.getElementById("playerdisplay");
const computerDisplay = document.getElementById("computerdisplay");
const resultDisplay = document.getElementById("resultdisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tieScoreDisplay = document.getElementById("tieScoreDisplay");

// Initialize scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Add an event listener for keydown events
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is the spacebar
  if (event.code === "Space") {
    // If the end game message is visible, start the game
    if (
      !document.getElementById("endGameMessage").classList.contains("hidden")
    ) {
      startGame();
    } else {
      // If the home page is visible, start the game
      if (!document.getElementById("homePage").classList.contains("hidden")) {
        startGame();
      } else {
        // If the game page is visible, end the game
        endGame();
      }
    }
  }
});

// Function to start the game
function startGame() {
  // Hide the home page and end game message, then show the game page
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("endGameMessage").classList.add("hidden");
  document.getElementById("gamePage").classList.remove("hidden");
}

// Function to end the game
function endGame() {
  // Hide the game page and show the end game message
  document.getElementById("gamePage").classList.add("hidden");
  document.getElementById("endGameMessage").classList.remove("hidden");
}

// Function to play the game
function playGame(playerChoice) {
  // Randomly select a choice for the computer
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  // Determine the result of the game
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  // Update the displays with the player's and computer's choices
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  // Remove previous result text color
  resultDisplay.classList.remove("greenText", "redText");

  // Update scores and display confetti if the player wins
  if (result === "YOU WIN!") {
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  } else if (result === "YOU LOSE!") {
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  } else if (result === "IT'S A TIE!") {
    tieScore++;
    tieScoreDisplay.textContent = tieScore;
  }
}