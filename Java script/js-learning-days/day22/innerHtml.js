
const main= document.querySelector('main');
main.innerHTML = '<button onclick="buy()">Buy Now</button>';

function buy(){
    main.innerHTML += '<p> Thank you for buying</p>';
}