const person = {
    name: 'Mike Tyson',
    age: 51,
    isBoxer: true,
    ['key_'+(1+3)]: 'Computed Key',
    skills: ['strength', 'speed'],
    greet(){
        console.log('greet from person')
    }
}


//console.log(person.name)
//console.log(person['age'])
//const ageKey = 'key_4'
//console.log(person[ageKey])
//delete person[ageKey]
//console.log(person)


// const {name, isBoxer, greet} = person
// console.log(name, isBoxer, greet())

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key + ' -> ' + person[key])
//     }
// }

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues(){
        Object.keys(this).forEach(function(key){
            console.log(`${key} -> ${this[key]}`)
        }).bind(this)
    },
    withParams(top=false, between=false, bottom=false){
        if(top){
            console.log('--------start---------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key} -> ${this[key]}`)
            if(between && index !== array.length-1) {
                console.log('--------------------')
            }
        })
        if(bottom){
            console.log('--------end---------')
        }
    }
}

// logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])
