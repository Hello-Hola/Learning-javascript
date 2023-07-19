

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding element 
ul.append(li)

// modifying text
li.innerText = 'x - man';

// modifing attribute and class
// li.setAttribute('id' , 'main-heading')
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

li.classList.add('list-items')

console.log(li.classList.contains('list-items'));

// Remove elements
li.remove()