/*var wrap = document.querySelector('#wrapper');
console.log(wrap);

var books = document.querySelector('#book-list li .name');
consol.log(books);

var books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
});*/

/*var books= document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    console.log(book.textContent);
});*/

/*var books= document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent= 'test';
});*/

var books= document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent += '(book title)';
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2> Books and more books ..</h2>';
bookList.innerHTML += '<p> This is how you add HTML </p>';