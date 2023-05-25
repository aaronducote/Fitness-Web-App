/* CS 340 Project - Liam Todd and Aaron Ducote */

/*
 * SETUP
 */

var express = require('express');
var app = express();
PORT = 5741;

var db = require('./database/db-connector');


const { engine } = require('express-handlebars');
var exphs = require('express-handlebars');
app.engine('.hbs', engine({extname: ".hbs"}));
app.set('view engine', '.hbs');

/* 
 * ROUTES
 */

app.get('/', function(req, res)
	{
		res.sender('index');
	});

/*
 * LISTENER
 */

app.listen(PORT, function() {
	console.log('Express started on http://localhost:' + PORT + '; press Ctrl+C to terminate.');
});
