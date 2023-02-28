console.log("Hello, World!")

function getComputerChoice() {
    let a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    console.log(a);

    if (a == 1) {
        return 'Rock'
    } else if (a == 2) {
        return 'Paper'
    } else if (a == 3) {
        return 'Scissors'
    }
}
console.log(getComputerChoice());