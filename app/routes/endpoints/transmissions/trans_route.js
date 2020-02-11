var express = require('express');

var dailydigest = require('./dailydigest/dailydigest.js'),
    emailblast = require('./emailblast/emailblast.js'),
    reminders = require('./reminders/reminders.js'),
    reports = require('./reports/reports.js');

var trans_router = express.Router();

trans_router.use('/dailydigest', dailydigest);
trans_router.use('/emailblast', emailblast);
trans_router.use('/reminders', reminders);
trans_router.use('/reports', reports);

module.exports = trans_router;

