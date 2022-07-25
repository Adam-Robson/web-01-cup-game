// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const cupImgOne = document.getElementById('cup-one');
const cupImgTwo = document.getElementById('cup-one');
const cupImgThree = document.getElementById('cup-one');
const resultsEl = document.getElementById('results-element');
const resetButtonEl = document.getElementById('reset-button');

// let state

let correctGuesses = 0;
let incorrectGuesses = 0;
const cupImages = [cupImgOne, cupImgTwo, cupImgThree];

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state

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
    cupImgOne.src = 'assets/cup-one.png';
    cupImgTwo.src = 'assets/cup-one.png';
    cupImgThree.src = 'assets/cup-one.png';

    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
});


function handleGuess(userGuess) {
    const randomIndex = Math.floor(Math.random() * cupImages.length);
    const randomCupImage = cupImages[randomIndex];
    randomCupImage.src = 'assets/correct-cup.png';
    if (randomIndex === userGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }

    resultsEl.textContent = `Correct guesses: ${correctGuesses} | Incorrect guesses: ${incorrectGuesses}`;

    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
}