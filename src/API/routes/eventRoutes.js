"use strict";

const express = require("express");


const router = express.Router();
const sql = require("mssql");
// const { pool } = require("../dbFiles/dbConfig");
const { getInvoices } = require("../controllers/eventController");
const { getInvoicebyId } = require("../controllers/eventController");



router.get("/Invoices", getInvoices);
router.get('/Invoices/:id', getInvoicebyId);




module.exports = {
  routes: router,
};
