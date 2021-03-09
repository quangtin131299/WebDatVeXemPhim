const conn = require("./connect");

class PhimModel {
  loadPhimDangChieu() {
    return new Promise(function (resolve, reject) {
      let sqlquery = `SELECT phim.ID ,phim.TenPhim, phim.ThoiGian ,phim.Hinh, phim.TrangThai, phim.Trailer from phim WHERE phim.TrangThai = N'đang chiếu'`;
      conn.query(sqlquery, function (err, result) {
        if (err) {
          reject(err)
        } else {      
          resolve(result)
        }
      });
    });
  }
  loadChiTietPhim(idphim){

  }
  
}

module.exports = new PhimModel();
