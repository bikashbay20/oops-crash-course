// const s1 ='Hello';
// // console.log (s1.toUpperCase())
// // console.log (typeof s1);
// const s2 = new String('Hello');
// console.log (typeof s2);
// console.log (window);
// window.alert('Alert');

// console.log (navigator.appVersion)

// Object literal //

const book1 = {
    title:'Book one',
    author:'john Doe',
    year:'2024',
    getSummary:function(){
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title:'Ironman',
    author:'Robert down jr',
    year:'2023',
    getSummary:function(){
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log (book2.getSummary());
console.log (Object.values(book1));
console.log (Object.values(book2));