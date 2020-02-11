var express = require('express');
var google_auth = express.Router();

//check if user is logged in, old cookies should be rejected

var __dirname = './app';
 
google_auth.get('/', function(req, res, next){

    //res.status().send("Hello World");
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    res.end('Hello World\n');

    // Connect to google for login

    //res.sendFile('./views/pages/index.html', {root: __dirname});    
   
    //  layout: file in the layouts folder
    //  template: class 'home-template' currently applied to index body tag
    //  'login': file in the views folder
    res.render('login', {layout: 'index', template: 'home-template'});
    // send login page template

});

module.exports = google_auth;
