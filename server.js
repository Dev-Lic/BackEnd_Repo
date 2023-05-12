'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./BackEnd/API/routes/eventRoutes');

const app = express();

const PORT = process.env.PORT || 2000;


app.use(cors());
app.use(bodyParser.json());


app.use('/api', eventRoutes.routes);
  
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});