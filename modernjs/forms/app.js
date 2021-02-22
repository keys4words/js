// document.querySelector('button').onclick = () => {
//     // color = document.querySelector('#psw').value
//     // document.querySelector('button').style.backgroundColor = color 

//     console.log(document.querySelector('#psw').value)
// }

// document.querySelector('#psw').oninput = () => {
//     console.log(document.querySelector('#psw').value)
//     document.querySelector('span').innerHTML = document.querySelector('#psw').value
// }

// document.querySelector('#btn-1').onclick = () => {
//         // console.log(document.querySelector('#chk').value)
//         let checkBoxValue = document.querySelector('#chk')
//         // console.log(checkBoxValue.checked);
//         if (checkBoxValue.checked){
//             console.log('element pressed');
//         }
//         else {
//             console.log('element NOT pressed');
//         }
//     }
document.querySelector('#btn-2').onclick = (e) => {
    e.preventDefault()
    // let text = document.querySelector('#text')
    // console.log(text.value)
    // text.value = 'Default'
    let form = document.querySelector('form')
    console.log(form.elements.input.value)
    console.log(form.elements.text.value)
}