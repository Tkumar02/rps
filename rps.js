
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const userChoice = document.querySelector('.userChoice')
const choices = document.querySelectorAll('.choices')
const computerChoice = document.querySelector('.computerChoice')
const result = document.querySelector('.result')
let playerWin = 0;
let computerWin = 0;
const pScore = document.querySelector('.pScore')
const cScore = document.querySelector('.cScore')
const final = document.querySelector('.final')

function getComputerChoice(){
    let rpsArray = ["rock","paper","scissors"];
    let randomElement = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    computerChoice.textContent = randomElement;
}

choices.forEach(choice=>{
    choice.addEventListener('click',function(e){
        userChoice.textContent = e.target.id
    })
})

function playRound(){
    getComputerChoice();
    let playerSelection = userChoice.textContent;
    let computerSelection = computerChoice.textContent;
    final.textContent = ""

    if (playerSelection == computerSelection){
        result.textContent = "It's a Tie";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection ==  'paper' && computerSelection == 'rock')){
        result.textContent = "You Win!"
        playerWin += 1;
    }
    else{
        result.textContent = "You lose :("
        computerWin +=1;
    }
    pScore.textContent = playerWin;
    cScore.textContent = computerWin;
    if (computerWin==5&&computerWin>playerWin){
        final.textContent = "COMPUTER WINS (select rock, paper or scissors to start a new game)";
        computerWin = 0;
        playerWin = 0;
        return
    }
    else if(playerWin==5 && playerWin>computerWin){
        final.textContent = "YOU WIN! (select rock, paper or scissors to start a new game)";
        computerWin = 0;
        playerWin = 0;
        return
    }
}

choices.forEach(choice=>{
    choice.addEventListener('click',playRound)
})








