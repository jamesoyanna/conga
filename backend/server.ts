import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";

const port = process.env.PORT || 5000;

dotenv.config();

connectDB();

const app = express();

app.listen(port, () => console.log(`Server started on port ${port}`));
