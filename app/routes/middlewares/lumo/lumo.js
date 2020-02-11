var express = require('express');
var lumo = express.Router();

lumo.get('/', function(req, res){
    res.send('GET handler for localhost:3000/casuals/casuals.js ');
});

module.exports = lumo;
