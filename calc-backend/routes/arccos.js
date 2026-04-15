import express from "express";
import { arccos } from "../controllers/calculator.controller.js";
import { validateNum } from "../middleware/validator.js";

const router = express.Router();

router.get("/:n", validateNum, arccos);
router.post("/:n", validateNum, arccos);

export default router;
