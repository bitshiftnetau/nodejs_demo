var express = require('express');

var bycode = require('./lumo/bycode/bycode.js'),
    bydeparr = require('./lumo/bydeparr/bydeparr.js'),
    scheduled = require('./scheduled/scheduled.js');

var travel_router = express.Router();

travel_router.use('/bycode', bycode);
travel_router.use('/bydeparr', bydeparr);
travel_router.use('/scheduled', scheduled);

module.exports = travel_router;
