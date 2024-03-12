function getComputerChoice() {
   
   let result = ["rock","paper","scissors"][Math.floor(Math.random() * 3)];
    
   return result;
}

const Rock = document.querySelector('#Rock');
const Paper = document.querySelector('#Paper');
const Scissors = document.querySelector('#Scissors');
const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const para = document.querySelector("p");
const scoreElement = document.querySelector('#scores')
const displayResult = document.querySelector("#displayResult");
let playerScore = 0;
let computerScore = 0;
const playerSelection = '';

Rock.addEventListener('click', () => {
   const playerSelection ='Rock';
   const computerSelection = getComputerChoice();

   
   para.textContent = `Computer selected: ${computerSelection}`;
   div.appendChild(para);
   if (playerSelection === "Rock" && computerSelection === "Scissors") {
       playerScore++
   }
   else if (playerSelection === computerSelection);

   else {
       computerScore++
   };

   scoreElement.textContent = `Player's score: ${playerScore}  x  Computer's score: ${computerScore}`;

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


Paper.addEventListener('click', () => {
   const playerSelection = "Paper";
   const computerSelection = getComputerChoice();

   para.textContent = `Computer selected: ${computerSelection}`;
   div.appendChild(para);

   if (playerSelection === "Paper" && computerSelection === "Scissors") {
       computerScore++
   }
   else if (playerSelection === computerSelection) {

   }

   else {
       playerScore++
   }
   scoreElement.textContent = `Player's score: ${playerScore}  x  Computer's score: ${computerScore}`;
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

Scissors.addEventListener('click', () => {
   const playerSelection = "Scissors";
   const computerSelection = getComputerChoice();
   para.textContent = `Computer selected: ${computerSelection}`;
   div.appendChild(para);
   if (playerSelection === "Scissors" && computerSelection === "Rock") {
       computerScore++
   }
   else if (playerSelection === computerSelection) {

   }

   else {
       playerScore++
   }
   scoreElement.textContent = `Player's score: ${playerScore}  x  Computer's score: ${computerScore}`;

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


