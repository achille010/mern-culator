import express from "express";
import { addHistory } from "../middleware/history.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    `
        <div style="background-color: #1e1e1e; 
                padding: 20px; 
                border-radius: 8px; 
                display: inline-block;">
          <code style="color: #4af626; 
                font-family: 'Courier New', Courier, monospace; 
                font-size: 1.5rem;">
                Welcome to our calculator API_
          </code>
        </div>
        
        `,
  );
  res.on("finish", () => {
    console.log("Home Route request");
  });
  addHistory({ Operation: "-", Operand: "-", Result: "-", Status: 200 });
});

router.post("/", (req, res) => {
  res.send(
    `
        <div style="background-color: #1e1e1e; 
                padding: 20px; 
                border-radius: 8px; 
                display: inline-block;">
          <code style="color: #4af626; 
                font-family: 'Courier New', Courier, monospace; 
                font-size: 1.5rem;">
                Welcome to our calculator API_
          </code>
        </div>

        `,
  );
  addHistory({ Operation: "-", Operand: "-", Result: "-", Status: 200 });
});

export default router;