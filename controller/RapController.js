const rapModel = require('../db/RapModel')
class RapController{

    loadRap(req, res){
        rapModel.loadALLRap().then(function(result){
            res.render("Cinema/cinema", {listrap: result});
        }).catch(function(err){
            res.render("Cinema/cinema"); 
        })
        
    }
}

module.exports = new RapController();