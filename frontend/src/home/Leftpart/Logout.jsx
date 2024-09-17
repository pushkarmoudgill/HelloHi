import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

export default function Logout() {
  return (
      <div className='px-4 py-2'> 
        <BiLogOutCircle className='text-3xl hover:bg-green-300 duration-300 cursor-pointer rounded-full'/>

      </div>
  )
}
