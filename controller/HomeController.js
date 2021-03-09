const phimModel = require("../db/PhimModel")
class HomeController{

    index(req, res){
        let listPhimDC = [];
        phimModel.loadPhimDangChieu().then((result) => {
            listPhimDC = result;  
            res.render("Home/index", {listPhimDC: listPhimDC})
        }).catch((err) => {
            console.log(err);
        });        
    }


}


module.exports = new HomeController();