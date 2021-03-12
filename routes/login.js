const dangnhapController = require('../controller/DangNhapController');
const express = require('express')
const route = express.Router();

route.use(express.json())
route.use(express.urlencoded({extended: true}))
route.use(express.static('public'));

route.get("/getpage", dangnhapController.index);

route.post("/xulydangnhap", dangnhapController.postLogin);

module.exports = route




