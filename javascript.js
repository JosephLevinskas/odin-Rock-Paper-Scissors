
let humanScore = 0;
let computerScore = 0;

const beats = {
    rock: "scissors",
    paper: "rock",
    scissor: "paper"
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: return "rock";
        case 1: return "scissors";
        case 2: return "paper";
        default: return "?"
    }
}

function getHumanChoice() {
    const input = prompt("Enter your choice (rock, paper, scissors):");
    console.log("You entered:", input);
    return input;
}

function playRound() {
    const human = getHumanChoice().toLowerCase();
    const computer = getComputerChoice();

    if (human === computer) {
        console.log("It's a tie!");
    } else if (beats[human] === computer) {
        console.log(`you win! ${human} beats ${computer}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log("Final score:")
    console.log("You:", humanScore, "Computer:", computerScore);
}

playGame();