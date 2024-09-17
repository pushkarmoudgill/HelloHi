import React from 'react'

export default function ChatUser() {
  return (
    <div className='flex space-x-3 justify-center bg-green-400 hover:bg-green-600 h-[8vh]'>
<div className="avatar online">
  <div className="w-16 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>

     <div>
        <h1 className='text-xl'>sahil</h1>
        <span className='text-sm'>offline</span>
     </div>

    </div>
  )
}
