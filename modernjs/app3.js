const person = {
    name: 'Mike Tyson',
    age: 51,
    isBoxer: true,
    ['key_'+(1+3)]: 'Computed Key',
    skills: ['strength', 'speed'],
    greet(){
        console.log('greet from person')
    },
    info() {
        console.info('All about', this.name)
    }
}


//console.log(person.name)
//console.log(person['age'])
//const ageKey = 'key_4'
//console.log(person[ageKey])
//delete person[ageKey]
//console.log(person)


//const {name, isBoxer, greet} = person
//console.log(name, isBoxer, greet())

//for (let key in person) {
    //if (person.hasOwnProperty(key)) {
        //console.log(key + ' -> ' + person[key])
    //}
//}

//const keys = Object.keys(person)
//console.log(keys)
//keys.forEach( key => console.log(key + '-> ' + person[key]) )


//person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },
    keysAndValues(){
        Object.keys(this).forEach(key => {
            console.log(`${key} -> ${this[key]}`)
        })
    },
    withParams(top=false, between=false, botton=false){
        if (top) {
            console.log('------------------Start---------------------')
        }
        Object.keys(this).forEach(key => {
            console.log(`${key} => ${this[key]}`)
            if (between){
                console.log('----------------------------------------')
            }
        })
        if (bottom){
            console.log('--------------------end----------------------')
        }
    }
}

//const bound = logger.keys.bind(person)
//bound()
//logger.keys.call(person)
//logger.keysAndValues.call(person)
logger.withParams.call(person, true, true)
