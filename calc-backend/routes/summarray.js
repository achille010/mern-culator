import express from "express";
import { validateNums } from "../middleware/validator.js";
import { summarray } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, summarray);
router.post("/", validateNums, summarray);

export default router;
