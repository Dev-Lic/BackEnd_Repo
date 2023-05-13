'use strict';
//Write code logic to retreive Data From DB 

const express = require("express");

const sql = require("mssql");

const { pool } = require("../../dbFiles/dbConfig");

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


//--------------------Post methode to add an invoice--------------------
 async function  addInvoice (req, res) {
//   const data ={ Billing_Org, Billing_Dept, Charged_Org, Charged_Org_Name, Charged_Dep, Fiscal_Month, Charge_Type, Charge_Unit, Charge_Description="Hey this is me ", Charge_Amount, Billable_Amount, Hyperion_Profit_Center, SAP_Profit_Center, Charge_Category, Revenue_Type, Charged_entity, Year, Month } = req.body;
   
//    pool.connect().then(() =>{ 
//      var request = new sql.Request(pool);
//       request()
//       .input("Billing_Org", sql.VarChar(50), Billing_Org)
//       .input("Billing_Dept", sql.VarChar(50), Billing_Dept)
//       .input("Charged_Org", sql.VarChar(50), Charged_Org)
//       .input("Charged_Org_Name", sql.VarChar(50), Charged_Org_Name)
//       .input("Charged_Dep", sql.VarChar(50), Charged_Dep)
//       .input("Fiscal_Month", sql.VarChar(50), Fiscal_Month)
//       .input("Charge_Type", sql.VarChar(50), Charge_Type)
//       .input("Charge_Unit", sql.VarChar(50), Charge_Unit)
//       .input("Charge_Description", sql.VarChar(200), Charge_Description)
//       .input("Charge_Amount", sql.Float(24), Charge_Amount)
//       .input("Billable_Amount", sql.VarChar(50), Billable_Amount)
//       .input("Hyperion_Profit_Center", sql.VarChar(50), Hyperion_Profit_Center)
//       .input("SAP_Profit_Center", sql.VarChar(50), SAP_Profit_Center)
//       .input("Charge_Category", sql.VarChar(50), Charge_Category)
//       .input("Revenue_Type", sql.VarChar(50), Revenue_Type)
//       .input("Charged_entity", sql.VarChar(50), Charged_entity)
//       .input("Year", sql.Int, Year)
//       .input("Month", sql.VarChar(50), Month)
//       .query("INSERT INTO TEIS SET ? " , data ,(err,result) =>{
//          if(err){
//             res.send('error') ;
//          }
//          else {
//             send(result);}
//       })
//       .then((result) => {
//        console.log('Hiii')
//        console.log(result);
//       }).catch((err) => {
//          console.error(err);
//          res.status(500).send("Error fetching users OR database");
//          });
//        }).catch((err) => {
//           console.error(err);
//           res.status(500).send("Error connecting to database");
//        });
      };
 
 //--------------------Post methode to add an invoice Ends Here--------------------

module.exports={
   getInvoices ,
   getInvoicebyId,
   addInvoice,
}
