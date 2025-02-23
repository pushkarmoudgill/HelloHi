import {Server } from "socket.io";
import http from "http"
import  express from "express"

const app=express();


const server =http.createServer(app)



const io=new Server(server,{
    cors:{
        origin:"http://localhost:3001",
        methods:["GET","POST"],
    }
})

//used to listen server side events
io.on("connection",(socket)=>{
    console.log("a user connected",socket.id);

    socket.on("disconnect",()=>{
        console.log("a user disconnected",socket.id)
    })
})

export {server,app,io}