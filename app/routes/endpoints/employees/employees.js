var express = require('express');
var employees = express.Router();

employees.get('/', function(req, res){
    res.send('GET handler for localhost:3000/employees/employees.js ');
});

module.exports = employees;
