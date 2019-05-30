const express = require('express');
const getTasks = require('./routes/tasks');
const addTasks = require('./routes/tasks');
const bodyParser = require('body-parser');
const app = express();

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/tasks', getTasks);
app.use('/api/tasks', addTasks);

module.exports = app;