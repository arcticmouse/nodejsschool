var net = require('net');



function dateFormat(num){
	return( num < 10 ? '0' : '' ) + num;
}



var server = net.createServer(function(socket){

	var d = new Date();
	var ts = dateFormat(d.getFullYear()) + "-" + dateFormat(d.getMonth() + 1) + "-" + dateFormat(d.getDate()) + " " + dateFormat(d.getHours()) + ":" + dateFormat(d.getMinutes()) + "\n";

	socket.end(ts);
}); //end var server


server.listen(Number(process.argv[2]));