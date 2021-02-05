const App = {
    data() {
        return {
            placeholderString: 'Input name of note',
            title: 'List Notes',
            inputValue: '',
            notes: ["Note One", 'Note Two']
        }
    },
    methods: {
        addNewNote(){
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },

        toUpperCase(item){
            return item.toUpperCase()
        },

        removeNote(index){
            this.notes.splice(index, 1)
        },

    },
    computed: {
        doubleCountComputed(){
            console.log('doubleCountComputed');
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value){
            if (value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}


Vue.createApp(App).mount('#app')