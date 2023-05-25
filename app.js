/* CS 340 Project - Liam Todd and Aaron Ducote */

/*
 * SETUP
 */

var express = require('express');
var app = express();
PORT = 5741;


/* 
 * ROUTES
 */

app.get('/', function(req, res)
	{
		res.send("The server is running");
	});

/*
 * LISTENER
 */

app.listen(PORT, function() {
	console.log('Express started on http://localhost:' + PORT + '; press Ctrl+C to terminate.');
});
