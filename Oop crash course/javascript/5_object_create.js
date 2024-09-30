// object of protos //

const bookprotos = {
getSummery:function(){
     return `${this.title} was written by ${this.author} in ${this.year}`;
},
getSummery:function(){
    const year = new Date().getFullYear() - this.year;
    return `${this.title} in ${this.year} years old`; 
}
}