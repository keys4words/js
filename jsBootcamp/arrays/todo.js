const todos = [
    {text:'Order table',
    completed: 70},
    {text:'Clean kitchen',
    completed: 10},
    {text:'buy food',
    completed: 0},
    {text: 'do work',
    completed: 0},
    {text:'exercise',
    completed: 20}
]

const removingTodo = function(todos, todoText){
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1){
        todos.splice(index, 1)
    }
}

console.log(todos)
removingTodo(todos, 'buy food')
console.log('removing Buy food')
console.log(todos)

/* todo.splice(2, 1)
todo.push('Buy coffee')
todo.shift()

console.log(`You have ${todo.length} todos`)
console.log(todo)
// todo.forEach(function(item, index){
//     console.log(`${index + 1}. ${item}`)
// })

for (let i = 0; i<todo.length; i++){
    console.log(`${i + 1}. ${todo[i]}`)
} */
