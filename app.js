
const choices = {
    rock: 0,
    paper: 1,
    scissors: 2
}

let playerWin = 0;
let compWin = 0;


function getComputerChoice() {
    return Math.floor(Math.random() * (2-0+1));
}

function getPlayerChoice(playerPrompt) {
    return choices[playerPrompt];
}

function determineWin(compChoice, playerChoice) {
    if(playerChoice > compChoice) {
        playerWin++;
        return "player wins";
    } else if(playerChoice < compChoice) {
        compWin++;
        return "computer wins";
    } else 
        return "tied";
}

function game() {

    while(playerWin < 5 && compWin < 5) {
        //let playerPrompt = prompt("Pick: ")
        let playerChoice = getComputerChoice();
        let compChoice = getComputerChoice();
        determineWin(compChoice, playerChoice); 
    }
    console.log(playerWin);
    console.log(compWin);
    if(playerWin == 5) {
        console.log("player wins the game");
    } else if(compWin == 5) {
        console.log("computer wins the game ");
    }
}

game();
