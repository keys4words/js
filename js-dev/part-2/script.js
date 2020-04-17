// 'use strict';

// data types
a=5;
var number = 1;
var string = 'hello';
var sym = Symbol();
var boolean = true;
null;
undefined;

var person = {
    name: 'John',
    age: 25,
    isMarried: false
};

// let something;
// console.log(4/0);
// console.log(something);
console.log(person['name']);

let arr = ['plum.png','orange.jpg', 'apple.bmp'];
console.log(arr[0]);

// alert('hello world');
// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = prompt("Есть ли Вам 18 лет?", "Да");
// console.log(typeof(answer));
// console.log('arr' + " - object");
let incr = 10,
    decr = 10;

    // console.log(incr++);
    // console.log(decr--);
    // console.log(5%2);
    // console.log("2"==2);
    // console.log("2"===2);

    let isChecked = true;
    let isClose = false;

    console.log(isChecked || isClose);