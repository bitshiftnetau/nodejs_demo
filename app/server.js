/*
 * Main entry point for the server
 */

global.__basedir = __dirname;

var express = require('express')
var exphbs = require( 'express-handlebars');

const app = express()
const port = (process.env.PORT || 4000);

const endpoints_router = require('./routes/endpoints/endpoints_route.js'); 
app.use('/', endpoints_router);

app.engine( 'handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', __basedir + '/views');

app.listen(port, () => console.log(`Nodemin listening on port ${port}!`))