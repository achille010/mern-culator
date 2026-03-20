import epxress from "express";
import { addHistory } from "../middleware/history.js";

const router = epxress.Router();

router.get("/", async (req, res) => {
  res.status(200).json({
    Status: "ok",
  });

  addHistory({ Operation: "HealthCheck", Status: "Ok" });
});
