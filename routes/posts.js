const express=require('express');
const { remove } = require('../modals/Post');
const router=express.Router();
const Post=require('../modals/Post')

//post 
router.post('/',async(req,res)=>{
 console.log(req.body);
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });
    try {
        const savePost=await post.save();
        res.json(savePost)
        
    } catch (error) {
        res.json({message:error})
    }
})

//spacific Post
router.get('/:postId',async(req,res)=>{
    try {
        const post=await Post.findById(req.params.postId);
        res.json(post)
    } catch (error) {
        res.json({message:error})
        
    }
})

//delete post
router.delete('/:postId',async(req,res)=>{
    try {
        const removePost=await Post.remove({_id:req.params.postId})
        res.json(removePost)
    } catch (error) {
        res.json({message:error})
        
    }

})

//update Post
router.patch('/:postId',async(req,res)=>{
    try {
       const updatePost=await Post.updateOne({_id:req.params.postId},
        {$set:{title:req.body.title}})
       res.json(updatePost)
    } catch (error) {
        res.json({message:error})
        
    }
})

module.exports=router