function reduce(arr, initial){
	if(initial in arr) return;

	arr[initial] = ++arr[initial] || 1;
	return reduce(arr, initial);
} //end function reduce

module.exports = reduce;