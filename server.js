// Requiring express
const express = require('express');
const app = express();

// Requiring morgan
const logger = require('morgan');

// Requiring compression
const compression = require('compression');

// Setting PORT
const PORT = process.env.PORT || 8080;

// Setting all the express parameters
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger('dev'));
app.use(compression());

// Setting all the routes
// app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

// Setting the server
app.listen(PORT, ()=> {});