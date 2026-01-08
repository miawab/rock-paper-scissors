let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = 3*Math.random();
    return Math.floor(x);
}

const result = document.querySelector("#result")
const Hscore = document.querySelector("#human");
const Cscore = document.querySelector("#computer");

function playRound(humanChoice, computerChoice) { 
    Hscore.textContent = humanScore;
    Cscore.textContent = computerScore; 
    if (humanChoice === computerChoice) {
        return result.textContent = "Draw";
    }
    let diff = humanChoice - computerChoice;
    if (diff<0) {
        diff =  diff + 3;
    }
    if (diff==1) {
        humanScore++;
        Hscore.textContent = humanScore; 
        return result.textContent = "Win";
    }
    else if(diff == 2) {
        computerScore++;
        Cscore.textContent = computerScore; 
        return result.textContent = "Loss"
    }
}

const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e)=> {
    let target = e.target;
    if(target.className === "#buttons"){
        return;
    };
    let humanChoice = 0;
    switch (target.id) {
        case "rock":
            humanChoice = 0;
            break;
    
        case "paper":
            humanChoice = 1;
            break;
        
        case "scissors":
            humanChoice = 2;
            break;
    }
    playRound(humanChoice, getComputerChoice());
    if(humanScore >= 5){
        result.textContent = "YOU WIN!";
        humanScore = 0;
        computerScore = 0; 
    }
    if(computerScore >= 5){
        result.textContent = "you lose"
        humanScore = 0;
        computerScore = 0; 
    }
});




