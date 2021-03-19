const express = require('express');
const route = express.Router();
const rapController = require("../controller/RapController");
const path = require("path");

route.use(express.static('public'));

route.get("/getCinema", rapController.loadRap);

// route.get("/getdetailcinema", rapController.loadChiTietRap);

module.exports = route;
