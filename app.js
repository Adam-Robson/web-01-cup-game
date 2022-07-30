const buttonOneEl = document.getElementById('button-one');
const buttonTwoEl = document.getElementById('button-two');
const buttonThreeEl = document.getElementById('button-three');
const cupOneEl = document.getElementById('cup-one');
const cupTwoEl = document.getElementById('cup-two');
const cupThreeEl = document.getElementById('cup-three');
const resetButtonEl = document.getElementById('reset-button');
const startOverBtn = document.getElementById('start-over');

let correctGuesses = document.getElementById('correct-guesses');
let totalGuesses = document.getElementById('total-guesses');
let incorrectGuesses = document.getElementById('incorrect-guesses');

const cupImages = [cupOneEl, cupTwoEl, cupThreeEl];


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
    cupOneEl.src = 'assets/graycup.png';
    cupTwoEl.src = 'assets/graycup.png';
    cupThreeEl.src = 'assets/graycup.png';
    buttonOneEl.disabled = false;
    buttonTwoEl.disabled = false;
    buttonThreeEl.disabled = false;
});

startOverBtn.addEventListener('click', () => {
    cupOneEl.src = 'assets/graycup.png';
    cupTwoEl.src = 'assets/graycup.png';
    cupThreeEl.src = 'assets/graycup.png';
    buttonOneEl.disabled = false;
    buttonTwoEl.disabled = false;
    buttonThreeEl.disabled = false;
    correctGuesses.textContent = 0;
    incorrectGuesses.textContent = 0;
    totalGuesses.textContent = 0;
});

let correctGuess = 0;
let incorrectGuess = 0;
let totalGuess = 0;

function handleGuess(userGuess) {
    resetStyles();
    const randomIndex = Math.floor(Math.random() * cupImages.length);
    cupImages[randomIndex].src = './assets/graycupguy.png';
    if (userGuess === randomIndex) {
        correctGuess++;
        totalGuess++;
    } else {
        incorrectGuess++;
        totalGuess++;
    }
    correctGuesses.textContent = correctGuess;
    incorrectGuesses.textContent = incorrectGuess;
    totalGuesses.textContent = totalGuess;

    buttonOneEl.disabled = true;
    buttonTwoEl.disabled = true;
    buttonThreeEl.disabled = true;
}

function resetStyles() {
    cupOneEl.src = './assets/graycup.png';
    cupTwoEl.src = './assets/graycup.png';
    cupThreeEl.src = './assets/graycup.png';
    buttonOneEl.disabled = false;
    buttonTwoEl.disabled = false;
    buttonThreeEl.disabled = false;
}
