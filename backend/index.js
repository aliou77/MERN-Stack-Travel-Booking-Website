import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import toursRoute from './routes/tours.js';
import usersRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';

// Loads .env file contents into process.env by default.
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
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', toursRoute);
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/booking', bookingRoute);


app.listen(port, ()=>{
    connect();
    console.log("server listening on port " + port);
});