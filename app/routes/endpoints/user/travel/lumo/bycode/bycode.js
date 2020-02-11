var express = require('express');
var bycode = express.Router();

bycode.get('/', function(req, res){
    res.send('GET handler for localhost:3000/bycode/bycode.js ');
});

module.exports = bycode;
