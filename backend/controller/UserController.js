import User from "../model/user.js"


  export const signup=async (req,res)=>{
   try{
    const {name,email,password,confirmPassword}=req.body;

    if(password !==confirmPassword){
        return res.status(400).json({error:"Password do not match"})
    }
     
    const user= await User.findOne({email});

    if(user){
        return res.status(400).json({error:"User Already Exists"})
    }
      

    const newUser=await new User({
        name,
        email,
        password,
        confirmPassword,
    });

  await  newUser.save();
    res.status(201).json({message : "User created Successfully"})
   }
   catch(error){
   res.status(500).json({message:"somthing went wrong"})

   console.log(error.message)
   }

}