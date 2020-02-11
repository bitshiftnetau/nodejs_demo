var express = require('express');
var reports = express.Router();

reports.get('/', function(req, res){
    res.send('GET handler for localhost:3000/reports/reports.js ');
});

module.exports = reports;
