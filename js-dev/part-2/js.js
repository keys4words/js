'use strict';

let num = 50;
// if (num < 49) {
//     console.log('Less than 49');
// } else if (num > 100) {
//     console.log('More than 100');
// } else {
//     console.log('Between 50 and 100');
// }

// (num == 50) ? console.log('equal to 50') : console.log('not equal to 50');

switch (num) {
    case num < 49:
        console.log('Less than 49');
        break;
    case num > 100:
        console.log('More than 100');
        break;
    case 50:
        console.log('equal to 50');
        break;

    default:
        console.log('default');
        break;
}