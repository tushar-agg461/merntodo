import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const DB= process.env.DB;

const Connection=()=>{

    // const MONGODB_URI= `${DB}`;
    mongoose.connect(DB,{useNewUrlParser:true});

    mongoose.connection.on('connected', ()=>{
        console.log("connected successfully..!")
    })
    mongoose.connection.on('disconnected', ()=>{
        console.log("database not connected");
    })
    mongoose.connection.on('error', (error)=>{
        console.log("error while connecting the db", error.message);
    })
}
export default Connection;