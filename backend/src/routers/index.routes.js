const express = require('express');
const routes = express.Router();
const userRoutes = require('./user.routes');

routes.use('/user', userRoutes);

module.exports = routes;
