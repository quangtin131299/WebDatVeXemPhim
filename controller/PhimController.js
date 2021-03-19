const phimModel = require('../db/PhimModel')

class PhimController{

    getChiTietPhim(req, res){
        res.render("Phim/chitietphim");
    }

}

module.exports = new PhimController();

