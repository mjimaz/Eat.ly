var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

module.exports = function(app, express) {
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static('client'));
	app.use(session( {
		secret: 'it\'s a secret',
		resave: true,
		saveUninitialized: true
	}));
};
