import React from 'react'
import User from './User'
export default function Users() {
  return (
    <div>
        <h1 className='px-8 py-2 text-white font-semibold bg-green-400'>
      Messages
    </h1>
    <div className='flex-1 overflow-y-auto' style={{maxHeight:'calc(84vh - 13vh)'}}>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/> <User/> <User/>

    </div>
   
    </div>
    
  )
}
