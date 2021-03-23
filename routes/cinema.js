const express = require('express');
const route = express.Router();
const rapController = require("../controller/RapController");



route.get("/getCinema", rapController.loadRap);


module.exports = route;
