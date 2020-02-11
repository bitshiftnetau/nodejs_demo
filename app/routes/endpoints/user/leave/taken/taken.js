var express = require('express');
var taken = express.Router();

taken.get('/', function(req, res){
    res.send('GET handler for localhost:3000/taken/taken.js ');
});

module.exports = taken;
