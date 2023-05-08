"use strict";

const express = require("express");
// const eventController = require ('../controllers/eventController');
// const { updateEvent } = require('../data/events');
const router = express.Router();

const sql = require("mssql");
// const {getEvents, getEvent ,addEvent, deleteEvent} = eventController ;

// router.get('/events',getEvents);
// router.get('/event/:id',getEvent);
// router.post('/event', addEvent );

// // router.put('/event/:id',updateEvent);
// router.delete('/event/:id',deleteEvent);

const pool = new sql.ConnectionPool(
  {
    user: "sa",
    password: "1234",
    server: "DESKTOP-FJ1PE31\\MSSQLSERVER01",
    database: "eventmanagement",
    port: 1433,
    encrypt: true,
    pool: {
      idleTimeoutMillis: 30000,
    },
    options: {
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  },
  (err) => {
    if (err) {
      console.log("######## connection error : ", err);
    }
  }
);

router.get("/home", (req, res) => {
  const request = new sql.Request(pool);
  request
    .query("SELECT * FROM events")
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
