class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge() {
        const year = new Date().getFullYear() - this.year;
        return `${this.title} in ${this.year} years old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static topbookstore() {
        return 'burnes & nobels';
    }
}

// instantiate Object //
// const book1 = new Book('Book one', 'John Doe', '2023');
// console.log(book1);
// book1.revise('2022');
// console.log(book1);

console.log (Book.topbookstore());