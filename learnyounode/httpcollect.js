var http = require('http');

http.get(process.argv[2], function(response) {
	  var str = '';

	  response.setEncoding('utf8');

	  response.on("data", function(d){
	  	str += d;
	  }); //end on data

	  response.on("end", function(end){
	  	console.log(str.length);
	  	console.log(str);
	  }); //end response.end
}).on("error", console.error);
