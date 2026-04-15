import express from "express";
import { validateNum } from "../middleware/validator.js";
import { log10 } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNum, log10);
router.post("/", validateNum, log10);

export default router;
