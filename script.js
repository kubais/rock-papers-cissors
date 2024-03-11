function getComputerChoice() {
   let randomEnd = 3
   let randomChoice = Math.floor(Math.random() * randomEnd) + 1;

   if (randomChoice === 1) {
       return "Rock"
   }
   else if (randomChoice === 2) {
       return "Paper"
   }
   else if (randomChoice === 3) {
       return "Scissors"
   }
};
const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const para = document.querySelector("p");
const scoreElement = document.querySelector('#scores')
const displayResult = document.querySelector("#displayResult");
let playerScore = 0;
let computerScore = 0;

buttons[0].addEventListener('click', function playRock() {
   const playerSelection = "Rock";
   const computerSelection = getComputerChoice();
   para.textContent = `ComputerSelection: ${computerSelection}`;
   div.appendChild(para);
   if (playerSelection === "Rock" && computerSelection === "Scissors") {
       playerScore++
   }
   else if (playerSelection === computerSelection);

   else {
       computerScore++
   };

   scoreElement.textContent = `PlayerScore: ${playerScore} -  ComputerScore: ${computerScore}`;

   if (playerScore === 5) {
       displayResult.textContent = "You Win!";
       div.appendChild(displayResult);
   }
   else if (computerScore === 5) {
       displayResult.textContent = "You Lose!";
       div.appendChild(displayResult);
   };

   disableButton = () => {
       if (playerScore === 5 || computerScore === 5) {
           buttons.forEach(button => {
               button.disabled = true;
           });
       }
   }
   disableButton();

});


buttons[1].addEventListener('click', function playPaper() {
   const playerSelection = "Paper";
   const computerSelection = getComputerChoice();
   para.textContent = `ComputerSelection: ${computerSelection}`;
   div.appendChild(para);

   if (playerSelection === "Paper" && computerSelection === "Scissors") {
       computerScore++
   }
   else if (playerSelection === computerSelection) {

   }

   else {
       playerScore++
   }
   scoreElement.textContent = `PlayerScore: ${playerScore}  -  ComputerScore: ${computerScore}`;
   if (playerScore === 5) {
       displayResult.textContent = "You Win!";
       div.appendChild(displayResult);
   }
   else if (computerScore === 5) {
       displayResult.textContent = "You Lose!";
       div.appendChild(displayResult);
   };


   disableButton = () => {
       if (playerScore === 5 || computerScore === 5) {
           buttons.forEach(button => {
               button.disabled = true;
           });
       }
   }
   disableButton();
});

buttons[2].addEventListener('click', function playScissors() {
   const playerSelection = "Scissors";
   const computerSelection = getComputerChoice();
   para.textContent = `ComputerSelection: ${computerSelection}`;
   div.appendChild(para);
   if (playerSelection === "Scissors" && computerSelection === "Rock") {
       computerScore++
   }
   else if (playerSelection === computerSelection) {

   }

   else {
       playerScore++
   }
   scoreElement.textContent = `PlayerScore: ${playerScore}  -  ComputerScore: ${computerScore}`;

   if (playerScore === 5) {
       displayResult.textContent = "You Win!";
       div.appendChild(displayResult);
   }
   else if (computerScore === 5) {
       displayResult.textContent = "You Lose!";
       div.appendChild(displayResult);
   };

   disableButton = () => {
       if (playerScore === 5 || computerScore === 5) {
           buttons.forEach(button => {
               button.disabled = true;
           });
       }
   }
   disableButton();
});


// could not rework it with buttons and divs on my own - took the script from Bright-Anyawe: https://github.com/Bright-Anyawe/Odin-javascript-Project/blob/main/odin-project.js



// rock.addEventListener('click', () => {
//    playRound(playerSelection ='rock', getComputerChoice());
// });

// paper.addEventListener('click', () => {
//    playRound(playerSelection ='paper', getComputerChoice());
// });

// scissors.addEventListener('click', () => {
//    playRound(playerSelection ='scissors', getComputerChoice());
// // });

// function playRound(playerSelection, computerSelection) {
   
//    counter = 0;
//    let roundResult = '';
//     console.log('computer chose: ', computerSelection);
//     console.log('player chose: ', playerSelection);

//     if (playerSelection == computerSelection) {
//         roundResult.textContent = "Result is a tie!";
//         counter += 0;
//         } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
//             roundResult.textContent = "You lose! Paper beats rock";
//             counter += -1;
//         }      
//          else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
//             roundResult = "You win! Rock beats Scissors";    
//             counter += 1;
//          }

//          else if ((playerSelection == "paper") && (computerSelection == "rock")) {
//             roundResult = "You win! Paper beats rock";    
//             counter += 1;
//          }
//          else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
//             roundResult = "You Lose! Scissors beat paper";    
//             counter += -1;
//          }
//          else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
//             roundResult = "You lose! Rock beats Scissors";    
//             counter += -1;
//          }
//          else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
//             roundResult = "You win! Scissors beat paper";    
//             counter += 1;
//          }
//     console.log(roundResult);
//     console.log(counter);
//     const container = document.querySelector("#container");
//     const divResult = document.createElement('div');
//     divResult.textContent = '${roundResult}';
//     container.appendChild(divResult);
//     const divCounter = document.createElement('div');
//     divCounter.textContent = '${counter}';
//     container.appendChild(divCounter);
    
//     return roundResult, counter; 
    
//     }


    

    



// // function playGame() {
// //     playRound();
// //     playRound();
// //     playRound();
// //     playRound();
// //     playRound();
// //     if (counter >= 3) {
// //         alert("You won the game!");
// //         } 
// //     else alert("You lost the game, maybe next time");
// // }



// //  const playerSelection = "rock";
// //  const computerSelection = getComputerChoice();
// //  console.log(playRound(playerSelection, computerSelection));

