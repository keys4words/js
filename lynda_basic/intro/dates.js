var today = new Date();
console.log(today);
var y2k = new Date(2010, 0, 1);
console.log(y2k);
console.log(today.getMonth());
today.setMonth(1)
console.log(today.getMonth());

var date1 = new Date(2019, 0, 1);
var date2 = new Date(2019, 0, 1);

if(date1.getTime() == date2.getTime()){
    console.log("dates are equal");
}else{
    console.log("dates are NOT equal");
}