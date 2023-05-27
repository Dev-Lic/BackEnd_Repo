'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./BackEnd/API/routes/eventRoutes');
const auth = require("./BackEnd/API/routes/auth")
const app = express();
const cookieParser = require("cookie-parser")
const jwt = require('jsonwebtoken')
const {sign,verify} = require('jsonwebtoken')




const PORT = process.env.PORT || 2000;


app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/teis', eventRoutes.routes);
app.use('/', auth);


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,User) => {
    if (err) return res.sendStatus(403)
    req.user = User
    next()
    
  })
}




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

