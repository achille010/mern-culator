import express from "express";
import { validateNum } from "../middleware/validator.js";
import { div } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNum, div);
router.post("/", validateNum, div);

export default router;
