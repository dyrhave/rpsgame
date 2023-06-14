// Rock Paper Scissors
// play against computer 
// get user choice and get computer choice
// compare choices and determine winner

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
// generates random choice for computer and gets it

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (!choices.includes(playerSelection)) {
        return "Invalid choice. Please choose rock, paper, or scissors";
    }

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }

    const winCondition = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winCondition[playerSelection] === computerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`; 
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Enter your choice(rock, paper, or scissors)`);
        const computerSelection = getComputerChoice();

        console.log(`Player: ${playerSelection}`);
        console.log(`Computer ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
            playerScore++
        } else if (result.includes("lose")) {
            computerScore++
        }

        console.log(`Current score - Player: ${playerScore}, Computer: ${computerScore}`);
    }
    console.log(`Final score - Player: ${playerScore}, Computer: ${computerScore}`);

    function getGameResult() {
        if (playerScore > computerScore) {
            return "Congratulations you win!"
        } else if (playerScore < computerScore) {
            return "Sorry you lose!"
        } else {
            return "Game ends in a draw"
        }
    }
    const gameResult = getGameResult(playerScore, computerScore);
    console.log(gameResult);
}

game();