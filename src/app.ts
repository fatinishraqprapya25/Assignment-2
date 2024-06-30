import express, { Application, NextFunction, Response } from "express";
import cors from "cors";
import productRouter from "./app/modules/products/products.route";
import orderRouter from "./app/modules/orders/orders.route";

const app: Application = express();

// persers
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "Route not Found"
    });
    next();
});


export default app;
