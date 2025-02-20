import React , {useState} from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';

export default function Typesend() {
  const [message,setMessage]=useState("")
  const {loading,sendMessages}=useSendMessage()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await sendMessages(message)
    setMessage("")
  }
  return (
    

    <form onSubmit={handleSubmit}>
      <div className='flex h-[8vh]  px-2 bg-green-400'>


<div className='w-[70%]  '>
<input type="text" placeholder="Type here"
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="input input-bordered w-full  " />
</div>
<button className='text-3xl px-2'>
<IoSend />


</button>
</div>

    </form>

   
  )
}
