

// button selection code
let countEl = document.getElementById('count-el')
console.log(countEl)

// increment function code
let count = 0; 

function increment(){
    count ++; 
    countEl.innerText = count;
}

// reset the incremet to 0 
console.log(count + 'first');

function save(){
    console.log(count);
}

