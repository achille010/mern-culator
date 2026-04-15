import express from "express";
import { validateNum } from "../middleware/validator.js";
import { sine } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/:n", validateNum, sine);
router.post("/:n", validateNum, sine);

export default router;
