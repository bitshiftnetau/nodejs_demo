var express = require('express');

var earned = require('./earned/earned.js'),
    taken = require('./taken/taken.js');

var leave_router = express.Router();

leave_router.use('/earned', earned);
leave_router.use('/taken', taken); 

module.exports = leave_router;
