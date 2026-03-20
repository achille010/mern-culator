import express from "express";
import { addHistory } from "../middleware/history.js"
import { validateNums } from "../middleware/validator.js";
import { multi } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, multi);
router.post("/", validateNums, multi);

export default router;
