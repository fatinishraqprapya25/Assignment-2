import express, { Application } from "express";
import cors from "cors";
import productRouter from "./app/modules/products/products.route";

const app: Application = express();

// persers
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api/products", productRouter);

export default app;