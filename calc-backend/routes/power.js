import express from "express";
import { validateNums } from "../middleware/validator.js";
import { power } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, power);
router.post("/", validateNums, power);

export default router;
