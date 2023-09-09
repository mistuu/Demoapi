// import {MongoClient} from './db'
// const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express=require("express");
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv/config')
const app=express()
// const connection=require("./db")
const bodyParser=require('body-parser')
const postRouts=require('./routes/posts')
const getRoute=require('./routes/gets')

// //middleware
app.use(cors())
app.use(bodyParser.json());
app.use('/posts',postRouts)
app.use('/gets',getRoute)
// //Routes
// app.get('/',(req,res)=>{
//     res.send('Hello World ')
// })

const mongoURI =  "mongodb+srv://rock:rock@cluster0.owdm0kb.mongodb.net/Demo?retryWrites=true&w=majority" 
 mongoose.connect(mongoURI).then(() => console.log("connection sucessfull"));
//listner port
let port =process.env.PORT || 3001
app.listen(port,()=>{
    console.log("log connection",port);
});