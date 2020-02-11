var express = require('express');
var scheduled = express.Router();

scheduled.get('/', function(req, res){
    res.send('GET handler for localhost:3000/scheduled/scheduled.js ');
});

module.exports = scheduled;
