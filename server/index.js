import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import getRoute from './routes/getBlogs.js'
// import Blog from './model/blog';

const app = express();
app.use('/blogs',getRoute);
mongoose.connect(`${process.env.DB_URL}`)
    .then(()=>{
        app.listen(process.env.VITE_APP_PORT,()=>{
            console.log(`Server started and Connected to Network ${process.env.VITE_APP_PORT}`);
        })
    })
