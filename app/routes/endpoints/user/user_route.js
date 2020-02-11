var express = require('express');

var calendar = require('./calendar/calendar.js'),
    initial = require('./initial/initial.js'),
    leave = require('./leave/leave_route.js'),
    perdiems = require('./perdiems/perdiems.js'),
    roster = require('./roster/roster.js'),
    scope = require('./scope/scope.js'),
    tasks = require('./tasks/tasks.js'),
    google_auth = require('../../middlewares/auth/google.js'),
    travel = require('./travel/travel_route.js');

var user_router = express.Router();

user_router.use('/calendar', calendar);
user_router.use('/initial', initial);
user_router.use('/leave', leave);
user_router.use('/perdiems', perdiems);
user_router.use('/roster', roster);
user_router.use('/scope', scope);
user_router.use('/tasks', tasks);
user_router.use('/travel', travel);

module.exports = user_router;
