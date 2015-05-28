var fs = require('fs');
var path = require('path');

module.exports = function(dir, filt, callback){
	fs.readdir(dir, function(err, files){
		if(err) return callback(err);

		fileList = new Array();
		filt = '.' + filt;

		files.forEach( function(file){
			if(path.extname(file) == filt) fileList.push(file);
		}); //end foreach files as file	

		return callback(err, fileList);
	}); //fs readdir
}; //mymodule function