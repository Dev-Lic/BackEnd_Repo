"use strict";

const express = require("express");

const sql = require("mssql");
const { pool } = require("../../dbFiles/dbConfig");
const router = express.Router();
const { getInvoices } = require("../controllers/eventController");
const { getInvoicebyId } = require("../controllers/eventController");
const {addInvoice} = require("../controllers/eventController");
const  authentificateToken = require('../routes/auth')
const checkAuth = require('../middlware/checkAuth')



//Post - api/Invoices/TEIS
router.get("/Invoices", checkAuth, getInvoices);
router.get('/Invoices/:id',checkAuth,getInvoicebyId);
router.post('/Invoices/charge',checkAuth,addInvoice);



module.exports = {
  routes: router,
};
 