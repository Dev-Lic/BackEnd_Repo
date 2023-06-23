"use strict";
const sql = require("mssql");


const pool = new sql.ConnectionPool(
    {
      user: "sa",
      password: "1234",
      server: 'DESKTOP-3EMFDSG', 
      database: "TEConnectivity",
   
      encrypt: true,
      pool: {
        idleTimeoutMillis: 30000,
      },
      options: {
        port: 1433,
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
    },
    (err) => {
      if (err) {
        console.log("######## connection error : ", err);
      }
    }
  );
  

  module.exports ={
    sql,
     pool
  }

  
   



   