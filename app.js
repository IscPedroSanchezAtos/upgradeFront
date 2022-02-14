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
/*var btns = document.querySelectorAll('#book-list .delete');

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
});*/

//Event Bubbling
/*const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});*/

// Interacting with Forms --- add books
/*const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
});*/

//Creating Elements
/*const list = document.querySelector('#book-list ul');
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent= 'delete';
    bookName.textContent= value
    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    fileList.appendChild(li);

});*/

//Styles & Classes
/*const list = document.querySelector('#book-list ul');
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent= 'delete';
    bookName.textContent= value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

});*/

//Checkboxes & Change Events
/*const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if(hideBox.checked){
        list.style.display = "none";
    }else {
        list.style.display = "initial";
    }
});*/

//Custom Search Filter
/*const list = document.querySelector('#book-list ul');
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
});*/

//Tabbed Content
/*/const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }else {
                panel.classList.remove('active');
            }
        });
    }
});*/

//DOMContentLoaded Event

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', function (e) {
        if (e.target.tagName == "LI") {
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(function (panel) {
                if (panel == targetPanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        }
    });
});


