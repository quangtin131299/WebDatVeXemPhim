const home = require("./home");


function route(app){
    app.get("/", home)
    app.get("/home", home)
    

}



module.exports = route;