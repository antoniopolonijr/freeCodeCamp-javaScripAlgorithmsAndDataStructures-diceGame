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
let score = 0; // Throughout the game, you will need to keep track of the current score, total score, number of rolls and which round the player is on
let round = 1;
let rolls = 0;

// When the user clicks on the Show rules button, the rules for the game should display on the screen. When they click on the button again, the rules should be hidden.
rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing; // to invert the value of a boolean.
  rulesContainer.style.display = isModalShowing ? "block" : "none"; // show or hide the cart
  rulesBtn.textContent = isModalShowing ? "Hide rules" : "Show rules"; // change the buttom text
});
