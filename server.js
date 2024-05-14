const express=require("express");
require("dotenv").config();
const connectDB=require('./config/connectDB');
const contactRouter=require("./routes/contactRoute");

connectDB();

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/contacts',contactRouter);

const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`Server running at port : ${PORT}`);
});