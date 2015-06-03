module.exports = function arrayMap(arr, fn){
	return arr.reduce( function(prev, curr){
		return prev.concat(fn(curr));
	}, []) //end return
}