import express from "express";
import { validateNums } from "../middleware/validator.js";
import { natLog } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", validateNums, natLog);
router.post("/", validateNums, natLog);

export default router;