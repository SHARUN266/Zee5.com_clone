const express = require("express");
const { append } = require("express/lib/response");
const User = require("../models/user.model");

const router = express.Router();

router.get("",async(req,res) => {
    try{
     const user= await User.find().lean().exec()
     console.log(user)
     return res.status(200).send(user)
    
    }
    catch(err)
    {
        return res.status(500).send({message:err.message})
    }
})
module.exports = router;