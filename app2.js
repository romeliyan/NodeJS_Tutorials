//create directory - synchronous way

//var fs = require('fs');
//fs.mkdirSync('stuff');


//delete directory - synchronous way - only its empty

//var fs = require('fs');
//fs.rmdirSync('stuff');


//create directory - asynchronous way

// var fs = require('fs');
// fs.mkdir('stuff', function () {
// });


//delete directory - asynchronous way - only its empty

// var fs = require('fs');
// fs.rmdir('stuff', function () {
// });


//delete directory - asynchronous way - when its not empty

var fs = require('fs');
fs.unlink('./stuff/hello.txt', function () {
  fs.rmdir('stuff', function () {
  });
});
