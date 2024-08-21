// set up HTML variables

const listOfAllDice = document.querySelectorAll(".die"); // Get all of your .die elements and assign them to a listOfAllDice variable
const scoreInputs = document.querySelectorAll("#score-options input"); //  Get your score inputs (the input elements in your #score-options)
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = []; // Each time the user rolls the dice, you will need to keep track of all of the dice values.
let isModalShowing = false; // When the user clicks on the Show rules button, they should be able to toggle between showing and hiding the game rules.

// Throughout the game, you will need to keep track of the current score, total score, number of rolls and which round the player is on
let score = 0;
let round = 1;
let rolls = 0;

// roll the Dice
const rollDice = () => {
  // Clear the diceValuesArr
  diceValuesArr = []; // diceValuesArr is cleared every time rollDice() is called to ensure only the latest dice values are stored.

  // Generate five random numbers between 1 and 6
  for (let i = 0; i < 5; i++) {
    // loop runs five times
    const randomValue = Math.floor(Math.random() * 6) + 1; // generating a random number between 1 and 6 on each iteration
    diceValuesArr.push(randomValue); // these numbers are pushed into the diceValuesArr.
  }

  // Display the numbers in order in the listOfAllDice elements
  diceValuesArr.sort((a, b) => a - b); // The diceValuesArr is sorted in ascending order
  listOfAllDice.forEach((element, index) => {
    element.textContent = diceValuesArr[index];
  }); // The listOfAllDice elements are updated with the sorted values from diceValuesArr. The forEach loop iterates through these elements and sets their textContent to the corresponding value.
};

const updateStats = () => {
  rollsElement.textContent = rolls; // update rolls on the page
  roundElement.textContent = round; // update round on the page
};

// When the user clicks on the Roll the dice button, five random die numbers should be generated and displayed on the screen.
// For each round in the game, users are allowed to roll the dice a maximum of three times
rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    // If a user clicks the rollDiceBtn but has already made three rolls
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++; // increment the rolls variable.
    rollDice();
    updateStats();
  }
});

// When the user clicks on the Show rules button, the rules for the game should display on the screen. When they click on the button again, the rules should be hidden.
rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing; // invert the value of a boolean.
  rulesContainer.style.display = isModalShowing ? "block" : "none"; // show or hide the cart
  rulesBtn.textContent = isModalShowing ? "Hide rules" : "Show rules"; // change the buttom text
});
