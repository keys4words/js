// console.log(window);
//single element
// const form = document.getElementById('my-form');
// console.log(document.querySelector('.container'));

// multiple elements
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));


// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Maxim';
// ul.lastElementChild.innerHTML = '<h1>Welcome</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    // console.log(e.target.className);
    // document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});