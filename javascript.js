
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: return "rock";
        case 1: return "scissor";
        case 2: return "paper";
        default: return "?"
    }
}

function getHumanChoice() {
    const input = prompt("Enter your choice:");
    console.log("You entered:", input);
    return input;
}

getHumanChoice();