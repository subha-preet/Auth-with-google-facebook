const express = require('express');

process.env.NODE_CONFIG_DIR = 'config/';
var app_instance = process.argv.NODE_APP_INSTANCE;
process.argv.NODE_APP_INSTANCE = "";
config = require('config');
process.argv.NODE_APP_INSTANCE = app_instance;

var app = express();
global.app = app;

require('./middlewares/index');
require('./middlewares/router');

require('./modules');
require('./services/startupService').initializeServer();
console.log('app.js');