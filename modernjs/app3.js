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


const {name, isBoxer, greet} = person
console.log(name, isBoxer, greet())

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ' -> ' + person[key])
    }
}
