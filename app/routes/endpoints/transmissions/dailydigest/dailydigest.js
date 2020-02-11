var express = require('express');
var dailydigest = express.Router();

dailydigest.get('/', function(req, res){
    res.send('GET handler for localhost:3000/dailydigest/dailydigest.js ');
});

module.exports = dailydigest;
