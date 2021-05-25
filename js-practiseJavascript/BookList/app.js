//for boook
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI
function UI() {

}

UI.prototype.addBookToList = function (book) {
  // console.log(book);
  const booklist = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
  <th>${book.title}</th>
  <th>${book.author}</th>
  <th>${book.isbn}</th>
  <th><a href='#' class=delete>X</a></th>
  `;
  booklist.appendChild(row);
}

UI.prototype.clearFields = function () {
  const title = document.getElementById('title').value = '';
  const author = document.getElementById('author').value = '';
  const isbn = document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function (message, classname) {
  // console.log(message);
  const div = document.createElement('div');
  div.className = `alert ${classname}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.getElementById('book-form');
  container.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

UI.prototype.deleteBook = function (target) {
  target.parentElement.parentElement.remove();

}

//add event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // console.log('test');

  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  //create book object
  const book = new Book(title, author, isbn);
  //create UI obj
  const ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill all the details', 'error');

  } else {
    ui.addBookToList(book);
    ui.clearFields();
    ui.showAlert('Book Added !!!', 'success');

  }
  e.preventDefault();
});

//event listener for book-list for dyanmic added content and use event delegation
document.querySelector('#book-list').addEventListener('click', function (e) {
  if (e.target.className === 'delete') {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book is deleted !', 'success')
  }
  e.preventDefault();
});