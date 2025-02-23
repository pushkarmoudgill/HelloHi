import { createContext } from "react"
const socketComtext=createContext();

export const SocketProvider =({children})=>{

    const [socket,setSocket]=useState(null)
}