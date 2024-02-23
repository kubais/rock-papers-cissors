let counter = 0;
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

let playerSelection = '';
const computerSelection = getComputerChoice();

function getComputerChoice() {
   
   let result = ["rock","paper","scissors"][Math.floor(Math.random() * 3)];
    
   return result;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please enter your choice: rock, paper, scissors").toLowerCase();
    computerSelection = getComputerChoice();
    console.log('computer chose: ', computerSelection);
    console.log('player chose: ', playerSelection);

    if (playerSelection == computerSelection) {
        roundResult = "Result is a tie!";
        counter += 0;
        } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
            roundResult = "You lose! Paper beats rock";
            counter += -1;
        }      
         else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
            roundResult = "You win! Rock beats Scissors";    
            counter += 1;
         }

         else if ((playerSelection == "paper") && (computerSelection == "rock")) {
            roundResult = "You win! Paper beats rock";    
            counter += 1;
         }
         else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
            roundResult = "You Lose! Scissors beat paper";    
            counter += -1;
         }
         else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
            roundResult = "You lose! Rock beats Scissors";    
            counter += -1;
         }
         else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
            roundResult = "You win! Scissors beat paper";    
            counter += 1;
         }
    console.log(roundResult);
    console.log(counter);
    return roundResult, counter; 
    
    

    }

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (counter >= 3) {
        alert("You won the game!");
        } 
    else alert("You lost the game, maybe next time");
}



//  const playerSelection = "rock";
//  const computerSelection = getComputerChoice();
//  console.log(playRound(playerSelection, computerSelection));

