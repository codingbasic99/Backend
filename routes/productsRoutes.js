import express from "express";
import multer from "multer";

import {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
} from "../controllers/productsControllers.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();
router.post("/", upload.array("images"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/:id", deleteProduct);

export default router;
