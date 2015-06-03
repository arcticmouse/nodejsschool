function repeat(operation, num) {
		if (num <= 0) return;
		operation();

		//release control after every 5 iterations
		if(num % 5 === 0) {
			setTimeout(function(){
				repeat(operation, --num);
			});
		} else return repeat(operation, --num);
}

module.exports = repeat