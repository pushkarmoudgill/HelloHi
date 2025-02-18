import React from 'react'

export default function Message({message}) {
  const authUser=JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe=message.senderId===authUser.user._id;

  console.log("itss",itsMe)

  const chatName=itsMe?" chat-end":"chat-start";
  const chatcolor=itsMe? "bg-green-500":"";
  return (
    <div>
       <div className='p-4'>
      <div className={`chat ${chatName}`} >
  <div className={`chat-bubble text-blue-100 ${chatcolor} ` }>{message.message}</div>
     </div>
    
      </div>
    </div>
  )
}
