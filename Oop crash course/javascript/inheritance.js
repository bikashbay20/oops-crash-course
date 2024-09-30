// constructor //
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

// get getSummary //
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${year}`

};

// constructor magazine //
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// inherit prototype //
Magazine.prototype = Object.create(Book.prototype);

// Instantiate magazine Object //
const mag1 = new Magazine('mag one', 'John Doe', '2018', 'jun');

// use Magazine constructor //
Magazine.prototype.constructor = Magazine;

console.log(mag1);


