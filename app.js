/* CS 340 Project - Liam Todd and Aaron Ducote */

/*
 * SETUP
 */

var express = require('express');
var app = express();
PORT = 5741;

var db = require('./database/db-connector');

/* 
 * ROUTES
 */

app.get('/', function(req, res)
	{
		query1 = 'DROP TABLE IF EXISTS diagnostic;';
        	query2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
        	query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
	        query4 = 'SELECT * FROM diagnostic;';

		db.pool.query(query1, function(err, results, fields) {
			db.pool.query(query2, function(err, results, fields) {
				db.pool.query(query3, function(err, results, fields) {
					db.pool.query(query4, function(err, results, fields) {
						let base = "<h1>MySQL Results:</h1>";
						res.send(base + JSON.stringify(results));
					});
				});
			});
		});
	});

/*
 * LISTENER
 */

app.listen(PORT, function() {
	console.log('Express started on http://localhost:' + PORT + '; press Ctrl+C to terminate.');
});
