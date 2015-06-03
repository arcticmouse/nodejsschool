//The call() method calls a function with a given this value and arguments provided individually.
//The hasOwnProperty() method returns a boolean indicating whether the object has the specified property.
//The in operator returns true if the specified property is in the specified object.
//The slice() method returns a shallow copy of a portion of an array into a new array object.

/*from array prototype, slice each portion and filter it with a function that returns
whether the object has a property set to quack ... then return the length of those that return true.
had to look this answer up!!!*/
function duckCount(){
	return Array.prototype.slice.call(arguments).filter(function(obj){
		return Object.prototype.hasOwnProperty.call(obj, 'quack');
	}).length; 
} //end function duckCount

module.exports = duckCount;