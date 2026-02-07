require('dotenv').config();
const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db.js");
connectDB()
const app = express();
const colors = require("colors");

app.use(cors())
app.use(express.json())

// PORT
app.use('/api/users', require('./routes/userRoutes'));
const PORT = process.env.PORT || 5000;

// routes

app.get('/',(req,res)=>{
  res.send("home")
})



app.listen(PORT,()=>{
  console.log(`server is running..>>>> on http://localhost:${PORT}`.yellow.bold);
  
})