const express =require('express') ;
const cors =require('cors');
const bodyParser =require('body-parser') ;
const Connection  = require('./databse/db') ;
const Routes = require('../server/routes/route') ;

const dotenv =require('dotenv') ;
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