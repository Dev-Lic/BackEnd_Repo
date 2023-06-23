"use strict";

const express = require("express");

const sql = require("mssql");
const { pool } = require("../../dbFiles/dbConfig");
const router = express.Router();
const { getTeleInvoices } = require("../controllers/telecomController");
const {addTeleInvoice} = require("../controllers/telecomController");
const {TestFunction} = require("../controllers/telecomController");

//Post - api/Invoices/TEIS
router.get("/Telecom",getTeleInvoices);
router.post("/Telecom/post",addTeleInvoice);
router.post("/test",TestFunction);





module.exports = {
  routes: router,
};