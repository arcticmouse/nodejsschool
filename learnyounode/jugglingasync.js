var http = require('http');

var results = [];
var index = 0;
var length = process.argv.length;



function printResults(){
	for(q = 0; q < results.length; q++) {
		console.log(results[q]);
	} //end for q
} //end funciton print results



function getTheHttp(k){
	http.get(process.argv[k + 2], function(response) {
		  //console.log(k + ' ' + process.argv[k + 2]);
		  var str = '';

		  response.setEncoding('utf8');

		  response.on("data", function(d){
		  	str += d;
		  }); //end on data

		  response.on("end", function(end){
		  	results[k] = str;
		  	index++;
		  	if(index == 3) printResults();
		  }); //end response.end
	}).on("error", console.error);
} //end function get the http


for(i = 0; i < length; i++)
	getTheHttp(i);
