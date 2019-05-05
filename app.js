//reading and writing files
//need a module - FS

var fs = require('fs'); //generally set the variable name equal to module name

var readMe = fs.readFileSync('readme.txt', 'utf8'); //syncronous - read the whole file then execute the bellow code
//console.log(readMe);

fs.writeFileSync('writeme.txt', readMe);
