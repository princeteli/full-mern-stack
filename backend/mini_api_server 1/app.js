const express = require('express')
const userRoutes= require("./routes/user.route.js")
const dotenv = require("dotenv")
const connectDb = require('./config/db.js')
dotenv.config()
connectDb()

const app = express()
app.use((req,res,next)=>{
  console.log("api ka naam ->",req.method,"  ", req.url)
  next()
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/",(req, res) => {
  res.send("mini login and signup server api project")
})
app.use("/auth", userRoutes)


app.listen(3000,()=>{
  console.log("server running on http://localhost:3000")
})