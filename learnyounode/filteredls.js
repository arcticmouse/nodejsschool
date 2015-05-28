var fs = require('fs');
var path = require('path');

var directory = process.argv[2]; //directory
var filter = false;
filter = process.argv[3]; //only with these extentions

var buf = fs.readdir( directory, function(err, files){
		if(err) throw err;

		if(filter) {
			files.forEach( function(file){
				if(path.extname(file) == '.' + filter) console.log(file);
			});
		} else console.log(files);
	});