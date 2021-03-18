const conn = require('./connect')

class RapModel{

    loadALLRap(){
        return new Promise(function(resolve, reject){
            let queryrap = `SELECT * from rapphim`;
            conn.query(queryrap, function(err, result){
                if(err){
                    reject(err);
                }else{
                    console.log(result);
                    resolve(result);
                }
            })
        })

        

    }

    loadChiTietRap(){
        
    }
}


module.exports = new RapModel();