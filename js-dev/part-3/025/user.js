//with functions

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hey, ' + this.name);
//     };
// }

// User.prototype.exit = function (name) {
//     console.log('User ' + this.name + ' exit');

// };

// let max = new User('Max', 43),
//     alex = new User('Alex', 34);

// console.log(max);
// console.log(alex);
// max.exit();


//with class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello(){
        console.log(`Hey, ${this.name}`);
    }

    exit() {
        console.log(`User ${this.name} exits!`);
    }
}

// let max = new User('Max', 43);
// let alex = new User('Alex', 34);

// console.log(max);
// console.log(alex);
// alex.hello();
// max.exit();

//просто вызов функции - window/underfined

// 'use strict';
// function showThis(a, b){
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
    
// }

// showThis(4, 5);


//Метод объекта - this = объект
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

//Конструктор (new) - this = новый созданный объект
//см. первый пример с классом User



//Указание конкретного контекста - call,, apply, bind
// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['First']));



// function count(number){
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(4));

let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
});
