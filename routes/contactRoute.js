const express=require("express");
const { createContact, getAllContact } = require("../controllers/contactController");
const upload=require("../middleware/multer");
const router=express.Router();

router.get("/",getAllContact);
router.post("/",upload.single('image'),createContact);

module.exports=router;