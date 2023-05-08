'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./src/API/routes/eventRoutes');

const app = express();

const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());


  app.use('/api', eventRoutes.routes);


  // assert(PORT,'PORT is required');
  app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
  
})