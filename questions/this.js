function hello() {
    console.log("hello", this);
}

const person = {
    name: 'vlad',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd()
    }
}

const lena = {
    name: 'Lena',
    age: 34
}

// const funcLena = person.logInfo.bind(lena, 'dancer', '46465456')
// funcLena()
// person.logInfo.call(lena, 'dancer', '46465456')
person.logInfo.apply(lena, ['dancer', '46465456'])


const array = [1, 4, 5, 6]

// function multBy(arr, n) {
//     return arr.map(function(i){
//         return i * n
//     })
// }
// console.log(multBy(array, 4));

Array.prototype.multBy = function(n) {
    return this.map((i) => i*n)
}

console.log(array.multBy(3))