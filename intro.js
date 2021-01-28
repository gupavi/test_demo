function sayHello(name){
    console.log("Hello "+name);
}
sayHello('Abhinav');
// console.log(window);//will not work
// console.log();//global
//                  --
//                  | setTimeout();
// in window object | clearTimeout;
//                  | setInterval();
//                  | clearInterval();
//                  | console.log();
//                  --
var message = '';
// console.log(global.message);//undefined
console.log(module);//every file is a module and all variables and functions defined in it are available only in its scope.