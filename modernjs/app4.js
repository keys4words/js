// async

// const timeOut = setTimeout(()=>{
//     console.log('After timeout');
// }, 2500)
// clearTimeout(timeOut)

// const intervall = setInterval(() => {
//     console.log('After interval');
// }, 1000)

// clearInterval(intervall)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(() => {
//     console.log('After 2 seconds!');
// }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            // resolve()
            reject('Something goes wrong!')
        }, wait)
    })
    return promise
}

// delay(2500)
//     .then(()=>{
//         console.log('after 2 seconds');
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('finally'))


const getData = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8, 19]))

// getData()
//     .then(data => console.log(data))

async function asyncExample(){
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    } catch (error) {
        console.log(error);
    }
}

asyncExample()