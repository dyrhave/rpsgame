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

const replayButton = document.getElementById("replaybtn");
replayButton.addEventListener("click", resetGame);

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = `Player: ${playerScore}`;
    document.getElementById("computer-score").textContent = `Computer: ${computerScore}`;
    document.getElementById("playerSign").innerHTML = `<img src="images/question.png">`;
    document.getElementById("computerSign").innerHTML = `<img src="images/question.png">`;
    document.getElementById("round-result").textContent = "";
    replayButton.style.display = "none"; 

    choiceButtons.forEach(button => {
        button.disabled = false;
    });
}


function updateScore(result) {
    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    document.getElementById("player-score").textContent = `Player: ${playerScore}`;
    document.getElementById("computer-score").textContent = `Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        displayWinner();
        replayButton.style.display = "block";
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
    replayButton.style.display = "block";

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

    const playerSignElement = document.getElementById("playerSign");
    const computerSignElement = document.getElementById("computerSign");
    applyAnimation(playerSignElement);
    applyAnimation(computerSignElement);

    choiceButtons.forEach(button => {
        button.classList.remove("selected");
    })
    document.getElementById(playerSelection).classList.add("selected");
    document.getElementById("playerSign").innerHTML = `<img src="images/${playerSelection}.png">`;
    document.getElementById("computerSign").innerHTML = `<img src="images/${computerSelection}.png">`;

    const result = determineWinner(playerSelection, computerSelection);

    document.getElementById("round-result").textContent = result;

    updateScore(result)

    if (playerScore === 5 || computerScore === 5) {
        displayWinner();
    }
}

function applyAnimation(element) {
    element.classList.add("selected");
    setTimeout(() => {
        element.classList.remove("selected");
    }, 300);
}