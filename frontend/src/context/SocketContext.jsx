import { createContext, useEffect,useState } from "react"
import { useAuth } from './Authprovider.jsx'
import io from "socket.io-client"
const socketContext=createContext();

export const SocketProvider =({children})=>{

    const [socket,setSocket]=useState(null)
    const [onlineUsers,setOnlineUsers]=useState([])
    const authUser=localStorage.getItem('ChatApp');

    // console.log("Sockettt",authUser)

    const user=JSON.parse(authUser);
    // console.log("Sockettt1",user.user._id)



    useEffect(()=>{
        if(authUser){
            const socket=io("http://localhost:3000",{
            query:{
                 userId:user.user._id  
            },
        })
        setSocket(socket)
         socket.on("getOnlineUser",(users)=>{
          setOnlineUsers(users)
         })
           return ()=>socket.close()
        }else{
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    },[authUser])

    return(
        <socketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </socketContext.Provider>
    )
}