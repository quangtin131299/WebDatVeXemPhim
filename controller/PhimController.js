const phimModel = require("../db/PhimModel");

class PhimController {
  getChiTietPhim(req, res) {
    let idphim = req.query.id;
    phimModel
      .loadChiTietPhim(idphim)
      .then(function (result) {
        console.log(result);
        res.render("Phim/chitietphim", { phimchitiet: result });
      })
      .catch(function (err) {
          console.log("ABC");
      });
  }
}

module.exports = new PhimController();
