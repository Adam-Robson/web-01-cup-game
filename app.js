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
let buttons = [buttonOne, buttonTwo, buttonThree];

let correctGuess = 0;
let incorrectGuess = 0;
let totalGuess = 0;

buttonOne.addEventListener('click', () => {
    handleGuess(0);
});

buttonTwo.addEventListener('click', () => {
    handleGuess(1);
});

buttonThree.addEventListener('click', () => {
    handleGuess(2);
});

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


// finally sank in
function getRandomItem(buttons) {
    return buttons[Math.floor(Math.random() * buttons.length)];
}



function handleGuess(userGuess, rightAnswer) {
    resetStyles();
    const randomIndex = Math.floor(Math.random() * cupImages.length);
    cupImages[randomIndex].src = './assets/graycupguy.png';
    rightAnswer = getRandomItem(buttons);
    if (userGuess === rightAnswer) {
        correctGuess++;
        correctGuesses.textContent = correctGuess;
        totalGuess++;
        totalGuesses.textContent = totalGuess;
    } else {
        incorrectGuess++;
        incorrectGuesses.textContent = incorrectGuess;
        totalGuess++;
        totalGuesses.textContent = totalGuess;
    }
}

function resetStyles() {
    cupOneEl.src = './assets/graycup.png';
    cupTwoEl.src = './assets/graycup.png';
    cupThreeEl.src = './assets/graycup.png';
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
}
