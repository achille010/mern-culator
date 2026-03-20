import express from "express";
import { validateNums } from "../middleware/validator.js";
import { squareRoot } from "../controllers/calculator.controller.js"; 

const router = express.Router();

router.get("/:n", validateNums, squareRoot);
router.post("/:n", validateNums, squareRoot);

export default router;