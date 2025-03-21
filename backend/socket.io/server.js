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
});

const users = {};

//used to listen server side events
io.on("connection",(socket)=>{
    console.log("a user connected",socket.id);

    const UserId=socket.handshake.query.userId;
    console.log("hhh",UserId)
    if(UserId){
        users[UserId]=socket.id
        console.log("hiii",users)
    }

    io.emit("getOnlineUser",Object.keys(users));

    socket.on("disconnect",()=>{
        console.log("a user disconnected",socket.id)
        delete users[UserId]
        io.emit("getOnlineUser",Object.keys(users));

    })
})

export {server,app,io}