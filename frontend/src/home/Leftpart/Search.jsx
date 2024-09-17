import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
   <div className='h-[13vh]'>
     <div className='px-6 py-4'>
        <form action="">
            <div className='flex space-x-3'> 
            <label className="input input-bordered flex items-center gap-2 w-[80%]">
  <input type="text" className="grow" placeholder="Search" />
  
</label>
<button><FaSearch className='text-4xl p-2 hover:bg-green-600 rounded-full duration-300' />
</button>

        </div>
</form>

    </div>
   </div>
  )
}
