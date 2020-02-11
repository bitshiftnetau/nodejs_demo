var express = require('express');
var contacts = express.Router();

contacts.get('/', function(req, res){
    res.send('GET handler for localhost:3000/contacts ');
});

module.exports = contacts;
