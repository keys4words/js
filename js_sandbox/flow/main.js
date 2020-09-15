/*var number1 = '345';
var number2 = [1,51,6, 45];
number2.push(999);
number2.sort();
number2.reverse();
number2.forEach(function(el){
     console.log(el);
})
console.log(number2);
var person = {
    firstName: 'James',
    lastName: 'Bond',
    age: 43,
    children: ['Nicholas', 'Ann'],
    address: {
        city: 'Moscow',
        state: 'MA',
        street: 'Baker str'
    },
    fullName:function(){
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(person.children[0]);
console.log(person.address.state);
console.log(person.fullName());

var apple = new Object();
apple.color = 'red';
apple.shape = 'round';
apple.describe = function(){
    return 'An apple is the color: '+this.color + ' and shape: '+this.shape;
}

console.log(apple.describe());

// constructor pattern
function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A '+this.name+' is the color: '+this.color+' and is the shape '+this.shape;
    }
}

var banana = new Fruit('banana', 'yellow', 'oval');
console.log(banana.describe());


var users = [
    {
        name: 'Keany Reaves',
        age: 51
    },
    {
        name: 'Arnold Schwarznegger',
        age: 65
    },
    {
        name: 'Kim Bessinger',
        age: 59
    }
];
console.log(users[0].name);

function doClick(){
    alert('You clicked');
}

// function changeText(id){
//     id.innerHTML = 'You clicked!';
// }

function changeText(){
    var heading = document.getElementsByClassName('heading')[0];
    heading.innerHTML = 'You clicked';
}

function showDate(){
    var time = document.getElementsByClassName('time')[0];
    time.innerHTML = Date();
}

function clearDate(){
    var time = document.getElementsByClassName('time')[0];
    time.innerHTML = '';
}

function changeBackground(x){
    var heading = document.getElementById('header');
    heading.style.color = x.value;
}
*/
function validateForm(){
    var firstName = document.forms['myForm']['firstName'].value;
    if(firstName == null || firstName == ''){
        alert('First name is required');
        return false;
    }
    if(firstName.length < 3){
        alert('First name must be at least 3 chars');
        return false;
    }
}