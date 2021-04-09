const conn = require("./connect");
const md5 = require("md5");

class DangKyModel {
  dangky(hoten, tk, mk, email, ngaysinh, sdt) {
    return new Promise(function (resolve, reject) {
      let sql=`SELECT Email from khachhang where Email= '${email}' `;
      conn.query(sql,function(err,result){
        console.log(result);
        if(result.length!=0){
          console.log(err);
          reject("Email này đã tồn tại");
        }
        else{
          mk = md5(mk);
          let querydk = `INSERT INTO khachhang VALUES (NULL, ?, ?,?,?,?,?)`;
          conn.query(
            querydk,
            [hoten, email, ngaysinh, sdt, tk, mk],
            function (err, result) {
              if (err) {
                console.log(err);
                reject("Username đã tôn tại");
              } else {
                if (result) {
                  resolve(result);
                }else{
                  reject(false);
                }
              }
            }
          );
        }
      })
      
    });
  }
}

module.exports = new DangKyModel();
