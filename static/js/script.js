function ageInDays() {

    let year = prompt("How year were you born.. dear friend?");
    //console.log(year);

    let yearsInDays = (2020 - year) * 365;

    let show = document.getElementById('flex-box-result');
    let textAnswer = document.createTextNode('You are ' + yearsInDays + ' days old.');
    let h1 = document.createElement('h1');

    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    show.appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();
}
/*challenge 2 */
function generate() {
    let foto = document.createElement('div');
    let image = document.createElement('img');

    image.setAttribute('src', 'static/images/cat.jpg');

    let result = document.getElementById('flex-box-result-2');

    result.appendChild(foto);
    foto.appendChild(image);
}

/*challenge 3*/

/*1. Paper beats Rock
2. Rock beats Scissors
3. Scissors beats Paper */

let arr = ['rock', 'paper', 'scissors'];

function choose(yourChoice) {

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    //console.log(botChoice);
    let results = decideWinner(humanChoice, botChoice); // [1, 0] human wins

    let message = finalMessage(results); //{'message': 'You won!', 'color': 'green'}
    //console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);
    // console.log(humanChoice);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return arr[number];
}

function decideWinner(yourChoice, computerChoice) {
    // console.log('yourChoice ' + yourChoice);
    //  console.log('computerChoice ' + computerChoice);

    let rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    //  console.log('yourScore ' + yourScore);
    let computerScore = rpsDatabase[computerChoice][yourChoice];
    // console.log('computerScore ' + computerScore);
    return [yourScore, computerScore];
}

function finalMessage([yourscore, computerscore]) {
    if (yourscore === 0) {
        return { 'message': 'You lost!', 'color': 'red' }
    } else if (yourscore === 1) {
        return { 'message': 'You won!', 'color': 'blue' }
    } else {
        return { 'message': 'You tied!', 'color': 'yellow' }
    }
}

function rpsFrontEnd(humanChoiceImage, botChoiceImage, message) {

    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //let's remove all the images
    document.querySelector('#firstDiv').remove();
    document.querySelector('#secondDiv').remove();
    document.querySelector('#thirdDiv').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    // console.log(message);
    // console.log(humanChoiceImage);

    //humanDiv.innerHTML = "<img style='box-shadow: 0 10px 50px rgba(251, 119, 119, 1);' src = ' " + imagesDatabase[humanChoiceImage] + " '  >";
    humanDiv.innerHTML = `<img style='box-shadow: 0 10px 50px ${message.color};' src = ' ${imagesDatabase[humanChoiceImage]}'  >`;

    messageDiv.innerHTML = "<h2 style='font-size:3em; font-weight:700; padding-top:20%; height:100%; color: " + message.color + " ; '>" + message.message + "</h2>";
    let botColor;
    if (message.color === 'red') {
        botColor = 'blue';
    } else if (message.color === 'blue') {
        botColor = 'red';
    } else {
        botColor = 'yellow';
    }
    //botDiv.innerHTML = "<img style='box-shadow: 0 10px 50px rgba(100, 133, 163, 1);'  src = ' " + imagesDatabase[botChoiceImage] + " '>";
    botDiv.innerHTML = `<img style='box-shadow: 0 10px 50px ${botColor};'  src = ' ${imagesDatabase[botChoiceImage] }'>`;

    document.querySelector('.flex-box-container-3').appendChild(humanDiv);
    document.querySelector('.flex-box-container-3').appendChild(messageDiv);
    document.querySelector('.flex-box-container-3').appendChild(botDiv);
}



/*challenge 4*/

let btns = document.getElementsByTagName('button');
//console.log(btns);

let arrColors = [];

for (let i = 0; i < btns.length; i++) {
    arrColors.push(btns[i].classList[1]);
}
//console.log(arrColors);

function btnColorChange(btnThingy) {
    //console.log(btnThingy.value);
    if (btnThingy.value === 'red') {
        redFunc();
    } else if (btnThingy.value === 'blue') {
        blueFunc();
    } else if (btnThingy.value === 'green') {
        greenFunc();
    } else if (btnThingy.value === 'random') {
        randomFunc();
    } else if (btnThingy.value === 'reset') {
        resetFunc();
    }
}

function redFunc() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add('btn-danger');
    }
}

function blueFunc() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add('btn-primary');
    }
}

function greenFunc() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add('btn-success');
    }
}

function randomFunc() {
    let colors = ['btn-danger', 'btn-primary', 'btn-success', 'btn-warning'];
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove(btns[i].classList[1]);
        let rndm = Math.floor(Math.random() * 4);
        console.log(rndm);

        btns[i].classList.add(colors[rndm]);
    }
}

function resetFunc() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove(btns[i].classList[1]);

        btns[i].classList.add(arrColors[i]);
    }
}


/* Challenge 5 Blackjack */

document.querySelector('#hitBtn').addEventListener('click', hitPlay);
document.querySelector('#standBtn').addEventListener('click', dealerLogic);
document.querySelector('#dealBtn').addEventListener('click', dealPlay);

let blackjackGame = {
    'you': { 'result': '#your-result', 'box': '#you', 'score': 0 },
    'dealer': { 'result': '#dealer-result', 'box': '#dealer', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11] },
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];


let hitSound = new Audio('static/sounds/swish.m4a');
let lossSound = new Audio('static/sounds/aww.mp3');
let winSound = new Audio('static/sounds/cash.mp3');

function hitPlay() {
    let newCard = randomCard();
    let card = blackjackGame['cards'][newCard];
    //console.log(randImgCard);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
}

function randomCard() {
    let randCard = Math.floor(Math.random() * 13);
    //console.log(randCard);
    return randCard;
}

function showCard(card, activePlayer) {
    if (activePlayer === YOU && activePlayer['score'] < 21) {
        let cardImg = document.createElement('img');
        cardImg.src = `static/images/${card}.png`;
        cardImg.width = '90';
        document.querySelector(activePlayer['box']).appendChild(cardImg);
        hitSound.play();
    } else if (activePlayer === DEALER && activePlayer['score'] < 21) {

        let cardImg = document.createElement('img');
        cardImg.src = `static/images/${card}.png`;
        cardImg.width = '90';
        document.querySelector(activePlayer['box']).appendChild(cardImg);
        hitSound.play();
    }
}

function dealPlay() {
    calcScore();
    let allImgsMe = document.querySelector('#you').querySelectorAll('img');
    let allImgsDealer = document.querySelector('#dealer').querySelectorAll('img');

    //console.log(allImgs);
    for (let i = 0; i < allImgsMe.length; i++) {
        allImgsMe[i].remove();
    }
    for (let i = 0; i < allImgsDealer.length; i++) {
        allImgsDealer[i].remove();
    }
    YOU['score'] = 0;
    document.querySelector(YOU['result']).textContent = 0;
    document.querySelector(YOU['result']).style.color = '#ffe';
    DEALER['score'] = 0;
    document.querySelector(DEALER['result']).textContent = 0;
    document.querySelector(DEALER['result']).style.color = '#ffe';

    let letsplay = document.querySelector('#letsplay');
    letsplay.textContent = "Let's play!";
    letsplay.style.color = '#666';
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        //if adding 11 keeps me bellow 21, add 11 otherwise add 1
        if ((activePlayer['score'] + blackjackGame['cardsMap'][card][1]) <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    // let a = activePlayer['score'];
    //console.log(a);
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['result']).textContent = 'BUST!';
        document.querySelector(activePlayer['result']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['result']).textContent = activePlayer['score'];
    }
}

function dealerLogic() {
    let newCard = randomCard();
    let card = blackjackGame['cards'][newCard];
    // console.log(card);
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);

}
//compute winner and return who just won
function calcScore() {
    let winner;
    let letsplay = document.querySelector('#letsplay');

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            winner = YOU;
            letsplay.textContent = 'You won!';
            letsplay.style.color = 'blue';
        } else if (YOU['score'] < DEALER['score']) {
            winner = DEALER;
            letsplay.textContent = 'You lost!';
            letsplay.style.color = 'red';
        } else if (YOU['score'] === DEALER['score']) {
            console.log('you drew!');
        }

    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        letsplay.textContent = 'You lost!';
        letsplay.style.color = 'red';
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        console.log('You drew!');
    }
    return winner;
}