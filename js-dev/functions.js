'use strict';

// function showFirstMessage(text) {
//     alert(text);
// }

// showFirstMessage('hey, Max!');
console.log(calc(553, 55));

function calc(a,b) {
    return (a + b);
}

console.log(calc(3, 55));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);


// let func2 = function(a, b){
//     return (a - b);
// }
let func2 = (a, b) => (a - b);
console.log(func2(2, 3));

let str = 'test';
console.log(str.length);
console.log(str.toUpperCase());

