import React from 'react'
import Message from './Message'


export default function Messages() {
  return (
    <div className='flex-1 overflow-y-auto' style={{maxHeight: "calc(92vh - 8vh)"}}>

      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}
