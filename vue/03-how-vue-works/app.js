const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: "It's properties of Vue"
        }
    },
    methods: {
        changeTitle() {
            this.title = "I am Grut"
        }
    },
    // template: `
    //     <div class="card center">
    //         <h1>{{ title }}</h1>
    //         <button class="btn" @click="title='Ooops'">Change</button>
    //     </div>
    // `
    render() {
        return h('div', {
            class: 'card center'
        }, [h('h1', {}, this.title),
        h('button', {
            class: 'btn',
            onClick: this.changeTitle
        }, 'Change')
    ])
    }
})

app.mount('#app')