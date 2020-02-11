var express = require('express');
var reminders = express.Router();

reminders.get('/', function(req, res){
    res.send('GET handler for localhost:3000/reminders/reminders.js ');
});

module.exports = reminders;
