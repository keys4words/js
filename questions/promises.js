console.log('Request data...');

// emulation request to DB to show callback's hell
// setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//         server: 'aws',
//         port: 5000,
//         status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)

// }, 2000)

// promises as solution
// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 5000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p.then((data) => {
//     // console.log('Promise resolved', data)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             // resolve(data)
//             reject(data)
//         }, 2000)
//     })
//     // p2.then((clientData) => {
//     //     console.log('Data received', clientData)
//     // })
// })
// .then(clientData => {
//     console.log('Data received', clientData)
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {
//     console.log('Modified', data)
// })
// .catch((err) => {
//     console.error('My Error: ', err)
// })
// .finally(() => console.log('Finally'))

// sleep example
const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

// sleep(2000).then(()=> console.log('After 2 sec'))

// execute set of promises - all promises have to be finished
Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('All promises')
    })

// wait first fastest promise
Promise.race([sleep(2000), sleep(5000)])
.then(() => {
    console.log('Race promises')
})
