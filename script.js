//grab the buttons from html
const userButtons = document.querySelectorAll(".move-button");

//get the computer-choice and outcome elements from html

const computerChoice = document.querySelector("#computer-choice");
const outcomeText = document.querySelector(".outcome-text");

// user chooses a move:

userButtons.forEach((element) => {
  element.addEventListener("click", updateDOM);
});

//assign the user's choice to a variable

const getUserChoice = (event) => {
  //identify the target
  return event.target.textContent;
};

//generate a move for the computer
const getCompChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * 3);
  computerChoice.innerText = choices[index];
  return choices[index];
};

//work out the winner

const calculateWinner = (event) => {
  const userChoice = getUserChoice(event);
  const compChoice = getCompChoice();

  //check if it is a tie
  if (userChoice === compChoice) {
    return "It is a tie!";
  }
  //else, check user choice

  //check if win or lose(depends on the computer choice)
};

//display the winner
function updateDOM(event) {
  outcomeText.textContent = calculateWinner(event);
}
