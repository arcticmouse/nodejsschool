//require libraries
var http = require('http');
var url = require('url');

//get user input
var port = process.argv[2];


function receiveGET(url){
	if (url.pathname === '/api/parsetime') {
		date = new Date(url.query.iso);
		return {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}; //end return
	} else if (url.pathname === '/api/unixtime') {
			return { unixtime: new Date(url.query.iso).getTime() };
		} else return null; //end if else
} //end funciton receiveGET


var server = http.createServer(function(request, response){
	path = url.parse(request.url, true);
	resource = receiveGET(path);

	if(resource){
		response.writeHead(200, {'Content-Type': 'applicaiton/json'});
		response.end(JSON.stringify(resource));
	} else {
			response.writeHead(404);
			response.end();
		}//end if resource
}); //end create server

server.listen(port);