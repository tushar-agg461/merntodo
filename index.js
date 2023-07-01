import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection  from './databse/db.js';
import Routes from '../server/routes/route.js';

import dotenv from 'dotenv';
dotenv.config();

const PORT= process.env.PORT || 8000;

// import { connection } from 'mongoose';
const app= express();
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


app.use('/',Routes);
Connection();
app.listen(PORT, ()=>console.log("server started at 8000 "));