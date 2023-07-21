
let firstCard = 3;
let secondCard = 18;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEL = document.querySelector('#message-el');

function startGame() {
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



console.log("your staturs: " + message);

console.log("has black Jack: " + hasBlackJack);
console.log(isAlive);
