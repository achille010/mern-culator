import express from "express";
import { factorial } from "../controllers/calculator.controller.js";
import { validateNums } from "../middleware/validator.js";


const router = express.Router();

router.get("/", validateNums, factorial);
router.post("/", validateNums, factorial);

export default router;
