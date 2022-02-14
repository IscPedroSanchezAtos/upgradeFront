var wrap = document.querySelector('#wrapper');
//console.log(wrap);

var books = document.querySelector('#book-list li .name');
//consol.log(books);

var books = document.querySelectorAll('#book-list li .name');
//console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
});