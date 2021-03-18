const home = require("./home");
const login = require("./login");
const dk = require("./dangky");
const ticker = require("./ticker");

function route(app){
    app.use("/", home)
    app.use("/home", home)

    //Login
    app.use("/login", login)
    
    //Đăng ký
    app.use("/dangky", dk);

    app.use("/ticker", ticker)

}



module.exports = route;