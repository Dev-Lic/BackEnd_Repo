require('dotenv').config()
const router = require("express").Router();
const { check, validationResult } = require("express-validator")

const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const {users} = require("../../dbFiles/db");

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    // Validate the inputs 
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }

    // Validate if the user doesnt already exist;
    let user = users.find((user) => {
        return user.email === email
    });

    if(user) {
        return res.status(422).json({
            errors: [
                {
                    msg: "This user already exists",
                }
            ]
        })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the password into the db
    users.push({
        email,
        password: hashedPassword
    });

    const token = await JWT.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 360000});

    res.json({
        token
    })
})





router.post('/login' , async(req ,res)=>{
    const {email , password} = req.body;
   
    let user = users.find((user) => {
        return user.email === email;
    });

    if(!user){
        return res.status(400).json({
            "errors":[
                {
                    "message": "Invalid Credentials"
                }
            ]
        })
    }
       let isMatch = await bcrypt.compare(password,user.password);

       if(!isMatch){
        return res.status(400).json({
            "errors":[
                {
                    "message": "Invalid Credentials"
                }
            ]
        })
        };

    // // Hashing the password 

    // let hashedPassword = await bcrypt.hash(password,10);
    // console.log(hashedPassword);
    // res.send("Validation Past")
    //Sending a JWT 
    const token = await JWT.sign({ email ,
    },process.env.ACCESS_TOKEN_SECRET, {
        expiresIn:36000000
    })

    res.json({token})


})

function authentificateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)


    JWT.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next() 
})
}

module.exports = router , authentificateToken