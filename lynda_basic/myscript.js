var year = 2019;
var x = '2019';
var month = 4, day = 2;
var month = 'April';
var currentMonth = true;

var message;
if(year === x){
    message = "it's true";
} else {
    message = "it's false";
}

function showAnswer(str1, str2, str3){
    return str1 + str2 + str3;
}

//alert(message);
// console.log(year, x);
// console.log(message);

// var i = 1;
// do {
//     console.log(i);
//     i++;
// }while (i <= 10);
showOdd(2);
alert(showAnswer('Max', ' wins '));

function showOdd(startValue){
    for(var j = startValue; j <= 10; j++){
        if(j % 2 == 0){
            continue;
        }
        console.log(j);
    }
}
