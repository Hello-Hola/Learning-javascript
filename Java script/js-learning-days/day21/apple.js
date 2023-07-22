
let fruit = ['🍕','🍔','🍕','🍕','🍔']
let pizzaShelf = document.querySelector('#pizza-shelf');
let burgerShelf = document.querySelector('#burger-shelf');

function sortFruit(){
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] ==='🍕'){
            pizzaShelf.textContent += '🍕';
        } else if (fruit[i] ==='🍔'){
            burgerShelf.textContent += '🍔';
        }
    }
}
sortFruit()
