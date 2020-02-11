var express = require('express');
var bydeparr = express.Router();

bydeparr.get('/', function(req, res){
    res.send('GET handler for localhost:3000/bydeparr/bydeparr.js ');
});

module.exports = bydeparr;
