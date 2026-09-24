import express from "express";
import cors from "cors";
import helmet from "helmet";
import { getDatabaseState } from "./config/database.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    service: "taekwondo-association-navsari-api",
    status: "healthy",
    database: getDatabaseState(),
    timestamp: new Date().toISOString(),
  });
});

export default app;