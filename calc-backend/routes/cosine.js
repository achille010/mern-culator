import express from "express";;
import { validateNum } from "../middleware/validator.js";
import { cosine } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/:n", validateNum, cosine);
router.post("/:n", validateNum, cosine);

export default router;
