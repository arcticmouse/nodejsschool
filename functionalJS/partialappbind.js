/*The bind() method creates a new function that,
when called, has its 'this' keyword set to the provided 
value, with a given sequence of arguments preceding 
any provided when the new function is called.*/

module.exports = function(namespace){
	return console.log.bind(arguments, namespace); //arguments == console
}