let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');
// btn[0].onclick = function(){
//     alert('You pressed first key');
// }

// btn[0].addEventListener('click', function(e){
//     console.log(e);
    
//     let target = e.target;
//     // target.style.display = 'none';
//     console.log('Event happens: ' + e.type + ' on element ' + e.target);
    
// });

// wrap.addEventListener('click', function(e) {
//     console.log('Event happens: ' + e.type + ' on element ' + e.target);
// });

link.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Event happens: ' + e.type + ' on element ' + e.target);
});

btn.forEach(function(item){
    item.addEventListener('mouseleave', function() {
        console.log('You out');
    });
});

// btn[0].addEventListener('click', function () {
//     alert('You pressed key second time');
// });

// btn[0].addEventListener('mouseenter', function () {
//     alert('You aim the first button');
// });
