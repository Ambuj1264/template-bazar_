const loginMaster = require("../model/loginSchema");
const registerMaster = require("../model/registerSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = {
    startLoging:async(req,res)=>{
        try {
            const {email,password}=req.body;
            // validate user input
            if(!(email && password)){
                return res.status(403).send("all input required")

            }
            // validate if user exist in your db
            const user=await registerMaster.findOne({email})

            if(user && (await bcrypt.compare(password,user.password))){

         
            // create token
            const token = jwt.sign({password,email},"ambuj1264",{
                expiresIn:"23h"
            })
            

            // 
            res.status(202).json({
                data:user,
                message:"login Success",
                token:token,
            })
        }
            
            
        } catch (error) {
            console.log(error)
            res.status(404).json({msg:error.message})
        }
    }
}

module.exports=login;
