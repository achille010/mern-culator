import express from "express";
import { validateNums } from "../middleware/validator.js";
import { add } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, add);
router.post("/", validateNums, add);

export default router;