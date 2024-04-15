import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';



dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


app.get("/", function(req, res){
    res.send("hello world i'm here");
})

// midleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.listen(port, ()=>{
    console.log("server listening on port " + port);
});