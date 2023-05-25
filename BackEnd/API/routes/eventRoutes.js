"use strict";

const express = require("express");

const sql = require("mssql");
const { pool } = require("../../dbFiles/dbConfig");
const router = express.Router();
const { getInvoices } = require("../controllers/eventController");
const { getInvoicebyId } = require("../controllers/eventController");
const {addInvoice} = require("../controllers/eventController");

//Post - api/Invoices/TEIS
router.get("/Invoices",getInvoices);
router.get('/Invoices/:id',getInvoicebyId);
router.post('/Invoices/charge',addInvoice);



module.exports = {
  routes: router,
};
 