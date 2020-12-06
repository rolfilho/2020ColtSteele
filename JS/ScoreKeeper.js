let P1 = {
    score: 0,
    spanScore: document.querySelector('#scoreP1'),
    btnplusOne: document.querySelector('#plusOneP1')
};

let P2 = {
    score: 0,
    spanScore: document.querySelector('#scoreP2'),
    btnplusOne: document.querySelector('#plusOneP2')
};

let btnReset = document.querySelector('#btnReset');

//Calculation of Max Score
let scoreOptions = document.querySelector('#scoreOptions');
let maxScore = 3;
scoreOptions.addEventListener('change', () => {
    maxScore = Math.floor(scoreOptions.value / 2) + 1;
});

//Functions
function updateScores(winner, loser) {
    winner.score++;
    winner.spanScore.innerText = winner.score;
    if (winner.score == maxScore) {
        winner.spanScore.classList.toggle('green');
        loser.spanScore.classList.toggle('red');
        winner.btnplusOne.disabled = true;
        loser.btnplusOne.disabled = true;
    }
}

function resetPlayers(player) {
    player.score = 0;
    player.spanScore.innerText = '0';
    player.spanScore.classList.remove('red');
    player.spanScore.classList.remove('green');
    player.btnplusOne.disabled = false;
}

//Event Listeners
P1.btnplusOne.addEventListener('click', () => {
    updateScores(P1, P2);
});

P2.btnplusOne.addEventListener('click', () => {
    updateScores(P2, P1);
});

btnReset.addEventListener('click', () => {
    resetPlayers(P1);
    resetPlayers(P2);
});
