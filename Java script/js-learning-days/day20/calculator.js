
let num1 = 8;
let num2 = 2;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;


// let total ;
function add(){
    let total = num1 + num2;
    document.getElementById('sum-el').textContent = "Result: " + total;
}

function subtract(){
    let total = num1 - num2;
    document.getElementById('sum-el').textContent = "Result: " +  total;
}

function divide(){
    let total = num1 / num2;
    document.getElementById('sum-el').textContent = "Result: " + total;
}

function multiply(){
    let total = num1 * num2;
    document.getElementById('sum-el').textContent = "Result: " + total;
}