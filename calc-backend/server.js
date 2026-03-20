import express from "express";

import homeRoute from "./routes/homeRoute.js"

import add from "./routes/add.js";
import subtract from "./routes/subtract.js";
import divide from "./routes/div.js";
import multiply from "./routes/multi.js";
import factorial from "./routes/factorial.js";
import history from "./routes/history.js";
import power from "./routes/power.js";
import summarray from "./routes/summarray.js";
import sine from "./routes/sine.js";
import cosine from "./routes/cosine.js";
import tangent from "./routes/tangent.js";
import squareRoot from "./routes/squareRoot.js";
import ln from "./routes/natLog.js";
import log10 from "./routes/log10.js";
import inv from "./routes/inv.js";
import arcsin from "./routes/arcsin.js";
import arccos from "./routes/arccos.js";
import arctan from "./routes/arctan.js";
import ran from "./routes/ran.js";
import notFound from "./routes/invalidPaths.js";

import { errorHandler } from "./middleware/error.js";
import { logger } from "./middleware/logger.js";
import { controlAccess } from "./middleware/access.js";

export const serverOn = (port = 3000) => {
  const app = express();

  app.use("/", homeRoute);
  app.use(express.urlencoded({ extended : true }));

  app.use(express.static('views'));

  app.use(express.json());
  app.use(logger);
  app.use(controlAccess);
  
  app.use("/add", add);
  app.use("/subtract", subtract);
  app.use("/divide", divide);
  app.use("/multiply", multiply);
  app.use("/factorial", factorial);
  app.use("/power", power);
  app.use("/sumarray", summarray);
  app.use("/history", history);
  app.use("/sin", sine);
  app.use("/cos", cosine);
  app.use("/tan", tangent);
  app.use("/sqrt", squareRoot);
  app.use("/ln", ln);
  app.use("/log", log10);
  app.use("/inv", inv);
  app.use("/arcsin", arcsin);
  app.use("/arccos", arccos);
  app.use("/arctan", arctan);
  app.use("/ran", ran);
  
  app.use(errorHandler);
  app.use("/", notFound);

  app.listen(port, () => {
    console.log(`Calculator API running on http://localhost:${port}`);
  });
};
