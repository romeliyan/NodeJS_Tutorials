//delete files

//****   synchronous way  ******

//  var fs = require('fs');
//  fs.unlinkSync('app2.js');

//****   asynchronous way *******

var fs = require('fs');
fs.unlink('hello.txt', function(){});
