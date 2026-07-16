// --- Library Object
// Represent a simple library system, with books and various methods

const library = {
    books: [
        {
            title: "Anne of Green Gables",
            author: "L. M. Montgomery",
            year: 1908,
            isAvailable: false
        },
        {
            title: "Rainbow Valley",
            author: "L. M. Montgomery",
            year: 1919,
            isAvailable: false
        }
    ],
    addBook: function(title, author, year){
        this.books.push({
            title: title,
            author: author,
            year: year,
            isAvailable: false
        })
    },
    // findByAuthor: function(authorName){
    //     const authBooks = []
    //     for(let book of this.books){
    //         if (book.author === authorName){
    //             authBooks.push(book);
    //         }
    //     }

    //     if (authBooks.length === 0){
    //         return "Books not found!";
    //     }

    //     return authBooks;
    // }
    // findByAuthor: function(authorName){
    //     const authBooks = this.books.filter(book => book.author === authorName);
    //     return authBooks.length > 0 ? authBooks : "Books not found!";
    // }
    findByAuthor: function(authorName){
        const authBooks = this.books.filter(book => book.author === authorName);
        if (authBooks.length === 0) {
            console.log("Books not found!");
            return [];
        }
    
        return authBooks;
    },
    // listAvaiableBooks: function(){
    //     return this.books.filter(book => book.isAvailable);
    // }
    listAvaiableBooks: function(){
        const availableBooks = this.books.filter(book => book.isAvailable);
        if (availableBooks.length === 0){ console.log("No books available!"); }
        return availableBooks;
    },

    borrowBook: function(title){
        const bookBorrow = this.books.find(book => book.title.toLowerCase().trim() === title.toLowerCase().trim());
        if (bookBorrow === undefined){
            return "Book not found!";
        }
        if (!bookBorrow.isAvailable) {
            return "Book is not available at the momemt!";
        } 
        bookBorrow.isAvailable = false;
        return `You have borrowed - ${bookBorrow.title}!`;
    },

    returBook: function(title){
        const borrowedBook = this.books.find(book => book.title.toLowerCase().trim() === title.toLowerCase().trim());

        if(borrowedBook){
            borrowedBook.isAvailable = true;
            return `You have returned - ${borrowedBook.title}`;
        }

        return "Book not found."
    }


}
/*6. Create method - returnBook(title) -> sets availability of the book to true. If book successfully returned -> 'You have returned - TITLE' message. If you trying to return the book that wasn't i our library -> "book not found" message */

console.log("\nAdd the book:")
library.addBook("J. K. Rowling", "Harry Potter and the Philosopher's Stone", 1997);
console.log(library.books)
console.log("\nFind by author:")
console.log(library.findByAuthor("L. M. Montgomery"));
console.log("\nList Available:")
console.log(library.listAvaiableBooks());
console.log("\nBorrow book:")
console.log(library.borrowBook("Anne of Green Gables"));
console.log("\nReturn book:")
console.log(library.returBook("Anne of Green Gables"))