"use strict";

const express = require("express");


const router = express.Router();
const sql = require("mssql");
const { pool } = require("../dbFiles/dbConfig");
const { getInvoices } = require("../controllers/eventController");


router.get("/Invoices", getInvoices);




module.exports = {
  routes: router,
};
