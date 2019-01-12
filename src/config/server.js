const express = require('express');
const path = require('path');
const server = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');

//Settings
server.set('port',3030);
server.set('view engine','ejs');
server.set('views', path.join(__dirname,'../views'));

//Middleware
server.use('/static',express.static('public'));
server.use(bodyParser.urlencoded({extended: false}));
server.use(expressValidator());
server.use(expressSession({"secret":"CS+JD/", "resave":true, "saveUninitialized":true}));

module.exports = server;