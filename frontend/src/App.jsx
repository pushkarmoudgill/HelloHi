import { useState } from 'react'


import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/Authprovider.jsx'
import {Routes,Route, BrowserRouter} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  // const [authUser,setAuthUser]=useAuth()
  // console.log(authUser)
  return (
   
 
    
    
  // <Signup/>
    // <Login/>
    <BrowserRouter>


    <Routes>
      <Route path="/" element={
         <div className='flex h-screen'>
          <Left/>
         <Right/> 
         </div>
      }/>
       <Route path="/signup" element={
        <Signup/>
      }/>
 <Route path="/login" element={  <Login/> }/>

    
    </Routes>
    </BrowserRouter>
  )
}


export default App

