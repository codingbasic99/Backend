import express from "express";
import {
  createTransaction,
  getTransactions,
  getTransaction,
} from "../controllers/transactionController.js";
const router = express.Router();

router.post("/", createTransaction);
router.get("/", getTransactions);
router.get("/:id", getTransaction);

export default router;
