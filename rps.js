console.log('Welcome to Rock, Paper, Scissors')
const computer = document.querySelector('.computer');
const player = document.getElementById('player');
const button = document.getElementById('play');
const enter = document.querySelector('.enter');
const outcome = document.querySelector('.outcome');
const playerChoice = document.querySelector('.playerChoice');
const final = document.querySelector('.final')

function getComputerChoice(){
    let rpsArray = ["rock","paper","scissors"];
    let randomElement = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return randomElement ;
}

// function playerSelection(){
//     let x =  prompt("Rock, paper or scissors? Select your weapon of choice: ");
//     let y = x.toLowerCase(x);
//     return y; 
// }

function playerSelection(){
    let y = player.value;
    return y;
}

function playARound() {
    let x = getComputerChoice();
    let y = playerSelection();
    if (x==y) { 
        return "you tie!";
    }
    else if (x=='rock' && y == 'scissors') {
        return "rock beats scissors, you lose!"
    }

    else{
        return (`you played ${y} and the computer played ${x}`);
    }
}

// function playRound(){
//     let x = getComputerChoice()
//     let y = playerSelection()
//     switch(true){
//         case x == y:
//             return ('tie');
//             break;
//         case x == 'paper' && y == 'rock':
//         case x == 'rock' && y == 'scissors':
//         case x == 'scissors' && y == 'paper':
//             // return (`Computer chose ${x}, you lose`);
//             return ('loss')
//             break;
//         default:
//             // return (`Computer chose ${x}, you win!`);
//             return ('win')
//     }
// }

function playRound(){
    let x = getComputerChoice();
    let y = playerSelection();
    computer.textContent = x;
    playerChoice.textContent = y;
    switch(true){
        case x == y:
            // console.log(`Computer also chose ${x}`)
            outcome.textContent = `Both chose ${x}`;
            final.textContent = 'TIE';
            final.style.background = 'yellow';
            return ('tie');
            break;
        case x == 'paper' && y == 'rock':
        case x == 'rock' && y == 'scissors':
        case x == 'scissors' && y == 'paper':
            // console.log (`Computer chose ${x} and you chose ${y}`);
            outcome.textContent = `${x} beats ${y}`
            final.textContent = "You Lose!";
            final.style.background = "red";
            return ('loss')
            break;
        case y == 'paper' && x == 'rock':
        case y == 'rock' && x == 'scissors':
        case y == 'scissors' && x == 'paper':
            outcome.textContent = `${y} beats ${x}`;
            final.textContent = "You Win!!";
            final.style.background = 'green';
            return ('win')
            break;
        // default:
        //     console.log('Please choose again');
        //     playRound();
    }
}

function game(){
    let win = 0;
    for (let i=1; i<=5; i++) {
        let x = playRound();
        if (x == 'win') {
            // console.log(`you have won round ${i}/5`);
            outcome.textContent = `you have won round ${i}/5`
            win ++;
        }
        else if (x == 'loss'){
            console.log(`You lost round ${i}/5`)
        }
        else if (x=='tie'){
            console.log(`Round ${i}/5 is a tie`)
        }
        else{
            console.log(`You chose a non existent weapon, you lose round ${i}/5`);
        }
    }
    if (win>2){
        return (`You have won ${win} rounds in total and you have beaten the computer`);
    } 
    else if (win<3 && win>0){
        return (`You have only won ${win} of 5 rounds, and you have lost`);
    }
    else{
        return ("You haven't won any round, and you have lost against the computer")
    }
}



button.addEventListener('click',playRound);
enter.addEventListener('click', e=>{
    playerChoice.textContent = player.value
})
