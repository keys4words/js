// // const animal = {
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // }

// class Animal{
//     static type = 'ANIMAL'

//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('I am animal')
//     }
// }

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })

// class Cat extends Animal {
//     static type = 'CAT'
//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }

//     voice(){
//         super.voice()
//         console.log('I am cat')
//     }

//     get ageInfo(){
//         return this.age*7
//     }

//     set setInfo(newAge) {
//         this.age = newAge
//     }

// }
// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {

    }
}

