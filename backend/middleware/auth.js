const jwt=require('jsonwebtoken');
require('dotenv').config()


const generateAccessToken=(user)=>{
    const payload={
        id:user._id,
        email:user.email,
    }
    console.log(payload)
    const options={expiresIn:"3000s"}
    return jwt.sign(payload,process.env.SECRET_KEY,options)
}

const verifyToken=(req,res,next)=>{
    
    try {
        const authHeader=req.headers.authorization;

        if(!authHeader){
            const err=new Error("You are not Authenticated");
            err.status=401;
            return next(err)
        }
        console.log('token is here',token)

        jwt.verify(token,SECRET_KEY,(err,decode)=>{
            if(err){
                const err=new Error("You are not Authenticated");
                err.status=401;
                return next(err);
            }
            console.log(decode)
            next();
        })

    } catch (error) {
        
    }

}

module.exports={verifyToken,generateAccessToken}