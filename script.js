// Rock Paper Scissors
// play against computer 
// get user choice and get computer choice
// compare choices and determine winner


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}




function playScissors(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win! Scissors beats Paper";
    } else {
        return "It's a tie!";
    }
}

function playRock(playerSelection, computerSelection) {
    if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! Rock beats Scissors";
    } else {
        return "It's a tie!";
    }
}

function playPaper(playerSelection, computerSelection) {
    if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! Scissors beats Paper";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! Paper beats Rock";
    } else {
        return "It's a tie!";
    }
}

function playRound(playerSelection) {
    if (playerSelection === "rock") {
        return playRock(playerSelection, computerSelection);
    } else if (playerSelection === "paper") {
        return playPaper(playerSelection, computerSelection);
    } else {
        return playScissors(playerSelection, computerSelection);
    }  
} 


const playerSelection = prompt(`Round $[round]: Enter your choice (Rock, Paper, or Scissors)`)
const computerSelection = getComputerChoice();

const result = playRound(playerSelection);

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors)`)
        const computerSelection = getComputerChoice();

        console.log(`Player: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`)

        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}
 

console.log(game())