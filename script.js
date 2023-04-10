function getComputerChoice() {
    let a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (a == 1) return 'Rock';
    if (a == 2) return 'Paper';
    if (a == 3) return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    let letter = playerSelection.slice(0,1);
    let rest = playerSelection.slice(1);
    let modifiedSelection = letter.toUpperCase() + rest.toLowerCase();

    console.log(modifiedSelection);
    console.log(computerSelection);

    let rockWins = 'Rock beats Scissors.';
    let scissorWins = 'Scissors beats Paper.';
    let paperWins = 'Paper beats rock.';

    if (modifiedSelection == computerSelection) {
        return 'Draw'
    } else if ((modifiedSelection == 'Rock') && (computerSelection == 'Paper')) {
        computerScore++;
        return `You lose. ${paperWins}`
    } else if ((modifiedSelection == 'Rock') && (computerSelection == 'Scissors')) {
        playerScore++;
        return `You win!. ${rockWins}`
    } else if ((modifiedSelection == 'Paper') && (computerSelection == 'Rock')) {
        playerScore++;
        return `You win! ${paperWins}`
    } else if ((modifiedSelection == 'Paper') && (computerSelection == 'Scissors')) {
        computerScore++;
        return `You lose. ${scissorWins}`
    } else if ((modifiedSelection == 'Scissors') && (computerSelection == 'Paper')) {
        playerScore++;
        return `You win! ${scissorWins}`
    } else if ((modifiedSelection == 'Scissors') && (computerSelection == 'Rock')) {
        computerScore++;
        return `You lose. ${rockWins}`
    }
}

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');

function gameOver() {
    if (playerScore > computerScore) {
        return "You win! GAME OVER";
    } else if (playerScore < computerScore) {
        return "Computer wins... GAME OVER";
    }
}

const container = document.querySelector('#container');

const results = document.createElement('div');
container.appendChild(results);

const score = document.createElement('div');
container.appendChild(score);

const finalResults = document.createElement('div');
container.appendChild(finalResults);

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    results.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `The Score is ${playerScore} - ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        finalResults.textContent = gameOver();
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    }
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    results.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `The Score is ${playerScore} - ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        finalResults.textContent = gameOver();
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    }
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    results.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `The Score is ${playerScore} - ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        finalResults.textContent = gameOver();
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    }
});
