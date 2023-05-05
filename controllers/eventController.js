'use strict';

const eventData = require('../data/events');



//---------------get All events------------

const getEvents = async (req , res, next) => {
     try{
        const events = await eventData.getEvents();
        res.send(events);
     }catch(error){
        res.status(400).send(error.message);
     }
}

//---------------get All events Ends here------------



//---------------get One event------------
const getEvent = async(req,res,next) => {
   try{
      const eventId = req.params.id ;
      const oneEvent = await eventData.getById(eventId);
      res.send(oneEvent);

   }catch (error) {
      res.status(400).send(error.message);
   }
}


//---------------get One event Ends here------------


//-------------Create event ----------------------
const addEvent = async (req , res , next) => {
   try{
      const data = req.body ;
      const created = await eventData.createEvent(data);
      res.sedn(created)
   }catch(error){
      res.status(400).send(error.message);
   }
}

//------------------Create event Ends here  -----------------

//---------------Update an Event-----------------------------

const updateEvent = async (req , res , next) =>{

   try{
      const eventId = req.params.id ;
      const data = req.body ;
      const updated = await eventData.updateEvent(eventId,data);
      res.send(updated);

   }catch(error){
      res.status(400).send(error.message);
   }
}




//---------------Update an Event Ends here-------------------- 

//-------------Deletet Event -------------

const deleteEvent = async (req, res, next) => {
   try {
       const eventId = req.params.id;
       const deletedEvent = await eventData.deleteEvent(eventId);
       res.send(deletedEvent);
   } catch (error) {
       res.status(400).send(error.message);
   }
}

//-------------Deletet Event Ends here-------------

module.exports = {
    getEvents,
    getEvent,
    addEvent, 
    updateEvent,
    deleteEvent
}