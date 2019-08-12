const todo = ['Order table', 'Clean kitchen', 'buy food', 'do work', 'execire']

todo.splice(2, 1)
todo.push('Buy coffee')
todo.shift()

console.log(`You have ${todo.length} todos`)
console.log(todo)