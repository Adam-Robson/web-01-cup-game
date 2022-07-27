// import functions and grab DOM elements
const buttonOneEl = document.getElementById('button-one');
const buttonTwoEl = document.getElementById('button-two');
const buttonThreeEl = document.getElementById('button-three');
const cupOneEl = document.getElementById('cup-one');
const cupTwoEl = document.getElementById('cup-two');
const cupThreeEl = document.getElementById('cup-three');
const resetButtonEl = document.getElementById('reset-button');
let correctGuessesEl = document.getElementById('correct-guesses-number');
let totalResultsEl = document.getElementById('total-results-number');
let incorrectGuessesEl = document.getElementById('incorrect-guesses-number');
const startOverBtn = document.getElementById('start-over');
let correctGuesses = 0;
let incorrectGuesses = 0;
let totalResults = 0;
const cupImages = [cupOneEl, cupTwoEl, cupThreeEl];

function handleGuess(userGuess) {
    resetStyles();
    const randomIndex = Math.floor(Math.random() * cupImages.length);
    const randomCupImage = cupImages[randomIndex];
    randomCupImage.src = './assets/graycupguy.png';
    if (randomIndex === userGuess) {
        correctGuesses++;
        totalResults++;
    } else {
        incorrectGuesses++;
        totalResults++;
    }
    correctGuessesEl.textContent = correctGuesses;
    incorrectGuessesEl.textContent = incorrectGuesses;
    totalResultsEl.textContent = totalResults;
}
function activateCupButtons() {
    buttonOneEl.disabled = false;
    buttonTwoEl.disabled = false;
    buttonThreeEl.disabled = false;
}
function resetStyles() {
    cupOneEl.src = './assets/graycup.jpg';
    cupTwoEl.src = './assets/graycup.jpg';
    cupThreeEl.src = './assets/graycup.jpg';
    buttonOneEl.disabled = true;
    buttonTwoEl.disabled = true;
    buttonThreeEl.disabled = true;
}
// set event listeners 
buttonOneEl.addEventListener('click', () => {
    handleGuess(0);
});

buttonTwoEl.addEventListener('click', () => {
    handleGuess(1);
});

buttonThreeEl.addEventListener('click', () => {
    handleGuess(2);
});

resetButtonEl.addEventListener('click', () => {
    resetStyles();
    activateCupButtons();

});
startOverBtn.addEventListener('click', () => {
    resetStyles();
    activateCupButtons();
    totalResultsEl.textContent = 0;
    correctGuessesEl.textContent = 0;
    incorrectGuesses.textContent = 0;

});
// get user input
// use user input to update state
// update DOM to reflect the new state

