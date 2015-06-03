//function has a function (operation) as an argument
function repeat(operation, num){
	if(num <= 0) return;
	operation();
	return repeat(operation, --num);
} //end function

module.exports = repeat; //you dont need the paranthesis to call this function