
// select dom and ask promt
let para = document.querySelector('p');
let age= prompt("Please enter your name", "25");

// check the age of a persone
if ( age <= 21){
    para.textContent = "You are Under Age";
    console.log("you are underAge");
} else {
    para.textContent = "You are Welcome";
    console.log("You are Welcome");
}


