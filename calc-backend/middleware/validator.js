export const validateNums = (req, res, next) => {
  let a = req.query.a ?? req.body.a ?? req.params.n;
  let b = req.query.b ?? req.body.b;

  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid Numbers" });
  }

  req.numbers = { a, b };
  next();
};

export const validateNum = (req, res, next) => {
  let a = req.query.a ?? req.body.a ?? req.params.n;

  a = Number(a);

  if(isNaN(a)){
    return res.status(400).json({error : "Invalid Input"});
  }

  req.numbers = { a };
  next();
}