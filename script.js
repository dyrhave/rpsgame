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
    computerSelection = computerSelection.toLowercase();

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