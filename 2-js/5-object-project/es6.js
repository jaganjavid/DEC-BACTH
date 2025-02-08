

// Book Constructor

class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

// Ui Constructor

class UI {

    addBookToList(book) {

        const list = document.querySelector("#book-list");

        // Create a tr element

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="d-flex gap-3">
                <span class="btn btn-warning edit">E</span>
                <span class="btn btn-danger delete">D</span>
            </td>
        `;

        list.appendChild(row);
    }

    clearField() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#ISBN").value = "";
    }

    clearTasks() {
        document.querySelector("#book-list").innerHTML = '';
    }

    showAlert(message, className = "test") {
        alert(message);
    }


}

// Storage

class Storage {

    getBooks() {

        let books;

        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;

    }

    addBooks(book) {

        const books = this.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));

    }

    displayBooks() {

        const books = this.getBooks();

        books.forEach(function (book) {

            const ui = new UI();

            ui.addBookToList(book);



        })

    }

    deleteBook(isbn){

       const books = this.getBooks();

       books.forEach(function(book, index){

          if(book.isbn === isbn){
            books.splice(index, 1);
          }

       })

       localStorage.setItem("books", JSON.stringify(books));

    }

    clearBooks(){
        localStorage.removeItem("books");
    }

}

const storage = new Storage();

document.addEventListener("DOMContentLoaded", storage.displayBooks());

// Event Listen for submit
document.querySelector("#book-form").addEventListener("submit", function (e) {

    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#ISBN").value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Please fill all the fields");
    } else {

        let bookExist = false;

        const books = document.querySelectorAll("#book-list tr");


        for(const bookRow of books){

            const existingTitle = bookRow.querySelector("td:nth-child(1)").innerText;
            const existingIsbn = bookRow.querySelector("td:nth-child(3)").innerText;

            if(existingTitle === title || existingIsbn === isbn){
                bookExist = true;
                break;
            }

        }
        if(bookExist){
            ui.showAlert("Book with the title or isbn already exist");
        }else{
            ui.addBookToList(book);
            ui.clearField();
            storage.addBooks(book);
            ui.showAlert("Added sussfully");
        }


    }


})



// Delete task event
document.querySelector("#book-list").addEventListener("click", function (e) {

    const ui = new UI();

    console.log(storage);

    if (e.target.classList.contains("delete")) {
        
        e.target.parentElement.parentElement.remove();

        const isbn = e.target.parentElement.previousElementSibling.innerText;

        storage.deleteBook(isbn);

        ui.showAlert("removed sussfully");
    }

});

// Clear Event Lister
document.querySelector("#clear-btn").addEventListener("click", function (e) {
    const ui = new UI();

    ui.clearTasks();
    storage.clearBooks();
    ui.showAlert("cleared sussfully");

})
