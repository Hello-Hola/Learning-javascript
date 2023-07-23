let myLeads = [];

// log myLeads in form of array
localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage);

// select all element
const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');


// add input value to LocaStorage  
inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    inputEl.value ='';
    localStorage.setItem("myLeads" , JSON.stringify(myLeads));
    renderLeads();
})

// add input itemes to ul list
function renderLeads() {
    let listItems = "";
    for (i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a></li>`;
    }
    ulEl.innerHTML = listItems;
}