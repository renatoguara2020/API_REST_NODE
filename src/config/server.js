require ('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('../routes');

const app = require('express');
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(routes);



module.exports = app;