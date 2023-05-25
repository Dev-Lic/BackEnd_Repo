require('dotenv').config()
const router = require("express").Router();
const {sign, verify} = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const {pool} = require('../../dbFiles/dbConfig')
const sql = require("mssql");
const db = require('../../../models')
const {User} = require('../../../models/') ;
const cookieParser = require("cookie-parser")


db.sequelize.sync().then((req) =>{

  

  router.get("/",(req,res)=>{
    res.render("index.ejs");
  })

  // router.get("/users/register", (req,res)=>{
  //   res.render("register.ejs");

    
  // })

  router.get("/users/login", (req,res)=>{
    res.render("login.ejs");
  })




  router.get("/select", (req, res)=>{
    User.findAll()
    .then((Users)=>{
       res.send(Users);
    }).catch((err) =>{
    console.log(err);
    })
   });


   router.post("/register", async (req,res) =>{
    const {email, password } = req.body;
    await bcrypt.hash(password, 10).then((hash)=>{
      User.create({
        email: email,
        password: hash,
      })
       .then(()=>{
        res.json("USER REGISTERED");
       })
       .catch((err) =>{
        if(err){
          res.status(400).json({error:err});
          console.log(err)

        }
       })
    })
    
  });


  router.post("/login",async (req, res) => {
    //last code updated 
        // Our login logic starts here
    // 1. Get email and password from the request
    const { email , password} = req.body;
    // 2. Search to see if email is attatched to a user in DB 
    const user = await User.findOne({where: {email: email}});
    // 3. Check if the user existe
    if(!user) res.status(400).json({error:"User Doesn't Exist"});
    
    // 4. Check is the password is the same 
    // const dbPassword = user.password;
    bcrypt.compare(password, user.password).then((match)=>{
      if(!match) {
        res
          .status(400)
          .json({error: "Wrong Credentials!"});
      }
      else {
    //5. generate access Token 
        const accessToken = jwt.sign({email: user.email, id: user.id}, process.env.ACCESS_TOKEN_SECRET);
        console.log(accessToken);
        res.json ({accessToken: accessToken})
 
    //6.

    
      }
    })

   


    
        // Our register logic ends here
      });
})


module.exports = router 

