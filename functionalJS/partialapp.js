//The apply() method calls a function with a given 'this' value and arguments provided as an array (or an array-like object).

var slice = Array.prototype.slice;

function logger(namespace){
	return function(){
		console.log.apply(console, [namespace].concat(slice.call(arguments)));	
	}; 
} //end function

module.exports = logger;