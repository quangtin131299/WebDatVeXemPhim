const conn = require("./connect");

class PhimModel {
  loadPhimDangChieu() {
    return new Promise(function (resolve, reject) {
      let sqlquery = `SELECT phim.ID ,phim.TenPhim, phim.ThoiGian ,phim.Hinh, phim.TrangThai, phim.Trailer from phim WHERE phim.TrangThai = N'đang chiếu'`;
      conn.query(sqlquery, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  loadChiTietPhim(idphim) {
    return new Promise(function (resolve, reject) {
      let sqlquery = `SELECT phim.ID, phim.TenPhim, phim.Trailer,phim.Hinh, phim.ThoiGian, loaiphim.TenLoai, phim_loaiphim.MoTa, phim_loaiphim.NgayKhoiChieu 
      from phim JOIN phim_loaiphim ON phim.ID = phim_loaiphim.ID_Phim JOIN loaiphim ON loaiphim.ID = phim_loaiphim.ID_Loai 
      WHERE phim.ID = ${idphim} AND phim.TrangThai = N'đang chiếu'`;

      conn.query(sqlquery, function (err, result) {
        if (err) {
          reject(err);
        } else {
          let temptenphim = "";
          let mangkq = [];
          for (let i = 0; i < result.length; i++) {
            if (result[i].TenPhim !== temptenphim) {
              for (let j = i + 1; j < result.length; j++) {
                if (result[j].TenPhim === result[i].TenPhim) {
                  result[i].TenLoai += ", " + result[j].TenLoai;
                }
              }
              temptenphim = result[i].TenPhim;
              mangkq.push(result[i]);
            }
          }

          resolve(mangkq[0]);
        }
      });
    });
  }
}

module.exports = new PhimModel();
