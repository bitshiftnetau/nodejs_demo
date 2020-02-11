var express = require('express');
var calendar = express.Router();

calendar.get('/', function(req, res){
    res.send('GET handler for localhost:3000/calendar/calendar.js ');
});

module.exports = calendar;
