const conn = require("./connect");

class ThanhToanModel {
  thanhtoan(
    ngaydat,
    idsuat,
    idghe,
    idphim,
    idkhachhang,
    idrap,
    status,
    idphong
  ) {
    return new Promise(function (resolve, reject) {
      let sqlqueryhoadon = `INSERT INTO hoadon  VALUES (NULL, '${ngaydat}', '45000', '${idkhachhang}', 'Chưa thanh toán');`;
      conn.query(sqlqueryhoadon, function (err, resulthd) {
        if (err) {
          reject(err);
          console.log(err);
        } else {
          let sqlquery = `INSERT INTO vedat VALUES (NULL, '${ngaydat}', '${idsuat}', '${idghe}', '${idphim}', '${idkhachhang}', '${idrap}', '${resulthd.insertId}', '${status}', '${idphong}')`;
          conn.query(sqlquery, function (err, resultvedat) {
            if (err) {
              reject(err);
              console.log(err);
            } else {
              let sqlqueryghephong = `UPDATE ghe set ghe.TrangThai = N'Đã đặt' WHERE ghe.ID = ${idghe} AND ghe.ID_Phong = ${idphong}`;
              conn.query(sqlqueryghephong, function (err, result) {
                if (err) {
                  reject(err);
                  console.log(err);
                } else {
                  resolve(true);
                  console.log("thành công !");
                }
              });
            }
          });
        }
      });
    });
  }
}

module.exports = new ThanhToanModel();
