const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const computerChoice = getComputerChoice();
    playGame(userChoice, computerChoice);
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function playGame(user, computer) {
  if (user === computer) {
    result.textContent = `It's a draw! You both chose ${user}.`;
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    userScore++;
    result.textContent = `You win! ${user} beats ${computer}.`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${computer} beats ${user}.`;
  }

  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
}
