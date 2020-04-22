// function User(name, age) {
//     this.name = name;
//     // this.age = age;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
//     }

//     this.getAge = function() {
//         return userAge;
//     }

//     this.setAge = function(age) {
//         if(typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }

// let max = new User('Max', 41);
// max.say();
// console.log(max.name);
// console.log(max.getAge());

// max.setAge(58);
// max.name = 'Mike';

//1
let number = 1;
(function() {
    let number = 2;
    console.log(number);

    return console.log(number + 3);
    
    
}())
console.log(number);

//2
let user = (function() {
    let private = function(){
        console.log('i am private');
    }
    return {
        sayHello: function() {
            console.log('hello');
        }
    }
}())

console.log(user);
console.log(user.sayHello());

//3
let user = (function () {
    let private = function () {
        console.log('i am private');
    }
    let sayHello = function () {
        console.log('Hello!');
        
    }
    return {
        sayHello: sayHello
    }
}())

console.log(user);
console.log(user.sayHello());