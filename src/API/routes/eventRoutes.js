"use strict";

const express = require("express");


const router = express.Router();
const sql = require("mssql");
const { pool } = require("../src/API/controllers/dbFiles/dbConfig");


router.get("/home", (req, res) => {
  const request = new sql.Request(pool);
  request
    .query("SELECT * FROM TEIS")
    .then((result) => {
      res.send(result.recordset);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error fetching users from database");
    })
});




module.exports = {
  routes: router,
};
