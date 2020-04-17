// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);


// let arr = ['aa', 'sfd', 'sdsdfs', 'qqq'],
//     i = arr.join(',');
// console.log(i);

let arr = [1, 15, 2],
    i = arr.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}
console.log(i);
