import express from "express";
import {
  // Get all products
  getProducts,
} from "../controllers/productController";

const router = express.Router();

router.route("/").get(getProducts);

export default router;
