//normal function in JavaScript
function sayHi(){
  console.log('Hello');
}

sayHi();

//function expression
var sayBye = function(){
  console.log('Bye');
}

sayBye();


//pass function to another function
function callFunction(fun){
  fun();
}


callFunction(sayBye);
