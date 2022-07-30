const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const cupOneEl = document.getElementById('cup-one');
const cupTwoEl = document.getElementById('cup-two');
const cupThreeEl = document.getElementById('cup-three');
const resetButtonEl = document.getElementById('reset-button');
const startOverBtn = document.getElementById('start-over');
let correctGuesses = document.getElementById('correct-guesses');
let totalGuesses = document.getElementById('total-guesses');
let incorrectGuesses = document.getElementById('incorrect-guesses');

const cupImages = [cupOneEl, cupTwoEl, cupThreeEl];

let correctGuess = 0;
let incorrectGuess = 0;
let totalGuess = 0;

function resetCups() {
    cupOneEl.src = './assets/graycup.png';
    cupTwoEl.src = './assets/graycup.png';
    cupThreeEl.src = './assets/graycup.png';
}

function getRandomCup() {
    const answer = Math.floor(Math.random() * 3);
    return answer;
}

function handleGuess(userGuess, rightAnswer) {
    resetCups();
    getRandomCup();
    cupImages[rightAnswer].src = './assets/graycupguy.png';
    if (userGuess === rightAnswer) {
        correctGuess++;
        totalGuess++;
        correctGuesses.textContent = correctGuess;
        totalGuesses.textContent = totalGuess;
    } else {
        incorrectGuess++;
        totalGuess++;
        incorrectGuesses.textContent = incorrectGuess;
        totalGuesses.textContent = totalGuess;
    }
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;

}

buttonOne.addEventListener('click', () => {
    handleGuess(0, getRandomCup());
}),

buttonTwo.addEventListener('click', () => {
    handleGuess(1, getRandomCup());
}),

buttonThree.addEventListener('click', () => {
    handleGuess(2, getRandomCup());
}),

resetButtonEl.addEventListener('click', () => {
    cupOneEl.src = 'assets/graycup.png';
    cupTwoEl.src = 'assets/graycup.png';
    cupThreeEl.src = 'assets/graycup.png';
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
});

startOverBtn.addEventListener('click', () => {
    cupOneEl.src = 'assets/graycup.png';
    cupTwoEl.src = 'assets/graycup.png';
    cupThreeEl.src = 'assets/graycup.png';
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
    correctGuesses.textContent = 0;
    incorrectGuesses.textContent = 0;
    totalGuesses.textContent = 0;
});
