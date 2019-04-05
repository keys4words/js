var phrase = "He said \"and that's fine\" and went away.";
console.log(phrase);
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());
console.log(phrase.split(' '));
if(phrase.indexOf('this') == -1){
    console.log('No such word in sentence');
}else {
    console.log(phrase.indexOf('this'));
}

console.log(phrase.lastIndexOf('and'));
console.log(phrase.slice(3, 7));



