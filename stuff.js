var counter = function(arr){
  return 'There are ' + arr.length + ' elements in the counter';

}

var adder = function(a,b){
  //return `The sum of the two numbers is ${a+b}`;    //template string - embed variables and strings without concatanation (ES6)
  return 'The sum of two numbers is ' + (a+b) ;
}

var pi = 3.142;


module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

// module.exports = {
//   counter:counter,
//   adder:adder,
//   pi:pi
// }
