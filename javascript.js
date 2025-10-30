
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: return "rock";
        case 1: return "scissors";
        case 2: return "paper";
        default: return "?"
    }
}

