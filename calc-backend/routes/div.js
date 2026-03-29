import express from "express";
import { validateNums } from "../middleware/validator.js";
import { div } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, div);
router.post("/", validateNums, div);

export default router;
