
const welcomeEl = document.querySelector('#welcome-el');
const addEl = document.querySelector('#add-el');

function greetUser(greeting , name , emoji){
    welcomeEl.textContent = `${greeting} darling  ${name} ${emoji}` ;
}

greetUser('come back', 'golu' , '🍔')

function add( a, b){
    return addEl.innerHTML += `<li> ${a+ b} </li>`;
}

console.log(add(3,4))
console.log(add (9 , 102))

// parameter
// argument
// parameter
// artument