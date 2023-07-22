
let hands = ['rock' , 'paper' , 'scissor']

function randomItems(){
    let random =  Math.floor(Math.random() * 3);
    return hands[random];
}
console.log(randomItems());
