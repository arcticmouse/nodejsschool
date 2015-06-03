//counter has to actually be named 'spy'  >_>

function Spy(target, method){
	var spy = {count: 0};
	var old_method = target[method];

	target[method] = function(){
		spy.count++;
		return old_method.apply(this, arguments);
	};

	return spy;
} //end function Spy

module.exports = Spy