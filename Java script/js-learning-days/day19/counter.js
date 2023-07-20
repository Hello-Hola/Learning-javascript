

// button and paragraph selection code
let countEl = document.getElementById('count-el')
let saveEl = document.querySelector('#save-el')
let count = 0; 

// +1 increment function code
function increment(){
    count ++; 
    countEl.innerText = count;
    console.log(count);
}

// save current count and rest count to 0
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

 