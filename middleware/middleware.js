const jwt =require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    console.log(req.body.token,req.query.token,req.header["x-access-token"])
    const token=req.body.token || req.query.token || req.header["x-access-token"];
    console.log(token)
    if(!token){
        return res.status(402).send("a token is required for auth")

    }
    try {
        const decode =jwt.verify(token,"ambuj1264")
        console.log(decode)
        req.user=decode;
        console.log(req.user)
        if(req.user){
            return next();
        }
        else{
            return res.status(401).send("Invailid token")
        }
    } catch (error) {
        console.log(error)
        return res.status(404).send("Invailid token")
    }
}

module.exports=verifyToken;

