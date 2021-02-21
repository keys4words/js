const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
const heading2 = document.querySelector('.h2-class')
// console.dir(heading.textContent)
// console.log(heading2);

setTimeout(() => {
    addStylesTo(heading, 'new paragraph')
}, 2500)

setTimeout(() => {
    addStylesTo(heading2, 'paragraph #2', 'green', '3rem')
}, 1500)

function addStylesTo(node, text, color='red', fontSize){
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    if (fontSize){
        node.style.fontSize = fontSize
    }
}
