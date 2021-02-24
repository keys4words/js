// const person = {
//     name: 'Maxim',
//     age: 32,
//     greet: function() {
//         console.log('Greet!!!')
//     }
// }

const person = new Object({
    name: 'Maxim',
    age: 32,
    greet: function() {
        console.log('Greet!!!')
    }
})

Object.prototype.sayHello = function(){
    console.log('Hello!');
}

const lena = Object.create(person)
lena.name = 'Helen'

const str = new String('I am a string')