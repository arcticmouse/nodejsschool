//Filter is like map in that it applies a function to each value in a 
//list of values, and then returns a new list. However, instead of 
//returning a list of function results like map does, filter applies 
//a function that returns a boolean value (a predicate), and only if 
//the function returns true does the value get included in the return list.
//http://jwb.io/20121224-understanding-map-filter-and-fold.html
function getShortMessages(messages){
	var shorter = messages.filter( function(mess){
		if(mess.message.length < 50) return mess;
		}).map( function(mess){
			return mess.message;
			}); //end declare result arr */
	
	return shorter;
} //end funciton getShortMessages

module.exports = getShortMessages;