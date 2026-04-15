import express from "express";
import { validateNum } from "../middleware/validator.js";
import { squareRoot } from "../controllers/calculator.controller.js"; 

const router = express.Router();

router.get("/:n", validateNum, squareRoot);
router.post("/:n", validateNum, squareRoot);

export default router;