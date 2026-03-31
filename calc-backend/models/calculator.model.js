export const add = (a, b) => {
  return a + b;
};
export const arccos = (a) => {
  return Math.acos(a);
};
export const arcsin = (a) => {
  return Math.asin(a);
};
export const arctan = (a) => {
  return Math.atan(a);
};
export const cosine = (a) => {
  return Math.cos(a);
};
export const div = (a, b) => {
  if(b !== 0) return a / b;
  else {
    return "Infinity!";
  }
};
export const factorial = (a) => {
  if(a > 170){
    return "Overflow!";
  }
  let result = 1;

  if (a === 0 || a === 1) return 1;
  else for (let i = 2; i <= a; i++) result *= i;

  return result;
};
export const inv = (a) => {
  if(a == 0){
    return "Infinity!";
  }
  return 1 / a;
};
export const log10 = (a) => {
  if(a < 0){
    return "Undefined!";
  } else if(a == 0){
    return "Infinity!";
  }
  return Math.log10(a);
};
export const multi = (a, b) => {
  return a * b;
};
export const natLog = (a) => {
  return Math.log(a);
};
export const power = (a, b) => {
  return Math.pow(a, b);
};
export const rnd = (a) => {
  return Math.round(a * 1000) / 1000;
};
export const ran = () => {
  return Math.floor(Math.random()*1000);
};
export const sine = (a) => {
  return Math.sin(a);
};
export const squareRoot = (a) => {
  if(a < 0){
    return "Error";
  }
  return Math.sqrt(a);
};
export const subtract = (a, b) => {
  return a - b;
};
export const sumarray = (a) => {
  return a.reduce((sum, n) => sum + n, 0);
};
export const tangent = (a) => {
  return Math.tan(a);
};
