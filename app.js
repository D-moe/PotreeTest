const express = require('express');
const app = express();

app.use('/', express.static('potree'));

module.exports = app;
