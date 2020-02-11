var express = require('express');
var initial = express.Router();

initial.get('/', function(req, res){
    res.send('GET handler for localhost:3000/initial/initial.js ');
});

module.exports = initial;
