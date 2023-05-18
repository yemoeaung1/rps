//const choices = ["rock", "paper", "scissors"]

const choices = {
    rock: 0,
    paper: 1,
    scissors: 2
}


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

let playerWin = 0;
let compWin = 0;

while(playerWin < 5 && compWin < 5) {
    //let playerPrompt = prompt("Pick: ")
    let playerChoice = getComputerChoice();
    let compChoice = getComputerChoice();
    console.log(determineWin(compChoice, playerChoice));
    
}