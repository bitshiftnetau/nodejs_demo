/*
 * Main file for defining routes
 */

//
// Define all routes here for top-level endpoints, lower-level enpoints will be defines within each module
//

var express = require('express');

var casuals = require('./casuals/casuals.js');
var contacts = require('./contacts/contacts.js');    
var employees = require('./employees/employees.js');    
var transmissions = require('./transmissions/trans_route.js');
var user = require('./user/user_route.js');
var g_auth = require('../middlewares/auth/google.js');

var endpoints_router = express.Router();

endpoints_router.use('/', g_auth); //always direct to auth so we can check user 
endpoints_router.use('/casuals', casuals);
endpoints_router.use('/contacts', contacts); 
endpoints_router.use('/employees', employees);
endpoints_router.use('/transmissions', transmissions);
endpoints_router.use('/user', user);

module.exports = endpoints_router;
