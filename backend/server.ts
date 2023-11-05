import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db";

// Routes
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";

const PORT = process.env.PORT || 4000;
const app: Express = express();

// Middlewares to accept json in body
app.use(cors());
app.use(express.json());

// Morgan logging
app.use(morgan("dev"));
dotenv.config();

connectDB();
// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

app.use("/api/users/", userRoutes);
app.use("/api/products/", productRoutes);
app.use("/api/orders/", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
