const temp = new Book("temper", "auth", 5, "read");
const temp2 = new Book("tempers", "author", 9, "read");
const button = document.querySelector('.newBook');
const form = document.querySelector('form')
const formDiv = document.querySelector('.addNewBook')

button.addEventListener('click', function() {
    formDiv.classList.toggle('hidden')
})

form.addEventListener('submit', createBook);

let myLibrary = [temp,temp2];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createBook(e) {
    e.preventDefault();
    const title = document.querySelector('#name')
    const author = document.querySelector('#author')
    const pages = document.querySelector('#pages')
    const read = document.querySelector('#read')
    console.log(e.target.name)

}

function addBookToLibrary(arr) {
    
    arr.forEach(e => {
        showLibrary(e)
    });
}

function showLibrary(arr) {
  const library = document.querySelector(".library");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  h2.innerHTML = arr.title;
  p1.innerHTML = arr.author;
  p2.innerHTML = arr.pages;
  library.appendChild(div);
  div.appendChild(h2);
  div.appendChild(p1);
  div.appendChild(p2);
  
}





addBookToLibrary(myLibrary);

