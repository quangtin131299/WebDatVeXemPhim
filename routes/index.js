const home = require("./home");
const login = require("./login")
const dk = require("./dangky")


function route(app){
    app.use("/", home)
    app.use("/home", home)

    //Login
    app.use("/login", login)
    
    //Đăng ký
    app.use("/dangky", dk);

}



module.exports = route;