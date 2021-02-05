const App = {
    data() {
        return {
            placeholderString: 'Input name of note',
            title: 'List Notes',
            inputValue: '',
            notes: ['Note One', 'Note Two', 'Note #3']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        removeNote(index){
            this.notes.splice(index, 1)
        }
    }
}


Vue.createApp(App).mount('#app')