const express=require("express");
require("dotenv").config();
const connectDB=require('./config/connectDB');


connectDB();

const app=express();


const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`Server running at port : ${PORT}`);
});