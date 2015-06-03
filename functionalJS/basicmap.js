//map takes a list of values, applies a function to each of those values, and returns a list of the result of those function applications
//http://jwb.io/20121224-understanding-map-filter-and-fold.html
function doubleAll(numbers) {
	var result = numbers.map( function(num){
		return num*2;
	}); //end declare result arr

	return result;
}

module.exports = doubleAll;