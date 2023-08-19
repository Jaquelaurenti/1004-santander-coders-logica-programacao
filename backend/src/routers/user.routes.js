const express = require('express');
const routesUsers = express.Router();

// importando  a controller de usário
const userController = require('../controllers/userController');
routesUsers.post('', userController.create);

module.exports = routesUsers;
