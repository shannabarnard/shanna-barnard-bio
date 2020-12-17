const { Router } = require('express');
const home = require('./home');
const profile = require('./profile');

const routes = Router();

routes.use('/', home);
routes.use('/profile', profile);

module.exports = routes;
