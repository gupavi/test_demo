const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
//tells the root, directory path, name of file, extension of the file, name of the file without extension
//use path module instead of string to deal with "path" related issues.