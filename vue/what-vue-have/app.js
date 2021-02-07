Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: "I'm Grut!",
        person: {
            firstName: 'Maximus',
            lastName: 'IV',
            age: 35
        },
        items: [44, 56, 1, 88, 73]
    }),
    methods: {
        addItem(event){
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event.key)
        },
        remove(i){
            this.items.splice(i, 1)
        },
        log(item){
            console.log(item);
        }
    },
    computed: {
        evenItems(){
            return this.items.filter(i => i%2 === 0)
        }
    }
}).mount('#app')