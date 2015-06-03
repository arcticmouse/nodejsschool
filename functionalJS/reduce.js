  //performs a fold
  function countWords(inputWords) {
    return inputWords.reduce( function(obj, word){
    	obj[word] = ++obj[word] || 1; //increment operand OR initialize to 1
    	return obj;
    }, {}); //end reduce
  } //end function

  module.exports = countWords;