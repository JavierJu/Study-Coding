


const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1ScoreBtn = document.querySelector('#p1ScoreBtn');
const p2ScoreBtn = document.querySelector('#p2ScoreBtn');
const resetBtn = document.querySelector('#resetBtn');
const playingScore = document.querySelector('#playingScore');
const winMessage = document.querySelector('#winMessage');

function handleScoreClick(player, scoreElement, scoreBtn) {
    if (parseInt(scoreElement.textContent) < parseInt(playingScore.value)) {
        scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
    }
    if (parseInt(scoreElement.textContent) === parseInt(playingScore.value)) {
        p1ScoreBtn.disabled = true;
        p2ScoreBtn.disabled = true;
        winMessage.innerText = `${player} Win!!`;
    }
}

p1ScoreBtn.addEventListener('click', function () {
    handleScoreClick('Player One', p1Score, p1ScoreBtn);
});

p2ScoreBtn.addEventListener('click', function () {
    handleScoreClick('Player Two', p2Score, p2ScoreBtn);
});

resetBtn.addEventListener('click', reset);

playingScore.addEventListener('change', reset);

function reset() {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    p1ScoreBtn.disabled = false;
    p2ScoreBtn.disabled = false;
    winMessage.innerText = '';
}