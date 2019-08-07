let num = 103.9074

// console.log(num.toFixed(2))
// console.log(Math.round(num))
// console.log('floor - ' + Math.floor(num))
// console.log('ceiling - ' + Math.ceil(num))

// let min = 10
// let max = 20
// let randomNum = min + Math.floor((max - min + 1) * Math.random())
// console.log(randomNum)

let makeGuess = function(guess){
    let min = 1
    let max = 5
    let randomNum = min + Math.floor((max - min + 1) * Math.random())
    console.log('random number = ' + randomNum)
    return guess == randomNum
}

console.log(makeGuess(2))