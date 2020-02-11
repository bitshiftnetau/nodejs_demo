var express = require('express');
var perdiems = express.Router();

perdiems.get('/', function(req, res){
    res.send('GET handler for localhost:3000/perdiems/perdiems.js ');
});

module.exports = perdiems;
