var express = require('express');
var emailblast = express.Router();

emailblast.get('/', function(req, res){
    res.send('GET handler for localhost:3000/emailblast/emailblast.js ');
});

module.exports = emailblast;
