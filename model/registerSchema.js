const mongoose=require("mongoose")

const registerSchema=new mongoose.Schema({
    firstName:
    {
        type:String,
        require:true,
    
    },
    lastName:{
        type:String,
        require:true,

    },
    email:{
            type:String,
            require:true,
        
    }
    ,
    password:{
        type:String,
        require:true
    }
})
const registerMaster=mongoose.model("registerMaster",registerSchema)
module.exports=registerMaster;
