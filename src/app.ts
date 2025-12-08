import allRoutes from "@routes/index.routes";
import dotenv from "dotenv";
import express from "express";
import cors from "cors"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// O con opciones más específicas:
app.use(cors({
    origin: '*', // Permite todos los orígenes (en producción usa el dominio específico)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api", allRoutes);

export default app;
