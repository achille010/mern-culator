import express from "express";
import { validateNum } from "../middleware/validator.js";
import { rnd } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNum, rnd);
router.post("/", validateNum, rnd);

export default router;