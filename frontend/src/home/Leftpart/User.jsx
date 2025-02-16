import React from 'react'
import useConversation from '../../zustand/useConversation'

export default function User({user}) {
const {selectedConversation,setSelectedConversation} =useConversation();
// console.log(selectedConversation)
const isSelected =selectedConversation?._id === user._id;

  return (
    <div className={`hover:bg duration-300 ${isSelected?"bg-green-700":""}`} onClick={()=>setSelectedConversation(user)}>
       <div className='flex space-x-4 px-6 py-3'>
    <div className="avatar online">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
     <div>
        <h1 className='font-semibold'>{user.name}</h1>
        <span>{user.email}</span>
     </div>
    </div>
    </div>
  )
}
