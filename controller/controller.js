const User=require('../model/schema');

const GetData={
    getData:async(req,res)=>{
        try{
            const data=await User.find();
            res.status(200).json(data);
        }
        catch(err){
            console.log(err);

            res.status(404).json({message:err.message});

}
    },  
    postData:async(req,res)=>{
        try {
            const {email,phone,message}=req.body;
            const data=new User({email,phone,message});
            await data.save();
            console.log(data);
            res.status(200).json(data);

            
        } catch (error) {
            
            console.log(error);
            res.status(404).json({message:error.message});
        }

}
}
module.exports=GetData
