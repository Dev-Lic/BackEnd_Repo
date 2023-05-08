"use strict";

const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");


//---------------get All events------------
const getEvents = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const SqlQueries = await utils.loadSqlQueries("events");
    const list = await pool.request().query(SqlQueries.eventlist);
    //To be deleted
    console.log(eventsList);

    return list.recordset;
  } catch (error) {
    return error.message;
  }
};

//--------------- get All events Ends here ------------

//---------------get One event------------

const getById = async (eventId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("events");
    const oneEvent = await pool
      .request()
      .input("eventId", sql.Int, eventId)
      .query(sqlQueries.eventbyId);

    return oneEvent.recordset;
  } catch (error) {
    return error.message;
  }
};
//---------------get One event ends here ------------

//---------------Create event------------
const createEvent = async (eventData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("events");
    const insertEvent = await pool
      .request()
      .input("eventTitle", sql.NVarChar(100), eventData.eventTitle)
      .input("eventDescription", sql.NVarChar(1500), eventData.eventDescription)
      .input("startDate", sql.Date, eventData.startDate)
      .input("endDate", sql.Date, eventData.startDate)
      .input("avenue", sql.NVarChar(200), eventData.avenue)
      .input("maxMembers", sql.NVarChar, eventData.maxMembers)
      .query(sqlQueries.createEvent);

    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};
//---------------Create Event Ends here-----------

//---------------Update an Event--------------------
//     const updateEvent = async (eventId , eventData) =>{
//         try{
//             let pool = await sql.connect(config.sql);
//             const sqlQueries = await utils.loadSqlQueries('events');
//             const update = await pool.request()
//             .input('eventId',sql.Int , eventId )
//             .input('eventTitle', sql.NVarChar(100), eventData.eventTitle )
//             .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
//             .input('startDate' , sql.Date, eventData.startDate)
//             .input('endDate',sql.Date , eventData.startDate)
//             .input('avenue' ,sql.NVarChar(200), eventData.avenue)
//             .input('maxMembers' , sql.NVarChar , eventData.maxMembers)
//             .query(sqlQueries.updateEvent);

//         return update.recordset ;

//       }
//     catch(error){
//         return error.message;
//     }
// }

//---------------Update an Event Ends here--------------------

//-------------Deletet Event -------------

const deleteEvent = async (eventId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("events");
    const deleteEvent = await pool
      .request()
      .input("eventId", sql.Int, eventId)
      .query(sqlQueries.deleteEvent);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

//-------------Deletet Event Ends here-------------

module.exports = {
  getEvents,
  getById,
  createEvent,
  deleteEvent,
};
