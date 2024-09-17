import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'
export default function Right() {
  return (
    <div className='w-[70%] bg-green-300'>
      <ChatUser/>

      <div className='flex-1 overflow-y-auto' style={{maxHeight: "calc(92vh - 8vh)"}}>

      <Messages/>
      </div>
      
      <Typesend/>
    </div>
  )
}
