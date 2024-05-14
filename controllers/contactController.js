const Contact=require("../models/contactModel");

exports.createContact=async (req,res)=>{
    try {
        const {name,email,phone}=req.body;
    if(!name||!email||!phone){
        return res.status(400).json({message:"Provide all fields"});
    }
    req.body.image=req.file.path;
    const newContact=await Contact.create(req.body);
    res.status(201).json({
        status:"success",
        data:{
            contact:newContact
        }
    });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}