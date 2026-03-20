import express from "express";
import { validateNum } from "../middleware/validator.js";
import { arcsin } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/:n", validateNum, arcsin);
router.post("/:n", validateNum, arcsin);

export default router;
