
let firstName = 'asif';
let lastName = "khan"
let fullName = firstName + " " + lastName;

console.log(fullName);

 
// ======================
let name = "Linda11";
let greeting = "Hi there";

function callPerson(){
    console.log(greeting + ", " + name);
}
callPerson()


// ============================
let myPoints = 3;
function add3Point(){
    myPoints += 3;
}

function remove1Point(){
    myPoints -= 1;
}
add3Point();
add3Point();
add3Point();
remove1Point();
remove1Point();
console.log(myPoints);