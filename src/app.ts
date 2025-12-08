import allRoutes from "@routes/index.routes";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

// CORS configuration - must be before other middleware
app.use(cors({
    origin: '*', // Allows all origins (use specific domain in production)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: false // Set to true if you need to include cookies
}));

app.use(express.json());

app.use("/api", allRoutes);

export default app;
