'use strict';

const newGame = document.querySelector('.btn--new')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const dice = document.querySelector('.dice')
const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

let currentScore, playerScore, activePlayer, playing

const init = function () {

    currentScore = 0;
    playerScore = [0, 0];
    activePlayer = 0;
    playing = true

    score0.textContent = 0
    score1.textContent = 0
    current0.textContent = 0
    current1.textContent = 0

    dice.classList.add('hidden')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')

}
init();

const switchPlayer = function () {

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')


};

const rollDice = function () {
    if (playing) {
        const value = Math.trunc(Math.random() * 6 + 1)

        dice.src = `dice-${value}.png`;

        if (dice.classList.contains('hidden'))
            dice.classList.remove('hidden');

        if (value !== 1) {
            currentScore += value;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
};

const holdPress = function () {
    if (playing) {

        playerScore[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = playerScore[activePlayer];

        if (playerScore[activePlayer] < 100) {

            switchPlayer();
        } else {

            playing = false;
            dice.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }
    }
};

roll.addEventListener('click', rollDice);
hold.addEventListener('click', holdPress)
newGame.addEventListener('click', init)

