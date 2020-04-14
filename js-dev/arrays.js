let arr = [1, 2, 3, 4, 111];
console.log(arr);
arr.pop();
arr.push(444);
arr.shift();
arr.unshift("000");
console.log(arr);

// for (let i=0; i < arr.length; i++) {
//     console.log(i + ' - ' + arr[i]);
// }
arr[8] = "8888";
console.log('fictious length = ' + arr.length);

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + ' from array=[' + mass + ']');
});

let arr2 = [1, 4, 6, 7, 8, 13];
for (let key of arr2){
    // console.log(key + ': ' + arr2[key]);
    console.log(key);
}