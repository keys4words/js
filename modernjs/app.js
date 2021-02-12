// alert(1)
// variables
var name = 'Leonid' //deprecated
const lastName = 'Mighty'   //string
let age = 33

const isProgrammer = true   //boolean

age = 'Marlin Manson'

//console.log(lastName + ' ' + age.toString())
//const firstName = prompt('input your name: ')

// data types
//console.log(typeof(name))
//console.log(typeof(age))
//console.log(typeof(isProgrammer))
//console.log(typeof(n))

//const courseStatus = Boolean(prompt('Enter status, yes or no'))
//if (courseStatus === false){
    //console.log('Course in not ready')
//} else {
    //console.log('Course is ready')
//} 


//courseStatus ? console.log('OK') : console.log('Nope')


//console.log(true || false)

// functions
function calcAge(age) {
    return 2021 - age
}

//console.log(calcAge(1980))


// arrays & cycling
//const cars = ['Mazda', 'Mercedes', 'Ford']
//console.log(cars)
//console.log(cars.length)
//cars.push('Porsche')
//cars.unshift('Toyota')
//for (let car of cars){
    //console.log(car)
//}

// objects
const person = {
    name: 'James',
    lastName: 'Bond',
    age: 41,
    efficiency: 79.909,
    skills: ['fighting', 'shooting', 'drinking', 'joking'],
    action: function() {
        //console.log(self.skills[Math.floor(Math.random()*self.skills.length)])
        console.log("Don't shake!")
    }
}
//console.log(person)
person.action()
console.log(isNaN(3/undefined))
console.log(Number.parseInt('47')+2)
console.log((0.4+0.2).toFixed(1))
console.log(Math.pow(Math.PI, 3))
console.log('maximum of list: ', Math.max(42, 23, 5, 99))
