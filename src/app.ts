import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// persers
app.use(express.json());
app.use(cors());

// Application Routes

export default app;