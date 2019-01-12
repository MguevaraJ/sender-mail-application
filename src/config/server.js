const express = require('express');
const path = require('path');
const server = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//Settings
server.set('port',3030);
server.set('view engine','ejs');
server.set('views', path.join(__dirname,'../views'));
server.set('edit', false);
server.set('listID', 0);

//Middleware
server.use('/public',express.static('public')); //Config public carpet for static files
server.use(bodyParser.urlencoded({extended: false}));
server.use(expressValidator()); //Express-validator from e-mail validate

module.exports = server;