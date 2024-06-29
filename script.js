function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let pcChoice;
  console.log(num);

  if (num === 0) {
      pcChoice = "rock";
  } else if (num === 1) {
      pcChoice = "paper";
  } else {
      pcChoice = "scissors";
  };
  console.log(pcChoice);

  return pcChoice;
};
// HUMAN CHOICE IS NOW DEFINED BY THE BUTTON PRESS IN THE UI
// function getHumanChoice() {
//     let humanChoice = prompt("Rock. Paper. Or Scissor?").toLowerCase();
//     console.log(humanChoice);
//     return humanChoice;
// }

function playGame() {

let humanScore = 0;
let computerScore = 0;

rock = document.querySelector(".rock");
paper = document.querySelector(".paper");
scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

  
function playRound(choice) {
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