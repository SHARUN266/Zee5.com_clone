const express=require("express");

const router=express.Router();

const Movie=require("../models/moviemodel");

router.post("",async(req,res)=>{
    try{
      const movie=await Movie.create(req.body);

      return res.status(200).send({movie})
    }
    catch(err){
      return res.send({message:err.message})
    }
})
  

router.get("",async(req,res)=>{
    try {
      const movies=await Movie.find().lean().exec()

    return res.status(201).send({movies});
    } catch (err) {
      return res.send({message:err.message})
    }
})


module.exports=router;