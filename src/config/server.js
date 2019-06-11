const express = require('express');
const path = require('path');
const server = express();
const expressValidator = require('express-validator');
const dotenv = require("dotenv");

//Settings
dotenv.config();
server.set('port', 3030 || process.env.PORT);
server.set('view engine','ejs');
server.set('views', path.join(__dirname,'../views'));
server.set('edit', false);
server.set('listID', 0);

//Middleware
server.use(express.static(path.join(__dirname, "../public"))); //Config public carpet for static files
server.use(express.urlencoded({extended: false}));
server.use(expressValidator()); //Express-validator from e-mail validate

module.exports = server;
