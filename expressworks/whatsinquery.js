var express = require('express');
var app = express();

app.get('/search', function(req, res){
	var id = req.query;
	res.send(id);
});

app.listen(process.argv[2]);