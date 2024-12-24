import  jwt from "jsonwebtoken"
import User from "../model/user.js"


const secureRoute=async (req,res,next)=>{
    try{

              
        //console.log("cookie",req.cookies)
        const token =req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "No token, authorization denied"})
        }
        const decoded =jwt.verify(token,process.env.JWTTOKEN);

        if(!decoded){
            return res.status(401).json({error : "Invalid Token"})
        }

        const user=await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({error: "No user found"});
        }
       ///l console.log("reqUser",req.user)
        req.user=user;
        next();
    }
    catch(error){
        console.log("Error in secureRoute: ",error)
        res.status(500).json({error:"Internal server error"})
    }
}
export default secureRoute;