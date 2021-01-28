const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
// console.log("totalMemory " + totalMemory);

// template string: ES8: ecma script 8
console.log(`Total Memory:  ${totalMemory}`);
console.log(`Free Memory:  ${freeMemory}`);