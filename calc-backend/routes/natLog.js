import express from "express";
import { validateNum } from "../middleware/validator.js";
import { natLog } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNum, natLog);
router.post("/", validateNum, natLog);

export default router;