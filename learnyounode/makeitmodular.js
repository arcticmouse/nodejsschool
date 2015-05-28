/**********************************************
program prints list of files in a given directory
-filtered by extension of files
-first artugment is dir name
-second argument is extension filter
-print to console
-use asynchronous i/o

module 
-export single function that takes 3 arguments
-dir name, file name extension string, callback function (in this order)
-file name extension string : do not modify when passing
-callback function most use node(err, data) convention
************************************************/

var mymodule = require('./mymodule.js');
var directory = process.argv[2]; //directory
var filter = process.argv[3]; //only with these extentions

mymodule( directory, filter, function(err, data){
	if(err) throw err; 

	data.forEach( function(d){
		console.log(d);
	}); //end data foreach as d
});