const selectionButtons = document.querySelectorAll('[data-Selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-com-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
       const selectionName = selectionButton.dataset.selection;
       const selection = SELECTIONS.find(selection => selection.name === selectionName);
       makeSelection(selection);
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection();
    const youWinner = isWinner(selection, computerSelection);
    const comWinner = isWinner(computerSelection, selection);
    
    addSelectionResult(computerSelection, comWinner);
    addSelectionResult(selection, youWinner);

    if(youWinner) incrementScore(yourScoreSpan);
    if(comWinner) incrementScore(computerScoreSpan);
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
    return selection.beats == opponentSelection.name;
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}

function sendHome() {
    window.location.href = "main.html";
}

function sendGame() {
    window.location.href = "game.html";
}