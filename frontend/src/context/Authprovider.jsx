import React, { useContext } from 'react'
import Cookies from 'js-cookie'
import { createContext ,useState} from 'react';


export const AuthContext =createContext()
 export const Authprovider=({childern})=> {

    const initialUserState= Cookies.get("jwt") || localStorage.getItem("ChatApp");
    // parse the user data and storing in state.

    const [authUser,setAuthUser]= useState(initialUserState? JSON.parse(initialUserState):undefined)
    
  return (
  <AuthContext.Provider value={[authUser,setAuthUser]}>
    {childern}
  </AuthContext.Provider>
  )
}
export const useAuth=()=>useContext(AuthContext);