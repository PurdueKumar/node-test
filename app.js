var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');
var settings = require('./settings');
var googleTranslate = require('google-translate')(settings.googleApiKey);


var port = 8080;
var hostname = 'localhost';

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use(express.static(__dirname));

app.post('/' , (req,res,next) => {

	console.log("incoming post request");

	console.log("text to detect: " + req.body.text);

	googleTranslate.detectLanguage(req.body.text, function(err, detection) {
		
		console.log(detection.language);

		res.status(200);
		res.contentType('text/plain');
		res.end(detection.language);
		
	});
	
	
});

var server = http.createServer(app);

server.listen(port, hostname, function () {

	console.log('Server running at http://' + hostname + ':' + port);
});