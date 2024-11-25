import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import {configDotenv} from 'dotenv';

const app= express();
configDotenv('./.env');

app.use(cors({
    origin: process.env.CORS,
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//database connection 

//routes

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})