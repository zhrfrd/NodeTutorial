const names = require('./4-names');   // Check exports from 4-names file
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');

console.log(data);

sayHi('susan');
sayHi(names.peter);
sayHi(names.john);
