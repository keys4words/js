// console.log('Hello World');
// console.error('This is error');
// console.warn('This is warning');

//var - deprecated, let, const
let age = 30;
age = 34;
// console.log(age);
const male = 'man';
// male = 'female';
// console.log(male);

// Strings, Numbers, Boolean, null, underfined
const name = 'John Smith';
const age1 = 34;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// console.log(typeof z);

// strings operations
// console.log(name + ' something');
// console.log(`My name is ${name}`);
// console.log(name.length);
// let s = 'technology, computers, it, code';
// console.log(name.substring(0, 4).toUpperCase());
// console.log(s.split(', '));

// arrays
// const numbers = new Array(1, 2, 'string', false, 5);
// console.log(numbers);
// console.log(numbers[2]);
// numbers[3] = 'new string';
// console.log(numbers);
// numbers.push('orange');
// console.log(numbers);
// numbers.unshift('orange');
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// console.log(Array.isArray('hello'));
// console.log(numbers.indexOf('string'));


// objects
// const person = {
//     firstName: 'James',
//     lastName: 'Bond',
//     age: 45,
//     hobbies: ['shooting', 'sex', 'drinking'],
//     address: {
//         state: 'GB',
//         city: 'London',
//         street: 'Bakes str'
//     }
// };
// console.log(person.address.city);
// const {firstName, lastName, address: {street}} = person;
// console.log(lastName + street);
// person.email = 'j.bond@mi6.gov';
// console.log(person);

todos = [
    {
        id: 1,
        text: 'to remove trash',
        isCompleted: false
    },
    {
        id: 2,
        text: 'to make a light',
        isCompleted: false
    },
    {
        id: 3,
        text: 'to workout',
        isCompleted: true
    }
];
// console.log(todos[1].text);
const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

// for loop
// for(let i = 0; i <= 5; i++){
//     console.log(`loop iteration #${i}`);
// }

// let i = 0;
// while(i <= 5){
//     console.log(`loop iteration #${i}`);
//     i++;
// };

// for of
for(let todo of todos){
    console.log(todo.text);
}