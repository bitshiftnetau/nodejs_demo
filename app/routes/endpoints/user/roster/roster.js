var express = require('express');
var roster = express.Router();

roster.get('/', function(req, res){
    res.send('GET handler for localhost:3000/roster/roster.js ');
});

module.exports = roster;
