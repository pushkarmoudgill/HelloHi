import { useState } from 'react'


import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='flex h-screen'>
    <Left/>
    <Right/>
    </div>
    
    
   
  )
}


export default App

