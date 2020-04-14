// function first() {
//     setTimeout( function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

function learnJS(lang, callback) {
    console.log('I learn ' + lang);
    callback();
}

learnJS("JavaScript", function(){
    console.log('I finished 3d lesson');
});

function done() {
    console.log('I finished 3d lesson');
}

learnJS("Python", done);