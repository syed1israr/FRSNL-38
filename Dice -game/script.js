var rollButton = document.querySelector('.roll');
var holdButton = document.querySelector('.Hold');
var leftside = document.querySelector('.left');
var rightside = document.querySelector('.right');
var player1Total = document.querySelector('.left .total');
var player2Total = document.querySelector('.right .total');
var player1Current = document.querySelector('.left .curr');
var player2Current = document.querySelector('.right .curr');
var currentPlayer = 1;
var currentScore = 0;
var player1Score = 0;
var player2Score = 0;
const maxScore = 20;
const diceImages = [
    'DS-1.png',
    'DS-2.png',
    'DS-3.png',
    'DS-4.png',
    'DS-5.png',
    'DS-6.png',
];

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6);

    let currentPlayerScore;

    if (currentPlayer === 1) {
        currentPlayerScore = player1Score;
    } else {
        currentPlayerScore = player2Score;
    }

   
    const diceImage = document.querySelector('.img_box img');
    diceImage.src = diceImages[diceRoll];

    const isOneRolled = diceRoll === 0;
    const isScoreBelowMax = currentScore + currentPlayerScore < maxScore;
    if (!isOneRolled && isScoreBelowMax) {
        currentScore += diceRoll + 1;
        if (currentPlayer === 1) {
            player1Current.textContent = currentScore;
        } else {
            player2Current.textContent = currentScore;
        }
    } else {
        switchPlayer();
    }
}

rollButton.addEventListener('click', rollDice);

function switchPlayer() {
    currentScore = 0;
    if (currentPlayer === 1) {
        player1Score += currentScore;
        player1Total.textContent = player1Score;
        currentPlayer = 2;
        player1Current.textContent = '0';
    } else {
        player2Score += currentScore;
        player2Total.textContent = player2Score;
        currentPlayer = 1;
        player2Current.textContent = '0';
    }
    if (player1Score >= maxScore || player2Score >= maxScore) {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
    }
}
function holup(){
  if (currentPlayer === 1) {
        player1Score += currentScore;
        player1Total.textContent = player1Score;
    } else {
        player2Score += currentScore;
        player2Total.textContent = player2Score;
    }
    if (player1Score >= maxScore || player2Score >= maxScore) {
        alert(`Player ${currentPlayer} wins!`);
        leftside.style.backgroundColor = "white";
        rightside.style.backgroundColor = "blue";

        resetGame();
    } else {
        leftside.style.backgroundColor = "aqua";
        rightside.style.backgroundColor = "rgb(146, 40, 40)";
        switchPlayer();
    }
}


holdButton.addEventListener('click',holup);
    
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    currentScore = 0;
    player1Total.textContent = '0';
    player2Total.textContent = '0';
    player1Current.textContent = '0';
    player2Current.textContent = '0';
    document.querySelector('.img_box img').src = 'dice1.png';
}
