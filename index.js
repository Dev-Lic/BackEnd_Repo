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
  
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});