// import functions and grab DOM elements
const buttonOneEl = document.getElementById('button-one');
const buttonTwoEl = document.getElementById('button-two');
const buttonThreeEl = document.getElementById('button-three');
const cupOneEl = document.getElementById('cup-one');
const cupTwoEl = document.getElementById('cup-two');
const cupThreeEl = document.getElementById('cup-three');
const resetButtonEl = document.getElementById('reset-button');
const resultsEl = document.getElementById('results-element');
const totalResultsEl = document.getElementById('total-results');

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalResults = 0;
const cupImages = [cupOneEl, cupTwoEl, cupThreeEl];

function handleGuess(userGuess) {
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

    resultsEl.textContent = `Correct guesses: ${correctGuesses} | Incorrect guesses: ${incorrectGuesses}`;
    totalResultsEl.textContent = `Total games played: ${totalResults}`;

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
    cupOneEl.src = 'assets/graycup.jpg';
    cupTwoEl.src = 'assets/graycup.jpg';
    cupThreeEl.src = 'assets/graycup.jpg';

    buttonOneEl.disabled = false;
    buttonTwoEl.disabled = false;
    buttonThreeEl.disabled = false;
});
// get user input
// use user input to update state
// update DOM to reflect the new state

