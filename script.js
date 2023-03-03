console.log("Hello, World!")

function getComputerChoice() {
    let a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    //console.log(a)

    if (a == 1) {
        return 'Rock'
    } else if (a == 2) {
        return 'Paper'
    } else if (a == 3) {
        return 'Scissors'
    }
}

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let letter = playerSelection.slice(0,1);
    let rest = playerSelection.slice(1);
    let modifiedSelection = letter.toUpperCase() + rest.toLowerCase();
    console.log(modifiedSelection)
    console.log(computerSelection)

    let rockWins = 'Rock beats Scissors.';
    let scissorWins = 'Scissors beats Paper.';
    let paperWins = 'Paper beats rock.';

    if (modifiedSelection == computerSelection) {
        return 'Draw'
    } else if ((modifiedSelection == 'Rock') && (computerSelection == 'Paper')) {
        return `You lose. ${paperWins}`
    } else if ((modifiedSelection == 'Rock') && (computerSelection == 'Scissors')) {
        return `You win!. ${rockWins}`
    } else if ((modifiedSelection == 'Paper') && (computerSelection == 'Rock')) {
        return `You win! ${paperWins}`
    } else if ((modifiedSelection == 'Paper') && (computerSelection == 'Scissors')) {
        return `You lose. ${scissorWins}`
    } else if ((modifiedSelection == 'Scissors') && (computerSelection == 'Paper')) {
        return `You win! ${scissorWins}`
    } else if ((modifiedSelection == 'Scissors') && (computerSelection == 'Rock')) {
        return `You lose. ${rockWins}`
    }
}

const playerSelection = 'sCissORS';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));