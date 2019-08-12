const notes = ['Note 1', 'Note 2', 'Note 3']
// notes.push('Note 4')
// console.log(notes)
// //console.log(notes.pop())
notes.unshift('New element')
// console.log(notes)

//notes.splice(1, 1, 'This is the new second item')
notes[0] = 'This is the new second item'

console.log(notes)