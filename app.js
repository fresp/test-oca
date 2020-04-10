const express = require('express');
const app = express();
const { Module } = require('./configs/Module');
const { Route } = require('./core/Route');

//init all module
const mod = new Module(app);
mod.bodyParser();
mod.dotenv();
mod.template();
mod.assets(express);
mod.morgan();


//init default route
Route.defaultRoute(app);

module.exports = app;