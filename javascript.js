function getComputerChoice() {
    let x = 3*Math.random();
    return Math.floor(x);
}

function getHumanChoice() {
    let x = prompt("gimme good value boy, rock paper or scissors")
    x = x.toLowerCase();
        switch (x) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2; 
    };
}

let humanScore;
let computerScore;

function playRound(humanChoice, computerChoice) {   
    if (humanChoice === computerChoice) {
        return console.log("Draw!");
    }
    let diff = humanChoice - computerChoice;
    if (diff<0) {
        diff =  diff + 3;
    }
    if (diff==1) {
        humanScore++
        return console.log("Win");
    }
    else if(diff == 2) {
        computerScore++
        return console.log("Loss")
    }
    
}
function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Final score is:\n Player: ${humanScore}, Computer: ${computerScore}`)
}

playGame()