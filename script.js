let counter = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let playerSelection = '';
const computerSelection = getComputerChoice();

function getComputerChoice() {
   
   let result = ["rock","paper","scissors"][Math.floor(Math.random() * 3)];
    
   return result;
}

rock.addEventListener('click', () => {
   playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
   playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
   playRound('scissors', getComputerChoice());
});

function playRound(playerSelection, computerSelection) {
    
    console.log('computer chose: ', computerSelection);
    console.log('player chose: ', playerSelection);
    counter = 0;

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

    

    



// function playGame() {
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     if (counter >= 3) {
//         alert("You won the game!");
//         } 
//     else alert("You lost the game, maybe next time");
// }



//  const playerSelection = "rock";
//  const computerSelection = getComputerChoice();
//  console.log(playRound(playerSelection, computerSelection));

