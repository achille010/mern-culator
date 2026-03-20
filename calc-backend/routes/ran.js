import express from "express";
import { ran } from "../controllers/calculator.controller.js";
import { validateNums } from "../middleware/validator.js";

const router = express.Router();

router.get("/", validateNums, ran);
router.post("/", validateNums, ran);

export default router;
