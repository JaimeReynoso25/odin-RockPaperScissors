let humanScore = 0;
let computerScore = 0;


function getChoice(x) {
    switch (x) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(userChoice) {
    let computerChoice = Math.floor(Math.random() * 3);

    resultDisplay.textContent = `Computer chose ${getChoice(computerChoice)}, you chose ${getChoice(userChoice)}. `;

    if (computerChoice === userChoice) {
        resultDisplay.textContent += "It's a tie!";
    } else if (
        (computerChoice === 0 && userChoice === 2) ||
        (computerChoice === 1 && userChoice === 0) ||
        (computerChoice === 2 && userChoice === 1)
    ) {
        resultDisplay.textContent += "Computer wins this round!";
        computerScore++;
    } else {
        resultDisplay.textContent += "You win this round!";
        humanScore++;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (humanScore === 5) {
        finalResultDisplay.textContent = "Congrats! You win the game!";
        resetButton.hidden = false;
    }
    if (computerScore === 5) {
        finalResultDisplay.textContent = "Computer wins the game! Better luck next time!";
        resetButton.hidden = false;
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");

const resultDisplay = document.getElementById("result");
const finalResultDisplay = document.getElementById("finalResult");
const humanScoreDisplay = document.getElementById("humanScore");
const computerScoreDisplay = document.getElementById("computerScore");

rockButton.addEventListener("click", () => playRound(0));
paperButton.addEventListener("click", () => playRound(1));
scissorsButton.addEventListener("click", () => playRound(2));

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "";
    finalResultDisplay.textContent = "";
    resetButton.hidden = true;
});

  