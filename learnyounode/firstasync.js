var fs = require('fs');
var buf = fs.readFile(process.argv[2], 'utf8', function(err, data){
		if(err) throw err;
		var lines = data.split('\n');
		console.log(lines.length - 1);
	});