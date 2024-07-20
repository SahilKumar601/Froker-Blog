import exprees from 'express';
import mongoose from 'mongoose';
import Blog from '../model/blog.js'
const router = exprees.Router();
export const getBlogs=async (req,res)=>{
    const {page} =req.query;
    try{
        const limit=5;
        const startidx = (Number(page)-1)*limit
        const total = await Blog.countDocuments({})
        const posts = await Blog.find().sort({_id:-1}).limit(limit).skip(startidx);
        res.status(200).json({data:posts,currentPage:Number(page),numberOfPages:Math.ceil(total/limit)});
    }
    catch(err){
        res.status(500).json({message:err});
    }
}
export default router;