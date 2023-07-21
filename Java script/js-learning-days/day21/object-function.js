// new lesson
let person = {
    name: 'Asif suhail khan',
    age: 22,
    country: 'India'
}
function logData() {
    console.log(person.name + " is " + person.age + " Years old and lives in " + person.country)
}

// new lesson
let age = 15;
function discount() {
    if (age < 6) {
        console.log('free')
    } else if (age < 18) {
        console.log('Child discount')
    } else if (age < 27) {
        console.log('Student discount')
    } else if (age < 67) {
        console.log('full price')
    } else {
        console.log('Seniour citizen discount')
    }
}

// new lesson
let largestCountries = ['china','India','USA','Indonesia','Pakistan']
for( i = 0 ; i < largestCountries.length ; i++){
    // console.log("- " + largestCountries[i]);
}

// new lesson
let largeContries = ['Tuvalu','India','USA','Indonesia','Monaco']
largeContries.pop() // remove item form end of array
largeContries.push('Pakistan') // add item from end of array

largeContries.shift() // remove item form start of array
largeContries.unshift('China') // add item form start of array

console.log(largeContries)
