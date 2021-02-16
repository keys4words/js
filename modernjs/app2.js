const cars = ['Mazda','Ford', 'BMW', 'Mercedes']
const people = [
    {name: 'Helen', budget: 4300},
    {name: 'Peter', budget: 1100},
    {name: 'Mike', budget: 6300},
    {name: 'Dart', budget: 9300}
]
cars.push('Opel')
cars.unshift('Toyota')
console.log(cars)
//removing_el = cars.shift()
//console.log(`remove element ${removing_el}`, cars)
//cars.pop()
//console.log(cars.reverse())
//myarr = 'Hello from JS'.split(' ')
//console.log(myarr.join('_'))
//console.log(cars.indexOf('Ford'))
//console.log(cars.indexOf('Bmw'))
//const index = people.findIndex(function(person){
    //return person.budget === 6300
//})
//console.log(index)

//console.log(people.find(person => person.budget === 59300))
//console.log(cars.includes('Mercedes'))

nums = [5, 2, 77, 9]
my_sqr = el => el**0.5
console.log(cars.map(car => car.toUpperCase()))
console.log(nums.map(el => el**2).map(my_sqr))
new_arr = nums.concat(nums.map(el => el**3))
console.log('new arr', new_arr)
console.log('filtering arr > 100', new_arr.filter(el => el > 100))

const summaryBudget = people
    .filter(person => person.budget > 1500)
    .reduce(function(acc, person){
    acc += person.budget
    return acc
}, 0)
console.log(summaryBudget)
