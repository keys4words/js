
let greetUser = function(){
    console.log('Welcome user')
}

greetUser()
greetUser()
greetUser()

let square = function(x){
    let result = x * x
    return result
}

let value = square(4)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

let convertFahrenheitToCelsius = function(fahrenheit){
    let celsius = (fahrenheit - 32)* 5 / 9
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log('convert fahrenheit to celsius - 32 and 68')
console.log(tempOne)
console.log(tempTwo)