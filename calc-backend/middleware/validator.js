export const validateNums = (req, res, next) => {
  let a = req.query.a ?? req.body.a ?? req.params.a ?? req.params.n;
  let b = req.query.b ?? req.body.b ?? req.params.b;

  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB) || a === undefined || b === undefined) {
    return res.status(400).json({ error: "Invalid or missing numbers (a and b required)" });
  }

  req.numbers = { a: numA, b: numB };
  next();
};

export const validateNum = (req, res, next) => {
  let a = req.query.a ?? req.body.a ?? req.params.a ?? req.params.n;

  const numA = Number(a);

  if (isNaN(numA) || a === undefined) {
    return res.status(400).json({ error: "Invalid or missing number (a required)" });
  }

  req.numbers = { a: numA };
  next();
};
