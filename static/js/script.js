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

/*1. Paper beats Rocks
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
    rpsFrontEnd(humanChoice.id, botChoice, message);
    console.log(humanChoice.id);
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
        return { 'message': 'You won!', 'color': 'green' }
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
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    console.log(humanChoiceImage);
    humanDiv.innerHTML = "<img src = ' " + imagesDatabase[humanChoiceImage] + " '>";






    document.querySelector('.flex-box-container-3').appendChild(humanDiv);


}