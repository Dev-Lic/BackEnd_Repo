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

const Billing_Org = req.body.Billing_Org;
const Billing_Dept = req.body.Billing_Dept;
const Charged_Org = req.body.Charged_Org;
const Charged_Org_Name = req.body.Charged_Org_Name;
const Charged_Dep = req.body.Charged_Dep;
const Fiscal_Month = req.body.Fiscal_Month;
const Charge_Type = req.body.Charge_Type;
const Charge_Type_Description = req.body.Charge_Type_Description;
const Charge_Unit = req.body.Charge_Unit;
const Charge_Description = req.body.Charge_Description || 'Default Description';
const Charge_Amount = req.body.Charge_Amount;
const Billable_Amount = req.body.Billable_Amount;
const Hyperion_Profit_Center = req.body.Hyperion_Profit_Center;
const SAP_Profit_Center = req.body.SAP_Profit_Center;
const Charge_Category = req.body.Charge_Category;
const Revenue_Type = req.body.Revenue_Type;
const Charged_entity = req.body.Charged_entity;
const Year = req.body.Year;
const Month = req.body.Month;

// const query = "INSERT INTO TEIS (Billing_Org, Billing_Dept, Charged_Org, Charged_Org_Name, Charged_Dep, Fiscal_Month, Charge_Type, Charge_Type_Description, Charge_Unit, Charge_Description, Charge_Amount, Billable_Amount, Hyperion_Profit_Center, SAP_Profit_Center, Charge_Category, Revenue_Type, Charged_entity, Year, Month) VALUES ('" + Billing_Org + "', '" + Billing_Dept + "', '" + Charged_Org + "', '" + Charged_Org_Name + "', '" + Charged_Dep + "', '" + Fiscal_Month + "', '" + Charge_Type + "', '" + Charge_Type_Description + "', '" + Charge_Unit + "', '" + Charge_Description + "', '" + Charge_Amount + "', '" + Billable_Amount + "', '" + Hyperion_Profit_Center + "', '" + SAP_Profit_Center + "', '" + Charge_Category + "', '" + Revenue_Type + "', '" + Charged_entity + "', '" + Year + "', '" + Month + "')";

const query = "INSERT INTO [dbo].[TEIS]([Billing_Org],[Billing_Dept],[Charged_Org],[Charged_Org_Name],[Charged_Dep],[Fiscal_Month],[Charge_Type],[Charge_Type_Description],[Charge_Unit],[Charge_Description],[Charge_Amount],[Billable_Amount],[Hyperion_Profit_Center],[SAP_Profit_Center],[Charge_Category],[Revenue_Type],[Charged_entity],[Year],[Month])VALUES( @Billing_Org, @Billing_Dept, @Charged_Org, @Charged_Org_Name, @Charged_Dep, @Fiscal_Month, @Charge_Type, @Charge_Type_Description,@Charge_Unit,@Charge_Description,@Charge_Amount,@Billable_Amount,@Hyperion_Profit_Center,@SAP_Profit_Center,@Charge_Category,@Revenue_Type,@Charged_entity,@Year,@Month) "

   pool.connect().then(() =>{ 
     const request = new sql.Request(pool);
      request
      .input("Billing_Org", sql.NChar(10), Billing_Org)
      .input("Billing_Dept", sql.NChar(10), Billing_Dept)
      .input("Charged_Org", sql.NChar(10), Charged_Org)
      .input("Charged_Org_Name", sql.NChar(60), Charged_Org_Name)
      .input("Charged_Dep", sql.NChar(10), Charged_Dep)
      .input("Fiscal_Month", sql.NChar(20), Fiscal_Month)
      .input("Charge_Type", sql.NChar(50), Charge_Type)
      .input("Charge_Type_Description", sql.NChar(80),Charge_Type_Description)
      .input("Charge_Unit", sql.NChar(60), Charge_Unit)
      .input("Charge_Description", sql.NChar(110), Charge_Description)
      .input("Charge_Amount", sql.Float, Charge_Amount)
      .input("Billable_Amount", sql.NChar(10), Billable_Amount)
      .input("Hyperion_Profit_Center", sql.NChar(10), Hyperion_Profit_Center)
      .input("SAP_Profit_Center", sql.NChar(10), SAP_Profit_Center)
      .input("Charge_Category", sql.NChar(10), Charge_Category)
      .input("Revenue_Type", sql.NChar(10), Revenue_Type)
      .input("Charged_entity", sql.NChar(10), Charged_entity)
      .input("Year", sql.Int, Year)
      .input("Month", sql.NChar(10), Month)
      .query(query)
      .then((result) => {
        res.status(200).send("Invoice saved successfully.");
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send("Error while saving data. Please try again later.");
      });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send("Error while connecting to the database.");
  });
      };
 
 //--------------------Post methode to add an invoice Ends Here--------------------

module.exports={
   getInvoices ,
   getInvoicebyId,
   addInvoice,
}
