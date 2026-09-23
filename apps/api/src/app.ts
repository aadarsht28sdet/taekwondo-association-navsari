import express from "express";
import cors from "cors";
import helmet from "helmet";
import {getDatabaseState} from "./config/database.js";


const app=express();

const allowedOrigins=["http://localhost:5173"];

app.use(helmet());

app.use(cors({origin:(origin,cb)=>{
 if(!origin || allowedOrigins.includes(origin)) return cb(null,true);
 return cb(new Error(`CORS blocked origin: ${origin}`));
},credentials:true}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health",(_req,res)=>res.status(200).json({
 success:true,service:"taekwondo-association-navsari-api",status:"healthy",
 database:getDatabaseState(),timestamp:new Date().toISOString()
}));

export default app;

