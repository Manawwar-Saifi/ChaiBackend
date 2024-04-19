import connectDB from "./db/config.js"


// require('dotenv').config({path: './env'})

// or

import dotenv from "dotenv";

dotenv.config(
    {
        path:'./env'
    }
)
connectDB() 



// FIRST APPROCH

/*
const app = express()

import express from "express"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.log("Error: ",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening on port is ${process.env.PORT}`)
        })
    } catch (error) {
        console.error(error)
        throw error
    }
})()
*/
