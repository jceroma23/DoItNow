import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// From Router
import { userRouter } from "./router/userRouter";


dotenv.config();
const app = express();


// Middleware
mongoose.Promise = global.Promise;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS', "PUT" ],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// This will be use again in Deployment.
// app.options('*', cors({
//     origin: [
//         'http://localhost:5173'  
//       ],
//       methods: ['GET', 'POST', 'DELETE', 'OPTIONS', "PUT" ],
//       allowedHeaders: ['Content-Type', 'Authorization'],
//       credentials: true
// }))


app.use('/api/auth', userRouter)


mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (() => {
    console.log(`Successfully Connected to MongoDb with Docker`)
}).catch(() => {
    console.log(`Error, Please Check Database Connection`)
})


app.listen(process.env.PORT, () => {
    console.log('Server Connected to Port:', process.env.PORT)
})