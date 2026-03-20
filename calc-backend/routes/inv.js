import express from "express";
import { validateNums } from "../middleware/validator.js";
import { inv } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, inv);
router.post("/", validateNums, inv);

export default router;
