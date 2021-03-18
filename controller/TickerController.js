const tickerModel = require('../db/TickerModel');


class Ticker{
    getYourTicker(req, res){
        tickerModel.getYourTicker().then(function(result){
            // console.log(result);
            res.render("Ticker/yourticker", {listTicker: result});
        }).catch(function(err){
            console.log(err);
        })
        
    }
}


module.exports = new Ticker();