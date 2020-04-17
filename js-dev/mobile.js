window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
        
    // });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });

    // box.addEventListener('touchend', function (e) {
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });

    // new RegExp('pattern', 'flags');
    // let ans = prompt('Input your name');
    // let reg = /n/g;
    // console.log(ans.search(reg));
    // console.log(ans.match(reg));
    // console.log(reg.test(ans));
    

    // let pass = prompt('Input your password');
    
    // console.log(pass.replace(/./g, '*'));
    // alert('345-345-55'.replace(/-/g, ':'));
    
    
    // let ans = prompt('Input your number');
    // let reg = /\d/g;
    // console.log(ans.match(reg));

    let str = 'My name is R2D2';
    console.log(str.match(/\w\d\w\d/i));
    
    

});