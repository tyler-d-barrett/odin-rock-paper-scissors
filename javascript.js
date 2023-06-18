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
    const playerChoice = document.querySelector('.playerChoice')
    const computerChoice = document.querySelector('.computerChoice')
    const result = document.querySelector('.result')

    playerChoice.textContent = playerSelection
    computerChoice.textContent = computerSelection

    if (computerSelection == playerSelection) {
        result.textContent = `Tie! You both chose ${playerSelection}!`;
    } else if ((playerSelection == "Rock" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Scissors")
        || (playerSelection == "Scissors" && ComputerSelection == "Rock")) {
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        computerScore++;
    } else {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++;
    }
}

let playerScore = 0, computerScore = 0;

const buttons = document.querySelectorAll('button');
console.log(buttons)

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerSelection = button.className;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    const pScore = document.querySelector('.playerScore')
    pScore.textContent = playerScore;

    const cScore = document.querySelector('.computerScore')
    cScore.textContent = computerScore;

    if (playerScore == 5)
        alert('Player wins!')
    
    if (computerScore == 5)
        alert('Computer wins!')
  });
});