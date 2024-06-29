// Initialize scores for global scope
let humanScore = 0;
let computerScore = 0;
// 


// Returns computer choice depending on random number generated.
// Changed to a cleaner code look.
function getComputerChoice() {
  // Using array for selection of choice in random number instead of if...else
  let choices = ["rock", "paper", "scissors"];
  // returning choice based on array index using random number/floor
  return choices[Math.floor(Math.random() * choices.length)];
   
  // let num = Math.floor(Math.random() * 3);
  // let pcChoice;
  // console.log(num);

  // if (num === 0) {
  //     pcChoice = "rock";
  // } else if (num === 1) {
  //     pcChoice = "paper";
  // } else {
  //     pcChoice = "scissors";
  // };
  // console.log(pcChoice);

  // return pcChoice;
};

// Player choice dependent on what button is pushed.
// Input elements, each having a different value attribute.
// Event listener will trigger on click, using value attribute as choice.










function playGame() {



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