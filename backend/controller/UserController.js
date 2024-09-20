import User from "../model/user.js"
import bcrypt from "bcryptjs"
import createTokenAndSaveCookie from "../jwt/generateToken.js"


  export const signup=async (req,res)=>{
   try{
    const {name,email,password,confirmPassword}=req.body;

    if(password !==confirmPassword){
        return res.status(400).json({error:"Password do not match"})
    }
     

    /// hashing password
    const hashPassword=await bcrypt.hash(password,10)

    const user= await User.findOne({email});

    if(user){
        return res.status(400).json({error:"User Already Exists"})
    }
      

    const newUser=await new User({
        name,
        email,
       password: hashPassword,
       // confirmPassword,
    });

  await  newUser.save();

  if (newUser){
    createTokenAndSaveCookie(newUser._id,res);
    
    res.status(201).json({message : "User created Successfully"})

  }
    
   }
   catch(error){
   res.status(500).json({message:"somthing went wrong"})

   console.log(error.message)
   }

}