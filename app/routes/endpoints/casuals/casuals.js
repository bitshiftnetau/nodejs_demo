var express = require('express');
var casuals = express.Router();

casuals.get('', function(req, res){
    res.send('GET handler for localhost:3000/casuals ');
});

module.exports = casuals;
