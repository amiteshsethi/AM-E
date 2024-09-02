import express from "express";
import { config } from "dotenv";
import morgan from "morgan"
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
const cors = require('cors');
config();
const app  = express();

//middlewares

app.use(cors({
    origin: 'http://localhost:5173',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));

app.options('*' , cors());

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))
//remove 
app.use(morgan("dev"));

app.use("/api/v1",appRouter)

export default app ;