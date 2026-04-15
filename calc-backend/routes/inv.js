import express from "express";
import { validateNum } from "../middleware/validator.js";
import { inv } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNum, inv);
router.post("/", validateNum, inv);

export default router;
