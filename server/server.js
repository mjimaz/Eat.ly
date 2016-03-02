var express = require('express');
var mongoose = require('mongoose');
var app = express();

// middleware.js houses all the middleware that is run by express
require(__dirname + '/serverConfig/middleware.js')(app, express);

// routes.js defines the application's endpoints
require(__dirname + '/serverConfig/routes.js')(app, express);

mongoose.connect('mongodb://127.0.0.1/photogenicFood');

app.listen(3000, function() {
	console.log('listening on 3000');
});