let player = {
    name: 'Jhon',
    chips: 120,
    sayHello : function(){
        console.log('hi sann!')
    }
}
player.sayHello();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEL = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');

let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name + ': $'+ player.chips;

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1;
    if( randomNumber === 1 ){
        return 11 ;
    } else if(randomNumber > 10 ){
        return 10;
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard;
    renderGame();
}
 

function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( i = 0; i< cards.length; i++ ){
      cardsEl.textContent += cards[i]  + " , ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card"

    } else if (sum === 21) {
        message = "You Win";
        hasBlackJack = true;

    } else {
        message = "You are out of the game 🫡";
        isAlive = false;
    }
    messageEL.textContent = message;
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard);
        renderGame();
    }
}
