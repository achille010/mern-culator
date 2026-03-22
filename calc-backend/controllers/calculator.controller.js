import * as Calc from "../models/calculator.model.js";
import { addHistory } from "../middleware/history.js";

const handle = (operation, fn) => (req, res, next) => {
  try {
    const result = fn(req);
    addHistory({ Operation: operation, Result: result, ...req.meta });
    res.json({ result: result });
  } catch (err) {
    next(err);
  }
};

export const add = handle("Addition", (req) => {
  const { a, b } = req.numbers;
  return Calc.add(a, b);
});

export const arccos = handle("Arccosine", (req) => {
  const { a } = req.numbers || req.params;
  const unit = req.query.unit || "deg";

  const val = unit === "rad" ? a : (a * Math.PI) / 180;

  return Calc.arccos(val);
});

export const arcsin = handle("Arcsine", (req) => {
  const { a } = req.numbers || req.params;
  const unit = req.query.unit || "deg";

  const val = unit === "rad" ? a : (a * Math.PI) / 180;

  return Calc.arcsin(val);
});

export const arctan = handle("Arctan", (req) => {
  const { a } = req.numbers || req.params;
  const unit = req.query.unit || "deg";

  const val = unit === "rad" ? a : (a * Math.PI) / 180;

  return Calc.arctan(val);
});

export const cosine = handle("Cosine", (req) => {
  const { a } = req.numbers || req.params;
  const unit = req.query.unit || "deg";

  const val = unit === "rad" ? a : (a * Math.PI) / 180;

  return Calc.cosine(val);
});

export const div = handle("Division", (req) => {
  const { a, b } = req.numbers;
  return Calc.div(a, b);
});

export const factorial = handle("Factorial", (req) => {
  const { a } = req.numbers;
  return Calc.factorial(a);
});

export const inv = handle("Inverse", (req) => {
  const { a } = req.numbers;
  return Calc.inv(a);
});

export const log10 = handle("10th base Logarithm", (req) => {
  const { a } = req.numbers;
  return Calc.log10(a);
});

export const multi = handle("Multiplication", (req) => {
  const { a, b } = req.numbers;
  return Calc.multi(a, b);
});

export const natLog = handle("Natural logarithm", (req) => {
  const { a } = req.numbers;
  return Calc.natLog(a);
});

export const power = handle("Power", (req) => {
  const { a, b } = req.numbers;
  return Calc.power(a, b);
});

export const ran = handle("Random", () => {
  return Calc.ran();
});

export const rnd = handle("Round", (req) => {
  const { a } = req.numbers;
  return Calc.rnd(a);
});

export const sine = handle("Sine", (req) => {
  const { a } = req.numbers || req.params;
  const unit = req.query.unit || "deg";

  const val = unit === "rad" ? a : (a * Math.PI) / 180;

  return Calc.sine(val);
});

export const squareRoot = handle("Square Root", (req) => {
  const { a } = req.numbers;
  return Calc.squareRoot(a);
});

export const subtract = handle("Subtract", (req) => {
  const { a, b } = req.numbers;
  return Calc.subtract(a, b);
});

export const summarray = handle("Sum of an array", (req) => {
  const { a } = req.body;

  if (
    !Array.isArray(a) ||
    a.some((n) => typeof n !== "number") ||
    a.length === 0
  ) {
      throw new Error ("Not array, empty array or contains non-numbers");
  }
  return Calc.sumarray(a);
});

export const tangent = handle("Tangent", (req) => {
  const { a } = req.numbers || req.params;
  const unit = req.query.unit || "deg";

  const val = unit === "rad" ? a : (a * Math.PI) / 180;

  return Calc.tangent(val);
});
<!-- refactor: extract toRad utility in controller -->
<!-- refactor: extract fromRad utility in controller -->
