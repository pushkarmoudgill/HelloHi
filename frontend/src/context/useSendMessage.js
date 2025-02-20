import React,{useState} from 'react'
import useConversation from '../zustand/useConversation.js'
import axios from 'axios'

export default function useSendMessage() {

  const [loading,setLoading]=useState(false)
    const {messages,setMessage,selectedConversation}=useConversation()
    const sendMessages=async(message)=>{
      setLoading(true)
     if(selectedConversation && selectedConversation._id){
      try{
          const res=await axios.post(`/api/message/send/${selectedConversation._id}`,{message})
          setMessage(res.data)
          console.log("mess",res.data)
            setMessage([...messages,res.data]);
          setLoading(false)
      }
      catch(error){
          console.log("Error in send messages",error)
          setLoading(false)
      }
     }
  }
  return {loading,sendMessages}
}
