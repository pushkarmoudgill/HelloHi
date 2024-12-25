import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import axios from "axios"


function useGetAllUsers() {
  const [allUsers,setAllUsers]=useState([])
  const [loading,setLoading]=useState(false)


  useEffect(()=>{ 
    const getUsers=async()=>{
   setLoading(true)
        try{
       const token=Cookies.get("jwt")
      //  const token = localStorage.getItem('token');


       console.log("tokenn ", token)
       

       const response = await axios.get("/api/user/allusers",{
      //   credentials: "include",
      //   headers: {
      //     Authorization: `Bearer ${token}`, // Important: Use "Bearer " prefix
      // },
      withCredentials: true,
        
       })
      //  console.log("res",response.data)
       setAllUsers(response.data);
       setLoading(false)
    
        }
        catch(error){
            console.log("Error in useGetAllUsers:"+ error)
        }

  }
   
 getUsers();
  },[])
  return[allUsers,loading]
}

export default useGetAllUsers
