const jwt = require("jsonwebtoken");
require('dotenv').config()

module.exports = async (req, res ,next) => {
  //1.Get the Token That the client sent
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) 
  {   console.log(token)
    return res.status(401).json({error:"No Token Provided"})}


  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
    if (err) return res.sendStatus(403)
        req.user = user
        next();
  })

   
  //2. Verify that it's the correct User
  //3. Return that user the route that he wants to home page
}
  
  



// function authenticateToken(req,res,next){
//     //1.Get the Token That the client sent
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if(token == null) return res.status(400).json({error:"No Token Provided"})

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
//       if (err) return res.sendStatus(403)
//           req.user = user
//           next();
//     })

     
//     //2. Verify that it's the correct User
//     //3. Return that user the route that he wants to home page
//   }
