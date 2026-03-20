import express from "express";
import { validateNums } from "../middleware/validator.js";
import { rnd } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, rnd);
router.post("/", validateNums, rnd);

export default router;