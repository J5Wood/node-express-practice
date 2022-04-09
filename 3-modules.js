// CommonJS, every file in node is a module (default)
// Modules - Encapsulated code (only share minimum)

// console.log(module);

const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternativeFlavor");
require("./7-mindGrenade");

sayHi("Jeremy");
sayHi(john);
sayHi(peter);
