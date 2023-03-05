//console.log("Hello, World!")

function getComputerChoice() {
    let a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (a == 1) {
        return 'Rock'
    } else if (a == 2) {
        return 'Paper'
    } else if (a == 3) {
        return 'Scissors'
    }
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

let playerScore = 0
let computerScore = 0

function game() {
    let playerSelection = prompt("Choose. Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`The Score is ${playerScore} - ${computerScore}`)
}

for (let i = 0; i < 5; i++) {
    game ();

    if ((i == 4) && (playerScore > computerScore)) {
        console.log("You win! GAME OVER");
    } else if ((i == 4) && (playerScore < computerScore)) {
        console.log("You lose... GAME OVER");
    } else if ((i == 4) && (playerScore == computerScore)) {
        console.log("Tie Game. Try again? GAME OVER")
    }
}