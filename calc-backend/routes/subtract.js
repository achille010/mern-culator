import express from "express";
import { validateNums } from "../middleware/validator.js";
import { subtract } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, subtract);
router.post("/", validateNums, subtract);

export default router;
