function foo(){
	var bar;
	quux = 0;
	function zip(){
		var quux = 32;
		bar = true;
	} //end fn zip
	return zip;
} //end fn foo