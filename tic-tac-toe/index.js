const currentPlayer = document.querySelector('.current__player');
const game = document.querySelector('.game');
const gameItem = [...document.querySelectorAll('.game__item')];

const itemsNames = {
    o: 'O',
    x: 'X'
}

let activePlayer = itemsNames.x;

const caseOfVictory = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let tableResultArr = [];

let move = 0;
let result = '';


const audio = new Audio();

function playAudio() {
    audio.currentTime = 0;
    audio.play();
}

game.addEventListener('click', makeStep)

function makeStep(event) {
    if(event.target.className === 'game__item' && event.target.textContent === '') {
        move % 2 === 0 ? event.target.textContent = itemsNames.x : event.target.textContent = itemsNames.o;
    
        event.target.style.opacity = '0.6';
        audio.src = `./assets/audio/click.mp3`;
        playAudio();

        move++;
        check();
        toogleActivePlayer();
    } 
}

function check() {
    for (let i = 0; i < caseOfVictory.length; i++) {
        if(gameItem[caseOfVictory[i][0]].textContent == itemsNames.x && gameItem[caseOfVictory[i][1]].textContent == itemsNames.x && gameItem[caseOfVictory[i][2]].textContent == itemsNames.x) {
            result = `Won by X in ${move} steps`;
            prepareResault(result);

            const newScore = +(victoryX.textContent) +1;
            localStorage.setItem('scoreX', newScore);

            leaderBoard();
            tableResultArr.unshift(result)
           
        } else if (gameItem[caseOfVictory[i][0]].textContent == itemsNames.o && gameItem[caseOfVictory[i][1]].textContent == itemsNames.o && gameItem[caseOfVictory[i][2]].textContent == itemsNames.o) {
            result = `Won by 0 in ${move} steps`;
            prepareResault(result);

            const newScore = +(victoryO.textContent) +1;
            localStorage.setItem('scoreO', newScore);

            leaderBoard();
            tableResultArr.unshift(result)
        } 
    }
    if (move == 9) {
        result = `Draw in ${move} steps`;
        prepareResault(result);
         
        const newScore = +(drawGame.textContent) +1;
        localStorage.setItem('scoreDraw', newScore); 

        leaderBoard();
        tableResultArr.unshift(result);
    }
}

function toogleActivePlayer() {
    activePlayer = activePlayer === itemsNames.x ? itemsNames.o : itemsNames.x;
    currentPlayer.textContent = `Current player is ${activePlayer}`
}

// modal result game start 

const modalResultGame = document.querySelector('.content');
const modalResultWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalBtnClose = document.querySelector('.modal__btn-close');

function prepareResault()  {
    modalResultWindow.style.display = 'block';
    modalResultGame.textContent = `${result}!`;
    audio.src = `./assets/audio/victory.mp3`;
    playAudio();
}

overlay.addEventListener('click', closeModal)
modalBtnClose.addEventListener('click', closeModal)

function closeModal() {
    modalResultWindow.style.display = 'none';
    location. reload(); 
}

// result in game start

const victoryX = document.querySelector('.victory__X');
const victoryO = document.querySelector('.victory__O');
const drawGame = document.querySelector('.draw');
const resetBtnScore = document.querySelector('.btn__reset');

victoryX.textContent = localStorage.getItem('scoreX', 0); 
victoryO.innerHTML = localStorage.getItem('scoreO', 0); 
drawGame.innerHTML = localStorage.getItem('scoreDraw', 0); 

resetBtnScore.addEventListener('click', resetScoreGame);

function resetScoreGame(event) {
    if (event.target.className = 'btn__reset') {
        localStorage.clear();
        victoryX.innerHTML = 0;
        victoryO.innerHTML = 0;
        drawGame.innerHTML = 0;
    }
}

// result in table start 

const resultBtn = document.querySelector('.btn__result'); 
const resultWindowsOpen = document.querySelector('.result__background'); 
const resultBtnClose = document.querySelector('.result__btn-close'); 
let resultGame = document.querySelector('.result__saved');

resultBtn.addEventListener('click', resultWindow);

function resultWindow() {
    resultWindowsOpen.style.display = 'block';
    if(resultGame.textContent === '') {
        tableResultArr.forEach(element => {
            resultGame.innerHTML = resultGame.innerHTML + `<li>${element}</li>`;
        });
    }
}

resultBtnClose.addEventListener('click', resultWindowClose);

function resultWindowClose() {
    resultWindowsOpen.style.display = 'none';
}

function leaderBoard(){
    if(tableResultArr.length > 10) {
        tableResultArr.pop();
    }
}


// local storage table result and theme

function setLocalStorage() {
   localStorage.setItem('tableResultArr', JSON.stringify(tableResultArr));
   localStorage.setItem('theme', theme);
}
  
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('tableResultArr')) {
        tableResultArr = JSON.parse(localStorage.getItem('tableResultArr'))
    }
    leaderBoard(tableResultArr);
    if (localStorage.getItem('theme') === 'pink') {
        pinkTheme.forEach((elem) => elem.classList.add('pink'));
    }
  }

window.addEventListener('load', getLocalStorage)

// theme start

let theme = localStorage.getItem('theme') || 'blue';

const switchTheme = document.querySelector('.switch');
const pinkTheme = document.querySelectorAll('body,.switch,.header,.result__window-name,.result__btn-close,.content,.modal__btn-close,.github,.footer-container__link,.switch:hover');

switchTheme.addEventListener('click', function clickTheme() {
    theme === 'blue' ? theme = 'pink' : theme = 'blue';
    pinkTheme.forEach((elem) => elem.classList.toggle('pink'));
});