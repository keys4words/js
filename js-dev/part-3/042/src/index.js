let myModule = require('./partial');

let newModule = new myModule();
console.log(newModule.hello());
console.log(newModule.goodbye());