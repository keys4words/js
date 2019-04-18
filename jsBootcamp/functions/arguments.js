let add = function (a, b, c){
    return a + b + c
}

let res = add(10, 2, 5)
console.log(res)

let getScoreText = function(name = 'John Doe', score = 0){
    return '"' + name + '" has a score = ' + score
}

let scoreText = getScoreText(undefined, 19)
console.log(scoreText)