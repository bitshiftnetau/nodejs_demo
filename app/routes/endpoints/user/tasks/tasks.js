var express = require('express');
var tasks = express.Router();

tasks.get('/', function(req, res){
    res.send('GET handler for localhost:3000/tasks/tasks.js ');
});

module.exports = tasks;
