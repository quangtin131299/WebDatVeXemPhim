const home = require("./home");
const login = require("./login");
const dk = require("./dangky");
const ticker = require("./ticker");
<<<<<<< HEAD
const phim = require("./phim");
=======
const cinema = require("./cinema")
>>>>>>> 1b1ca946b1a0e1e1dc8d680bb7c81bfaf3f0844a

function route(app){
    app.use("/", home)
    app.use("/home", home)

    //Login
    app.use("/login", login)
    
    //Đăng ký
    app.use("/dangky", dk);

    app.use("/ticker", ticker);

    app.use("/detailMovie", phim)

    app.use("/cinema",  cinema)

}



module.exports = route;