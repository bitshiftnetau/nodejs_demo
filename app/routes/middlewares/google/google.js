var express = require('express');
var google = express.Router();

google.get('/', function(req, res){
    res.send('GET handler for localhost:3000/casuals/casuals.js ');
});

module.exports = google;
