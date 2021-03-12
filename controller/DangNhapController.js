const loginModel = require("../db/LoginModel");

class DangNhapController {
  index(req, res) {
    res.render("Login/login");
  }

  postLogin(req, res) {
    let username = req.body.txtusername;
    let password = req.body.txtpassword;

    loginModel
      .login(username, password)
      .then(function (result) {
        res.redirect("/home");
      })
      .catch(function (err) {
        res.render("Login/login", { message: "Đăng nhập thất bại" });
      });
  }
}

module.exports = new DangNhapController();
