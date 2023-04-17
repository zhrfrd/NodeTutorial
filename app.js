const names = require('./4-names');   // Check exports from 4-names file
const sayHi = require('./5-utils');

sayHi('susan');
sayHi(names.peter);
sayHi(names.john);
