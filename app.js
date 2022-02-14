var wrap = document.querySelector('#wrapper');
//console.log(wrap);

var books = document.querySelector('#book-list li .name');
//

var books = document.querySelectorAll('#book-list li .name');
//console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
});