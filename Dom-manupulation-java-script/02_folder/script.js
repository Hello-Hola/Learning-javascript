
// =====styling elemtnts=====

// const title = document.querySelector('#main-heading');
// title.style.backgroundColor ='red';

// const listItem = document.querySelectorAll('.list-items');

// for( i = 0 ; i < listItem.length; i++){
//     listItem[i].style.fontSize = '30px'
// }
// console.log(listItem);



// ====creating elemtns========
const ul = document.querySelector('ul')
const li = document.createElement('li')

// =====adding elements=========
ul.append(li)

//====modifying the text======
const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);