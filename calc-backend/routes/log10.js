import express from "express";
import { validateNums } from "../middleware/validator.js";
import { log10 } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, log10);
router.post("/", validateNums, log10);

export default router;
