var express = require('express');
var update = express.Router();

update.get('/', function(req, res){
    res.send('GET handler for localhost:3000/update/update.js ');
});

module.exports = update;
