import React from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx'


export default function Messages() {
  const { loading,messages}=useGetMessage()

  console.log(messages)
  return (
    <div className='flex-1 overflow-y-auto' style={{maxHeight: "calc(92vh - 8vh)"}}>

      {loading?(<Loading/>):(messages.length>0 && messages.map((message)=>(
        <Message key={message._id} message={message}/>
     
     )))}

      {!loading && messages.length ===0 &&(
        <div>
          <p className='text-center mt-[20%]'>
            Say! Hi to start the chatting
          </p>
          </div>
      )
      
      }


     
    </div>
  )
}
