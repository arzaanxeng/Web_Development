// querySelector actually return the very first element of it's argument!
let firstElement = document.querySelector('p');
console.dir(firstElement);

// querySelectorAll actually returns all of the elements passed as argument!
let allElements = document.querySelectorAll('p');
console.dir(allElements);

let item = document.querySelector('li')
console.dir(item);

let itemsList = document.querySelectorAll('li')
console.dir(itemsList);

const items = document.querySelectorAll(".menu");
console.dir(items);
