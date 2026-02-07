const express = require("express");
const userRouter = require('./Routes/users.routes')
const homeRouter = require('./Routes/home.routes')
const dotenv = require('dotenv')
dotenv.config()
const connection = require('./Config/db')
const cookieParser =require('cookie-parser')
const app = express();
connection()

app.set('view engine','ejs')
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// routes
app.use('/user',userRouter)
app.use('/',homeRouter)



app.listen(3000,()=>{
  console.log('server running on localhost:3000')
})