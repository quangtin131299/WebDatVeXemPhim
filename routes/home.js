const express = require('express');
const route = express.Router();
const homeController = require("../controller/HomeController");
const path = require("path");

route.use(express.static('public'));

route.get("/", homeController.index);

module.exports = route;

