// Rock Paper Scissors
// play against computer 
// get user choice and get computer choice
// compare choices and determine winner

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let playerScore = 0;
let computerScore = 0;

function updateScore(result) {
    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    document.getElementById("player-score").textContent = `Player: ${playerScore}`
    document.getElementById("computer-score").textContent = `Computer: ${computerScore}`

    if (playerScore === 5 || computerScore === 5) {
        displayWinner();
    }
}

function determineWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
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


function displayWinner() {
    let finalResult;
    if (playerScore > computerScore) {
        finalResult = "Congratulation! You win!";
    } else {
        finalResult = "Sorry! You lose!"
    }

    document.getElementById("round-result").textContent = finalResult;

    choiceButtons.forEach(button => {
        button.disabled = true;
    });
}

const choiceButtons = document.querySelectorAll(".choice");
choiceButtons.forEach(button => {
    button.addEventListener("click", () => playRound(button.id));
});

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    document.getElementById("player-choice").textContent = `Player: ${playerSelection}`;
    document.getElementById("computer-choice").textContent = `Computer: ${computerSelection}`;

    const result = determineWinner(playerSelection, computerSelection);

    document.getElementById("round-result").textContent = result;

    updateScore(result)

    if (playerScore === 5 || computerScore === 5) {
        displayWinner();
    }
}

