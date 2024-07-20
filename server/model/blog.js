import mongoose from "mongoose";
const schema =mongoose.Schema;
const blogSchema = new schema({
    title:String,
    body:String,
    createdAt:{
        type:Date,
        default:new Date(),
    },
    likes:Number,
    file:String
})
const blogs = mongoose.model('Blog', blogSchema);

export default blogs;