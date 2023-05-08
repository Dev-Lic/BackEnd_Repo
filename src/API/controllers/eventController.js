'use strict';
//Write code logic to retreive Data From DB 

const express = require("express");


const sql = require("mssql");

const { pool } = require("../dbFiles/dbConfig");



// -------------Get list of Invoices  ---------------

const getInvoices = (req, res) => {
   pool.connect().then(() =>{
      const request = new sql.Request(pool);
      request
      .query("SELECT * FROM TEIS")
      .then((result) => {
        res.send(result.recordset);
      }).catch((err) => {
        console.error(err);
        res.status(500).send("Error fetching users from database");
        });
      }).catch((err) => {
         console.error(err);
         res.status(500).send("Error connecting to database");
      });
   };


// -------------Get list of Invoices Ends here ---------------



module.exports={
   getInvoices ,
}