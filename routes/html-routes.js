// Starting express router capacity
const Router = require('express').Router();
const Path = require('path');

// First path, home site
Router.get('/', (req,res) => {
  res.sendFile(Path.join(__dirname, '../public/assets/html/index.html'));
});

// Exporting the Router
module.exports = Router;