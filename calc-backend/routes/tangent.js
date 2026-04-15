import express from "express";
import { tangent } from "../controllers/calculator.controller.js";
import { validateNum } from "../middleware/validator.js";

const router = express.Router();

router.get('/:n', validateNum , tangent);
router.post("/:n", validateNum , tangent);

export default router;
