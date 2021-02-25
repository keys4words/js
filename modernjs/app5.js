const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
const heading2 = document.querySelector('.h2-class')
// console.dir(heading.textContent)
// console.log(heading2);

setTimeout(() => {
    addStylesTo(heading, 'new paragraph')
}, 2500)

// setTimeout(() => {
//     addStylesTo(heading2, 'paragraph #2', 'green', '3rem')
// }, 1500)

function addStylesTo(node, text, color='red', fontSize){
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    if (fontSize){
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if(heading.style.color === 'red'){
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}
const a = heading2.querySelector('a')
a.addEventListener('click', (e) => {
    e.preventDefault()
    const url = e.target.getAttribute('href')
    window.location = url
})
heading2.addEventListener('click', () => {
    // console.log(heading2.style.color === 'green');
    if(heading2.style.color === 'green'){
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'red'
        heading2.style.backgroundColor = '#000'
    }
})