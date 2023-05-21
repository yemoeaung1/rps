const choices = {
    rock: 0,
    paper: 1,
    scissors: 2
}

let playerWin = 0;
let compWin = 0;




function getComputerChoice() {
    return Math.floor(Math.random() * (3));
}

// function getPlayerChoice(playerPrompt) {
//     return choices[playerPrompt];
// }

function determineWin(compChoice, playerChoice) {
    if(playerChoice > compChoice) {
        playerWin++;
        playerScore.textContent = playerWin;
        roundInfo.textContent = "Player wins the round";
        //return "player wins";
    } else if(playerChoice < compChoice) {
        compWin++;
        compScore.textContent = compWin;
        roundInfo.textContent = "Computer wins the round";
        return "computer wins";
    } else 
        roundInfo.textContent = "Tie round";
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

const playerScore = document.getElementById("player-score");
const compScore = document.getElementById("cp-score");
const roundInfo = document.getElementById("message");

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const sciDiv = document.getElementById("scissors");

rockDiv.addEventListener("click", () => handle(0));
paperDiv.addEventListener("click", () => handle(1));
sciDiv.addEventListener("click", () => handle(2));

function handle(playerOption) {
    if(playerWin != 5 || compWin != 5) {
        playerChoice = playerOption;
        compChoice = getComputerChoice();
        determineWin(compChoice, playerChoice);
    } else {
        roundInfo.textContent = "Game Over";
        rockDiv.removeEventListener("click",() => handle(0));
        paperDiv.removeEventListener('onclick',() => handle(1));
        sciDiv.removeAttribute('onclick');
    //playerScore.textContent = playerChoice;
    }
}