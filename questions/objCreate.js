const person = Object.create({
  showInfo(){
    console.log('----------')
    console.log('showInfo')
    console.log('----------')
  }
}, {
  name: {
    // value: 'Peter Penn',
    enumerable: true,
    get(){
      return 'Mike Tyson'
    },
    set(value){
      console.log(value)
    }
  },
  age: {
    value: 45,
    enumerable: true,
    writable: true
  }
})

// console.log(person)

person.name = 'Maxim'
person.age = 19

for(let key in person){
  if(person.hasOwnProperty(key)){
    console.log(key + ' => ' + person[key])
  }
}
