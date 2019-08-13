const todo = ['Order table', 'Clean kitchen', 'buy food', 'do work', 'execire']

todo.splice(2, 1)
todo.push('Buy coffee')
todo.shift()

console.log(`You have ${todo.length} todos`)
console.log(todo)
// todo.forEach(function(item, index){
//     console.log(`${index + 1}. ${item}`)
// })

for (let i = 0; i<todo.length; i++){
    console.log(`${i + 1}. ${todo[i]}`)
}