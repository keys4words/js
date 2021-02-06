Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: "I'm Grut!",
        person: {
            firstName: 'Maximus',
            lastName: 'IV',
            age: 35
        },
        items: [43, 55, 1, 87]
    })
}).mount('#app')