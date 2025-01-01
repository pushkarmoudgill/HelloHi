import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Logout() {
  const navigate = useNavigate(); // Use the hook to get the navigate function
  const [loading,setLoading]=useState(false)


  const handleLogout=async()=>{
    try{
      const response=await axios.post('/api/user/logout');


   console.log("RES Logout",response)
    localStorage.removeItem("ChatApp")
    // Cookies.remove("jwt")
    setLoading(false)
    alert('Logout Successfully');
    navigate('/login');

    }
    catch(error){
      console.error('Logout error:', error);
      alert('Logout failed. Please try again later.');
    }
  }
  return (
      <div className='px-4 py-2'> 
        <BiLogOutCircle className='text-3xl hover:bg-green-300 duration-300 cursor-pointer rounded-full'
        onClick={handleLogout}
        />

      </div>
  )
}
