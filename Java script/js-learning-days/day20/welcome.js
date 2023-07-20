
// grab the welcome-el element 
let welcomeEl = document.querySelector('#welcome-el')

let name , greeting , welcome;
name = "Asif "
greeting = ",Nice to meet You "
welcome = name + greeting;

console.log(welcome);
welcomeEl.innerText = welcome;

welcomeEl.innerText += "😂"; 