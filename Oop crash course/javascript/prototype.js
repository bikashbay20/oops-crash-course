// constructor //
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // this.getSummary = function () {
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }
};

// get age //
Book.prototype.getAge = function () {
    const year = new Date().getFullYear() - this.year;
    return `${this.title} in ${this.year} years old`;
};

// Revise or chnage the year //
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
};

clearIntervalcl

//  instatiate an Object //
const book1 = new Book('Book one', 'Dohn Doe', '2014');
const book2 = new Book('Book two', 'Down jr', '2023');

console.log(book2);
book2.revise('2024');
console.log(book2);

console.log(book2.getSummary());
