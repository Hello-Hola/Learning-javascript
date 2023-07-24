let myLeads = [];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
const deleteBtn = document.querySelector('#delete-btn');
const tabBtn = document.querySelector('#tab-btn');

// console log myLeads in form of array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// render leads if availabel
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads);
}

// save tabBtn
tabBtn.addEventListener('click' , function(){
    chrome.tabs.query( { currentWindow: true, active: true }, function(tabs) {
            myLeads.push(tabs[0].url);
            localStorage.setItem("myLeads" , JSON.stringify(myLeads))
            render(myLeads); 
        }
    );
});

// add input itemes to ul list
function render(leads) {
    let listItems = "";
    for (i = 0; i < leads.length; i++) {
        listItems += `<li><a target="_blank" href="${leads[i]}"> ${leads[i]} </a></li>`;
    }
    ulEl.innerHTML = listItems;
}

// delete all save items
deleteBtn.addEventListener('click', function (){
    localStorage.clear();
    myLeads = []
    render(myLeads);
})

// add input value to LocaStorage as 
inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    inputEl.value ='';
    localStorage.setItem("myLeads" , JSON.stringify(myLeads));
    render(myLeads);
})
