import express from "express"
import dotenv from "dotenv"
import mongoose from 'mongoose'

import UserRoute from "./routes/UserRoute.js";
 const app=express();

dotenv.config();
 

//middleware
app.use(express.json())

const PORT =process.env.PORT;




//DB connection

const MONGO_URI=process.env.MONGO_URL

try{
     mongoose.connect(MONGO_URI)
    console.log("Connected to DB")
}
catch(error)
{
   console.log(error.message)
}


app.use("/user",UserRoute)

app.get('/', (req, res) => {
  res.send('Hello Chit Chat!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})