let computerScore = 0
let humanScore = 0

function getComputerChoice() {
    let randomnum = Math.random()
    if (randomnum >= 0 && randomnum < 0.33) {
        return "rock"
    } else if (randomnum >= 0.33 && randomnum < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter \"rock\", \"paper\", or \"scissors\".")
    return choice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == computerChoice) {
        return "It's a tie!"
    }

    if (computerChoice == "rock" && humanChoice == "paper") {
        humanScore += 1 
        return "You win! Paper beats rock"
    }

    if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore += 1
        return "You lose! Rock beats scissors"
    }

    if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore += 1
        return "You lose! Paper beats rock"
    }

    if (computerChoice == "paper" && humanChoice == "scissors") {
        humanScore += 1
        return "You win! Scissors beats paper"
    }

    if (computerChoice == "scissors" && humanChoice == "rock") {
        humanScore += 1
        return "You win! Rock beats scissors"
    }
    
    if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore += 1
        return "You lose! Scissors beats paper"
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    if (computerScore > humanScore) {
        return "The computer won the game!"
    } else {
        return "You won the game!"
    }



}

console.log(playGame())



