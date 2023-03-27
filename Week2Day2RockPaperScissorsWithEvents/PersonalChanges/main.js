// Get the game choices buttons and the result element
// Choosing the class rock, paper and scissors (the buttons on the html file)
// Choosing the class result (the result in the div .game-result on the html file)
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultEl = document.querySelector('.result');

// Add click event listeners to the game choices buttons
// When clicking on the button, the function playGame is called with the argument of the button clicked (rock, paper or scissors)
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

// Function to play the game
function playGame(userChoice) {
  // Generate a random computer choice
  const choices = ['rock', 'paper', 'scissors']; // Array of computer choices
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Generate random choice from the array of choices

  // Determine the winner
  let result; // Declaring the variable result
  //Conditions to determine the winner (all possibe outcomes)
  if (userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper') {
    result = 'You Win!';
  } else if (userChoice === computerChoice) {
    result = 'Tie!';
  } else {
    result = 'Computer Wins!';
  }

  // Show the result and play again button
  resultEl.textContent = `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`;
  resultEl.parentElement.style.display = 'block';
}

// Add click event listener to the play again button
const playAgainBtn = document.querySelector('.play-again');
playAgainBtn.addEventListener('click', () => {
  resultEl.parentElement.style.display = 'none';
});
/* Breaking down lines 40-42:
1. We are selecting the parent element of the result element (the div with the class game-result) 
2. We are changing the display property of the parent element to none, so that the result and play again button disappear
      function changePlayAgainBtnDisplay() {
        resultEl.parentElement.style.display = 'none';
      }
3. We are calling the function changePlayAgainBtnDisplay() when clicking on the play again button
      playAgainBtn.addEventListener('click', changePlayAgainBtnDisplay);
*/

/* Plan for player name input:
1. Make sure the input field is ready to accept the player name
2. Create a function that checks the player name length and returns the name if it is 10 characters or less
3. Add click event listener to the start game button and get it to call the playerName function
4. When the user enters a name that is 10 characters or less, with the click of the start game button the following happens:
    - the function alerts the user with the name they entered
    - the user name input field disappers and is replaced with a new simple text asking the user to choose rock, paper or scissors
    - the user can now choose rock, paper or scissors
    - the user can see the result of the game
    - the user can play again
SO the function will not only check the player name length, but also alert the user with the name they entered if it's 10 characters or less and then make the user name prompt disapper and be replaced with a new simple text asking the user to choose rock, paper or scissors
*/

// Create a function playerName
function playerName(name) {
  while (name.length > 10) { // While the user name is longer than 10 characters, the function keeps asking the user to enter a name using 10 characters or less
    // Change the placeholder text to "Enter your name using 10 characters or less." if the user keepts putting a name longer than 10 characters
    document.querySelector('placeholder').innerHTML = "Enter your name using 10 characters or less.";
  }
  if (name.length <= 10) {
      // When the user enters a name that is 10 characters or less, the function alerts the user with the name they entered
      alert(`Hello ${name}!`);
      // The user name input field disappers and is replaced with a new simple text asking the user to choose rock, paper or scissors
}
}

// After having add an input field on the html file (for the username input), create a function that:
// - Add a click event listener to the start game button
// - Store the value of the input field in a variable
// - Get it to call the playerName function and check the player name length
// - When the user enters a name that is 10 characters or less, the function alerts the user with the name they entered
// - The user name input field disappers and is replaced with a new simple text asking the user to choose rock, paper or scissors

let usernameInputField = document.querySelector('#username');
let placeholderText = document.querySelector('placeholder');
let username = usernameInputField.value;

function handleInput(event) {
  let usernameInputValue = event.target.value; // Store the value of the input field in a variable
}

const startGameBtn = document.querySelector('.start-game');
function handleStartGameBtnClick(event) {
  usernameInputField.addEventListener('input', handleInput); // When the user types in the input field, the function handleInput is called
  // Check the player name length
  while (usernameInputValue.length > 10) { // While the user name is longer than 10 characters, the function keeps asking the user to enter a name using 10 characters or less
    // Change the placeholder text to "Enter your name using 10 characters or less." if the user keeps putting a name longer than 10 characters
    placeholderText.innerHTML = "Enter your name using 10 characters or less.";
    }
  if (usernameInputValue.length <= 10) {
      // When the user enters a name that is 10 characters or less, the function alerts the user with the name they entered
      alert(`Hello ${usernameInputValue}!`);
      // The user name input field disappers and is replaced with a new simple text asking the user to choose rock, paper or scissors
      usernameInputField.style.display = 'none';
      placeholderText.style.display = 'none';
      startGameBtn.style.display = 'none';
      document.querySelector('.game-choices').style.display = 'block';
      document.querySelector('.game-result').style.display = 'block';
      // Create a new simple text asking the user to choose rock, paper or scissors
      const chooseRockPaperScissorsText = document.createElement('p');
      chooseRockPaperScissorsText.innerHTML = `Time to play, ${username}! Choose rock, paper or scissors.`;
  }
}

startGameBtn.addEventListener('click', handleStartGameBtnClick); // When the user clicks on the start game button, the function handleStartGameBtnClick is called

