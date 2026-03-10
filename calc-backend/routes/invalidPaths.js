import express from "express";
import { addHistory } from "../middleware/history.js";

const router = express.Router();

router.get("*", (req, res) => {
  res.status(404).json({ error: "404 Not Found!" });
  res.on("finish", () => {
    console.log("404 - Req");
  });
  addHistory({ Operation: "-", Operand: "-", Result: "-", Status: "404" });
});

router.post("*", (req, res) => {
  res.status(404).json({ error: "404 Not Found!" });
  res.on("finish", () => {
    console.log("404 - Req");
  });
  addHistory({ Operation: "-", Operand: "-", Result: "-", Status: "404" });
});

export default router;
