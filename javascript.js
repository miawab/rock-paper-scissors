function getComputerChoice() {
    let x = 3*Math.random();
    switch (Math.floor(x)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'; 
    }
}

console.log(getComputerChoice())