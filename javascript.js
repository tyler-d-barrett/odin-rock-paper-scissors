function getComputerChoice() {
    //randomly return rock, paper, or scissors
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    let lowercasePlayerSelection = playerSelection.toLowerCase();
    let lowercaseComputerSelection = computerSelection.toLowerCase();

    if (lowercaseComputerSelection == lowercasePlayerSelection) {
        console.log(`Tie! You both chose ${playerSelection}!`);
        return 0;
    } else if ((lowercasePlayerSelection == "rock" && lowercaseComputerSelection == "paper")
        || (lowercasePlayerSelection == "paper" && lowercaseComputerSelection == "scissors")
        || (lowercasePlayerSelection == "scissors" && lowercaseComputerSelection == "rock")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 1;
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 2;
    }

}

function game() {
    let computerSelection;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        switch (result) {
            case 1:
                computerScore++;
                break;
            case 2:
                playerScore++;
                break;
            default:
                break;
        };
    };

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}

let playerSelection = prompt("Choose between Rock, Papers, or Scissors:");

game();