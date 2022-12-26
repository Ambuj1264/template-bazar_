const express=require('express');
const router=express.Router();
const GetData=require('../controller/controller');
const login=require("../controller/loginController")
const register=require("../controller/registerController")

router.get('/',GetData.getData);
router.post('/post',GetData.postData);
router.post("/login",login.startLoging)
// router.get("/getLoggedIn,Login.getAllLoggin")
router.post ("/register", register.startRegister)



module.exports=router;
