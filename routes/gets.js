const express=require('express')
const router=express.Router();
const Post=require('../modals/Post')

router.get('/',async(req,res)=>{
    // res.send("Hello")
    try {
        const ps=await Post.find();
        res.json(ps)
    } catch (error) {
        res.json({message:error})
    }
  
})

module.exports=router