
let convertFahrenheitToCelsius = function(fahrenheit){
    let celsius = (fahrenheit - 32)* 5 / 9

    if (celsius <= 0){
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log('convert fahrenheit to celsius - 32 and 68')
console.log(tempOne)
console.log(tempTwo)

let name = 'Jen'
console.log(`Hey, my name is ${name}`)