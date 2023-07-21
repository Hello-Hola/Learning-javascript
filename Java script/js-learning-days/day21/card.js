let firstCard = 3;
let secondCard = 18;
let cards = [firstCard , secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEL = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');

function startGame(){
    renderGame();
}
 
// give you 2 cards and winning status
function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " , " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card"
        isAlive = true;
    } else if (sum === 21) {
        message = "You Win";
        hasBlackJack = true;
    } else {
        message = "You Loss 🫡";
        isAlive = false;
    }
    messageEL.textContent = message;
}

function newCard(){
    let thirdCard = 7;
    sum += thirdCard;
    cards.push(sum);
    console.log(cards);
    renderGame();
}


console.log("your staturs: " + message);
console.log("has black Jack: " + hasBlackJack);
console.log(isAlive);
