import Conversation from "../model/conversation.js";
import Message from "../model/messages.js";

export const sendMessage=async(req,res)=>{
    console.log("message send")

    try{
        const {message} =req.body;

        const {id:receiverId}=req.params;

        const senderId=req.user._id; //current logged in User
        
        let convsersation=await Conversation.findOne({
            members:{$all:[senderId,receiverId]}
        })

        if(!convsersation){
            convsersation=await Conversation.create({
                members:[senderId,receiverId],

            })
        }

        const newMessage=new Message ({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            convsersation.messages.push(newMessage._id)
        }

        // await convsersation.save();
        // await newMessage.save();


        await Promise.all([convsersation.save(),newMessage.save()])

        res.status(200).json({
           // message:"Message sent sucessfully",
            newMessage
        });
    }
    catch(error){
        console.log("Error in sendMessage",error)
        res.status(500).json({error:"Internal Server Error"})
    }
}


export const getMessage =async (req,res)=>{
    try{
        const {id:chatUser}=req.params;

        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            members: {$all:[senderId,chatUser]},
        }).populate('messages');

        if(!conversation){
          return  res.status(200).json([])
        }
        console.log("CONVV",conversation)
        const messages=conversation.messages;



      //  console.log("CONVERS==",conversation)
        return  res.status(200).json(
            messages
        )
    }
    catch(error){
        console.log("Error in getMessage",error);
        res.status(500).json({error:"Internal server error"});
    }
}