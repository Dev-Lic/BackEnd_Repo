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

//-------------------Get a single Invoice byId -------------

const getInvoicebyId = (req, res) => {

   pool.connect().then(() =>{
      const request = new sql.Request(pool);

       const invoiceId = req.params.id;       //assuming the ID is passed as a URL parameter

      request
      .input('id', sql.VarChar, invoiceId)
      .query('SELECT * FROM TEIS WHERE Id = @id')
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

//-------------------Get a single Invoice byId End Here -------------


module.exports={
   getInvoices ,
   getInvoicebyId,
}