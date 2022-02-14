/*var wrap = document.querySelector('#wrapper');
console.log(wrap);

var books = document.querySelector('#book-list li .name');
consol.log(books);

var books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
});*/

//changing text & html components
/*var books= document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    console.log(book.textContent);
});*/

/*var books= document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent= 'test';
});*/

/*var books= document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent += '(book title)';
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2> Books and more books ..</h2>';
bookList.innerHTML += '<p> This is how you add HTML </p>';*/

// nodes
/*const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is: ', banner.nodeType);
console.log('#page-banner node name is: ', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes);

const cloneBanner = banner.cloneNode(true);
console.log(cloneBanner);*/


//Traversing the DOM 
/*const bookList = document.querySelector('#book-list');
console.log('the parent Node is:', bookList.parentNode);
console.log('the parent Element is:', bookList.parentElement.parentElement);

console.log(bookList.children);*/

// traveling sibling elemets
/*const bookList = document.querySelector('#book-list');
console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next sibling element is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous sibling element is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else';*/

//Events
var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;

        li.parentNode.removeChild(li)
    });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, 'was prevented')
});
