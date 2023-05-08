const config            = require('./dbConfig') ;
const sql               = require('mssql');


const getTeis = async() => {
    try{

        let pool = await sql.connect(config);
        let teis = pool.request().query("SELECT * FROM TEIS;");
        console.log(teis);
        return teis ;

    }catch(error)
    {
        console.log(error);
    }
}



module.exports={
   getTeis,
}