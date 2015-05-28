//require libraries
var fs = require('fs');
var http = require('http');

//get user input
var port = process.argv[2];
var host = process.argv[3];

//create file from file stream
var file = fs.createReadStream(host);

//create http server, pipe the response that streams, listen to the host
var server = http.createServer(function(request, response){
	file.pipe(response);
	}).listen(port); //end server listen
