//multiple arguments
let add = function(a, b){
    return a+ b
}

let result = add(10, 1)
console.log(result)

//default arguments
let getScoreText = function(name='Anonymous', score=0){
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 50)
console.log(scoreText)

//challenge area
let getTip = function(total, tipPercent=0.2){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(60)
console.log(tip)
console.log(getTip(100, .3))