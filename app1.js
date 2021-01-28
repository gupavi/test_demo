var logger = require("./logger1_export_module");
console.log(logger);
logger.mylogfunction("Import successful");

// const logger = require("./logger");//good practice
// logger = 1;//compilation error
