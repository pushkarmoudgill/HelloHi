import React from 'react'
import { IoSend } from "react-icons/io5";

export default function Typesend() {
  return (
    

    <div className='flex h-[8vh]  px-2 bg-green-400'>


        <div className='w-[70%]  '>
        <input type="text" placeholder="Type here" className="input input-bordered w-full  " />
        </div>
    <button className='text-3xl px-2'>
    <IoSend />


    </button>
    </div>


   
  )
}
