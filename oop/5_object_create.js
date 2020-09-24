// object of protos
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// create object - first syntax
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = 2016;
console.log(book1);

// create object - second syntax
const book2 = Object.create(bookProtos, {
    title: {value : 'Book Two'},
    author: {value : 'Jane Doe'},
    year: {value : 2011}
});
console.log(book2);