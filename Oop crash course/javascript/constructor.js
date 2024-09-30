// constructor //
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};
//  instatiate an Object //
const book1 = new Book('Book one', 'Dohn Doe', '2014');
const book2 = new Book('Book two', 'Down jr', '2023');

console.log(book1.getSummary());
console.log(book2.getSummary());