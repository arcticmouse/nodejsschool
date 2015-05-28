//require libraries
var http = require('http');
var map = require('through2-map');

//get user input
var port = process.argv[2];

var upper = map(function(chunk){
	return chunk.toString().toUpperCase();
});

var server = http.createServer(function(request, response){
	request.pipe(upper).pipe(response);
	}).listen(port); //end server listen