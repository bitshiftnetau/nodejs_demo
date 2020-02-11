var express = require('express');
var lumo_auth = express.Router();

lumo_auth.get('/', function(req, res){
    res.send('GET handler for localhost:3000/casuals/casuals.js ');
});

module.exports = lumo_auth;
