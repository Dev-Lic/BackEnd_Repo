'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./BackEnd/API/routes/eventRoutes');
const auth = require("./BackEnd/API/routes/auth")
const app = express();
const cookieParser = require("cookie-parser")
// const {authenticateToken} = require("./BackEnd/API/routes/auth")
const checkAuth = require('./BackEnd/API/middlware/checkAuth')


const PORT = process.env.PORT || 2000;


app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api',checkAuth,eventRoutes.routes);
app.use('/auth',auth);




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

