const loginMaster = require("../model/loginSchema");
const registerMaster = require("../model/registerSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



const register = {
    startRegister: async (req, res) => {
        try {
            const { firstName, lastName, email, password } = req.body

            //validate user input
            if (!(email && password && firstName && lastName)) {
                res.status(402).send("All input is required ")
            }

            //check if user already exist

            // validate if user exist in our database
            const oldUser = await registerMaster.findOne({ email: email })
            if (oldUser) {
                return res.status(409).send("user Already Exist. Please login")
            }
            // hassing the password

            encyptedPassword = await bcrypt.hash(password, 10)
            // create user in our database



            let registerData = await registerMaster.create({ firstName, lastName, email: email.toLowerCase(), password: encyptedPassword })

     
console.log(registerData)
            // create token

            let token=jwt.sign({password,email},"ambuj1264",{
                expiresIn:"23h"
            });
           
           
        
            console.log(registerData,"saveData");

            res.status(202).json({
                data:registerData,
                token:token
            });



        } catch (error) {
                    console.log(error)
                    res.status(404).json({msg:error.message})
        }

    }
}
module.exports=register;

