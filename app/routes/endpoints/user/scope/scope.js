var express = require('express');
var scope = express.Router();

scope.get('/', function(req, res){
    res.send('GET handler for localhost:3000/scope/scope.js ');
});

module.exports = scope;
