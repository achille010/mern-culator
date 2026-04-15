import express from "express";
import { validateNum } from "../middleware/validator.js";
import { arctan } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/:n", validateNum, arctan);
router.post("/:n", validateNum, arctan);

export default router;
