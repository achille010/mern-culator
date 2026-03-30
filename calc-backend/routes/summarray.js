import express from "express";
import { summarray } from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/", summarray);
router.post("/", summarray);

export default router;
