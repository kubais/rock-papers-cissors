
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
        } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
            roundResult = "You lose! Paper beats rock";
        }      
         else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
            roundResult = "You win! Rock beats Scissors";    
         }

         else if ((playerSelection == "paper") && (computerSelection == "rock")) {
            roundResult = "You win! Paper beats rock";    
         }
         else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
            roundResult = "You Lose! Scissors beat paper";    
         }
         else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
            roundResult = "You lose! Rock beats Scissors";    
         }
         else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
            roundResult = "You win! Scissors beat paper";    
         }

    return roundResult;
         

    }

//  const playerSelection = "rock";
//  const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));

