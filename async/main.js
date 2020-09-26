// callbacks
const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];
function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        // callback();
    }, 2000);
}



// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// promises
function createPost2(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong!');
            }
        }, 2000);
    });
}

// createPost2({ title: 'Post Four', body: 'This is post Four'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 4000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));

// async / await
// async function init() {
//     await createPost({ title: 'Post Four', body: 'This is post Four' });
//     getPosts();
// }

// init();

// async / fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();