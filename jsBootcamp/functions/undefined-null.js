let name = 'Jen'

if(name === undefined){
    console.log('Please provide a name')
}else{
    console.log(name)
}

//undefined for function argument
let square = function(num){
    console.log(num)
}

let result = square()
console.log(result)

//undefined as function return default value
let age = 27

age = null
console.log(age)