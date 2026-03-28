import express from "express";
import { factorial } from "../controllers/calculator.controller.js";
import { validateNum } from "../middleware/validator.js";


const router = express.Router();

router.get("/", validateNum, factorial);
router.post("/", validateNum, factorial);

export default router;
