const express=require("express");
const { createContact } = require("../controllers/contactController");
const upload=require("../middleware/multer");
const router=express.Router();

router.post("/",upload.single('image'),createContact);

module.exports=router;