// function createCalcFunction(n){
//     return function(){
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
// }

// console.log(createIncrementor(10)(3))

// function urlGenerator(domain){
//     return function(url) {
//         return `https://${domain}/${url}`
//     }
// }

// const yandex = urlGenerator('yandex.ru')
// console.log(yandex('news'))

function myBind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Maxim', age: 44, job: 'Full-stack'}
const person2 = {name: 'Lex', age: 31, job: 'realtor'}

myBind(person1, logPerson)()