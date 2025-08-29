'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let playerScore = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('📛 No number!');
    
        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('✨ Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#00A86B';
        document.querySelector('.number').style.width = '30rem';

        if (playerScore > highscore) {
            highscore = playerScore;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
 if (playerScore > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            playerScore--;
            document.querySelector('.score').textContent = playerScore;
        } else {
             displayMessage('💥 You lost the game. Try again');
             document.querySelector('.score').textContent = 0;
             document.querySelector('body').style.backgroundColor = '#960018';
        }
    } 
});

document.querySelector('.again').addEventListener('click', function() {
    playerScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = playerScore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});