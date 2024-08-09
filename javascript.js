let computerScore = 0
let humanScore = 0

function getComputerChoice() {
    let randomnum = Math.random();
    if (randomnum < 0.33) {
        return "rock";
    } else if (randomnum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    let result;

    if (humanChoice == computerChoice) {
        result = "It's a tie!"
    }

    if (computerChoice == "rock" && humanChoice == "paper") {
        humanScore += 1 
        result = "You win! Paper beats rock"
    }

    if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore += 1
        result = "You lose! Rock beats scissors"
    }

    if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore += 1
        result = "You lose! Paper beats rock"
    }

    if (computerChoice == "paper" && humanChoice == "scissors") {
        humanScore += 1
        result = "You win! Scissors beats paper"
    }

    if (computerChoice == "scissors" && humanChoice == "rock") {
        humanScore += 1
        result = "You win! Rock beats scissors"
    }
    
    if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore += 1
        result = "You lose! Scissors beats paper"
    }

    document.querySelector("#result").textContent = result;
    document.querySelector("#score").textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`

    if (humanScore >= 5) {
        document.querySelector("#result").textContent = "You won the game!"
        resetGame()
    }  else if (computerScore >= 5) {
        document.querySelector("#result").textContent = "The computer won the game!"
        resetGame()
    }
}

function resetGame() {
    humanScore = 0
    computerScore  = 0
    document.querySelector("#score").textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`
}






document.querySelector("#btn1").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.querySelector("#btn2").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.querySelector("#btn3").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});





