const notes = ['Note 1', 'Note 2', 'Note 3']
const objs = [{
    title:'My next trip',
    body: 'I would like to go to Spain'
}, {
    title:'Habbits to work on',
    body: 'Exercise, eaing a bit better'
}, {
    title:'Web-site modification',
    body: 'Make new design of my web-site in bs4'
}, {}]
// notes.push('Note 4')
// console.log(notes)
// //console.log(notes.pop())
notes.unshift('New element')
// console.log(notes)

//notes.splice(1, 1, 'This is the new second item')
notes[0] = 'This is the new second item'

// console.log(notes)

// notes.forEach(function(item, index){
//     console.log(index)
//     console.log(item)
// })

// for(let i = notes.length-1; i >= 0; i--){
//     console.log(notes[i])
// }

// let position = notes.indexOf('note 2')
// console.log(position)
console.log('====================')
// console.log(objs.indexOf({}))
// const index = objs.findIndex(function(note, index){
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })
const findObj = function(objs, objTitle){
    return objs.find(function(note, index){
        return note.title.toLowerCase() === objTitle.toLowerCase()
    })
}

// const findObj = function(objs, objTitle){
//     const index = objs.findIndex(function(note, index){
//         return note.title.toLowerCase() === objTitle.toLowerCase()
//     })
//     return objs[index]
// }

const objIndex = findObj(objs, 'web-site modification')
console.log(objIndex)