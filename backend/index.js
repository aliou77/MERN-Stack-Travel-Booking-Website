import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import toursRoute from './routes/tours.js';
import usersRoute from './routes/users.js';
import authRoute from './routes/auth.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
    credentials: true
}


// connexion to the database
mongoose.set("strictQuery", false);
// mongoose.set('bufferCommands', false);
const connect = ()=>{
    // best way to connect to mongodb
    // use 127.0.0.1 instead localhost.
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("mongodb connected"))
    .catch((error)=>{
        console.log("mongodb not connected")
    })
}

// midleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser())
app.use('/auth', authRoute);
app.use('/tours', toursRoute);
app.use('/users', usersRoute);



app.listen(port, ()=>{
    connect();
    console.log("server listening on port " + port);
});