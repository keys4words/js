// const s1 = 'hello';
// console.log(s1.toUpperCase());
// console.log(typeof s1);
// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// window.alert(1);

// console.log(navigator.appVersion);

//object literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: 2015,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.getSummary());