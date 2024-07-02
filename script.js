// Initialize scores for global scope
let userScore = 0;
let computerScore = 0;
let playerScore_p = document.querySelector(".playerScore");
let computerScore_p = document.querySelector(".computerScore");
let result = document.querySelector(".result");
// gathering each button into list for easier listener assignment
const buttons = document.querySelectorAll("input");


// Returns computer choice depending on random number generated.
// Changed to a cleaner code look.
function getComputerChoice() {
  // Using array for selection of choice in random number instead of if...else
  let choices = ["rock", "paper", "scissors"];
  // returning choice based on array index using random number/floor
  return choices[Math.floor(Math.random() * choices.length)];
};


// Player choice dependent on what button is pushed.
// Input elements, each having a different value attribute.
// Event listener will trigger on click, using value attribute as choice.
buttons.forEach(button =>{
  button.addEventListener('click', function(){
    playRound(button.value);
  })
});

function playerScore() {
  userScore += 1;
  playerScore_p.textContent = `Player Score: ${userScore}`;
}

function pcScore() {
  computerScore += 1;
  computerScore_p.textContent = `Computer Score: ${computerScore}`;
}

function checkWinCondition() {
  if (userScore === 4) {
    result.textContent = "Game Over. You Win!"
    return true;
  } else if (computerScore === 4) {
    result.textContent = "Game Over. You Lose...."
    return true;
  } else {
    return false;
  }
}


function playRound(playerChoice) {
  let pcChoice = getComputerChoice();
  const pcChoiceDisplay = document.querySelector(".computerChoice");
  const playerChoiceDisplay = document.querySelector(".playerChoice");

  pcChoiceDisplay.textContent = `Computer Choice: ${pcChoice}`;
  playerChoiceDisplay.textContent = `Player Choice: ${playerChoice}`;

  if (playerChoice === pcChoice) {
    result.textContent = "You both chose the same one! It's a tie.";
  } else if (playerChoice === "rock" && pcChoice === "scissors" || playerChoice === "paper" && pcChoice === "rock" || playerChoice === "scissors" && pcChoice === "paper") {
      if (!checkWinCondition()) {
        result.textContent = "You Win!";
        playerScore();
    }
  } else {
      if (!checkWinCondition()){
        result.textContent = "You lose...";
        pcScore();
      }
  }
  };








function playGame() {

  
function playRoun(choice) {
    let humanSelection = choice;
    let computerSelection = getComputerChoice();
    let result;

    if (humanSelection === computerSelection) {
        result = "It's a Tie! No one scores this round";
        console.log(result);
    } else if ((humanSelection === "rock" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "rock")) {
        result = "The computer wins! You lose.";
        computerScore++;
        console.log(result);
    } else if ((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")) {
        result = "The computer loses! You win!";
        humanScore++;
        console.log(result);
    } else {
        console.log("You may need to play again.....");
    }
    
}



return;
}

playGame();