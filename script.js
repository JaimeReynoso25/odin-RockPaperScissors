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

function playRound() {
    let computerChoice = Math.floor(Math.random() * 3);
    let userChoice = Number(prompt("Enter 0 for rock, 1 for paper, or 2 for scissors: "))

    while (userChoice < 0 || userChoice > 2) {
        userChoice = Number(prompt("Invalid choice. Enter 0 for rock, 1 for paper, or 2 for scissors: "))
    }
    console.log(`Computer chose ${getChoice(computerChoice)}, you chose ${getChoice(userChoice)}.`)

    if (computerChoice === userChoice) {
        console.log("It's a tie!");
    } else if (
        (computerChoice === 0 && userChoice === 2) ||
        (computerChoice === 1 && userChoice === 0) ||
        (computerChoice === 2 && userChoice === 1)
    ) {
        console.log("Computer wins this round!");
        computerScore++;
    } else {
        console.log("You win this round!");
        humanScore++;
    }
}


while (humanScore < 5 && computerScore < 5) {
    playRound();
    console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

if (humanScore === 5) {
    console.log("Congrats! You win the game!");
} else {
    console.log("Computer wins the game! Better luck next time!");
}
  