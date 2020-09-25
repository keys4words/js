const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// forEach
// companies.forEach(function(el, index){
//     console.log(`${index+1} -> ${el.name}`);
// })

// filter
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
// let canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

let canDrink = ages.filter(age => age>=21);
// console.log(canDrink);

let retailCompanies = companies.filter(el => el.category === 'Retail');
// console.log(retailCompanies);

let eightiesCompanies = companies.filter(el => (el.start >= 1980 && el.start <= 1990));
// console.log(eightiesCompanies);

// map
// create array of company names
const companiesNames = companies.map(el => `${el.name} [${el.start} - ${el.end}]`);
// console.log(companiesNames);

const agesSquare = ages.map(age => Math.sqrt(age))
    .map(age => age * 2);
// console.log(agesSquare);

// sort
// const sortedCompanies = companies.sort(function(el1, el2){
//     if(el1.start > el2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);
// const sortAges = ages.sort();
const sortAges = ages.sort((a, b) => a - b);

// console.log(ages);

// reduce
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }
// let ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

let ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0);
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

// combine methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a-b)
    .reduce((a,b) => a + b, 0);

console.log(combined);