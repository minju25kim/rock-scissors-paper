//grab the buttons from html
const userButtons = document.querySelectorAll(".move-button");

//get the computer-choice and outcome elements from html

const computerChoice = document.querySelector("#computer-choice");
const outcomeText = document.querySelector(".outcome-text");

// user chooses a move:

userButtons.forEach((element) => {
  element.addEventListener("click", userMove);
});

//assign the user's choice to a variable

const userChoice = (event) => {
  //identify the target
  const userChoice = event.target.textContent;
  return `user chose: ${userChoice}`;
};

//generate a move for the computer

//work out the winner

//display the winner

function userMove(event) {
  //   console.log(event);
  outcomeText.textContent = userChoice(event);
}
