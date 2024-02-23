function getComputerChoice() {
   
   let result = ["rock","paper","scissors"][Math.floor(Math.random() * 3)];

   console.log(result);  
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please enter your choice: rock, paper, scissors");
    computerSelection = getComputerChoice();
    
    if ((playerSelection = "rock") && (computerSelection = "paper")) {
          alert("You lose! Paper beats rock");
    }      
        else if ((playerSelection = "rock") && (computerSelection = "scissors")) {
            alert("You win! Rock beats Scissors");    
        }

        else if ((playerSelection = "rock") && (computerSelection = "rock")) {
            alert("Tie! Rock equals rock");    
        }

    

    }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

