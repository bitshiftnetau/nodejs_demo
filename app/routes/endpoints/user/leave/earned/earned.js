var express = require('express');
var earned = express.Router();

earned.get('/', function(req, res){
    res.send('GET handler for localhost:3000/earned/earned.js ');
});

module.exports = earned;
