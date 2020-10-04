// basic function
// function(elem, index, array ) {}

var array = [1, 2, 3, 4, 5, 6, 7]
var newArray = [];
var counter = 0;
var response = [
    {
        'index': 0,
        'isActive': true,
        'age': 22,
        'name': 'Jeffry Morrison',
        'gender': 'male',
        'email': 'j.morrisson@yahoo.com'
    },
    {
        'index': 1,
        'isActive': true,
        'age': 26,
        'name': 'Mike Tyson',
        'gender': 'male',
        'email': 'm.tyson@yahoo.com'
    }, {
        'index': 2,
        'isActive': true,
        'age': 45,
        'name': 'John Doe',
        'gender': 'male',
        'email': 'j.doe@yahoo.com'
    }
];

// forEach()
array.forEach(function (elem) {
    // newArray.push(elem *= elem);
    counter += elem;
});
// console.log(newArray);
// console.log(counter);

var getNames = function(elem) {
    newArray.push(elem.name);
};
response.forEach(getNames);
// console.log(newArray);

// map function
newArray = array.map(function(elem){
    return elem *= elem;
});
// console.log(newArray);

mappedArray = response.map(function (elem) {
    return {
        name: elem.name,
        email: elem.email
    };
});
console.log(mappedArray);



