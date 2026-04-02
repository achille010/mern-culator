import { describe, test, expect } from "@jest/globals";
import * as Calc from "../models/calculator.model.js";

describe("add", () => {
  test("adds two positive numbers", () => expect(Calc.add(2, 5)).toBe(7));
  test("adds two negative numbers", () => expect(Calc.add(-2, -10)).toBe(-12));
  test("adds floats and decimals", () =>
    expect(Calc.add(1.123, -2.321)).toBeCloseTo(-1.198, 5));
  test("adds zeros and wholes", () => expect(Calc.add(12345, 0)).toBe(12345));
  test("adds large numbers", () =>
    expect(Calc.add(123456789, 123456789)).toBe(246913578));
});

describe("subtract", () => {
  test("subtracts two positive integers", () =>
    expect(Calc.subtract(13, 8)).toBe(5));
  test("subtracts an integer from a negative", () =>
    expect(Calc.subtract(-5, 3)).toBe(-8));
  test("subtracts two negative integers", () =>
    expect(Calc.subtract(-5, -10)).toBe(5));
  test("subtracts positive integers from 0", () =>
    expect(Calc.subtract(0, 12)).toBe(-12));
  test("subtracts 0 from positive integers", () =>
    expect(Calc.subtract(15, 0)).toBe(15));
  test("subtracts large numbers", () =>
    expect(Calc.subtract(34256, 12382)).toBe(21874));
});

describe("multiply", () => {
  test("multiply two positive integers", () =>
    expect(Calc.multi(4, 7)).toBe(28));
  test("multiply two negative integers", () =>
    expect(Calc.multi(-3, -5)).toBe(15));
  test("multiply a positive and a negative integers", () =>
    expect(Calc.multi(-4, 9)).toBe(-36));
  test("multiply a positive integer by 0", () =>
    expect(Calc.multi(12, 0)).toBe(0));
  test("multiply two floats", () =>
    expect(Calc.multi(2.123, 123)).toBeCloseTo(261.129, 5));
});

describe("division", () => {
  test("division of two integers where a | b", () =>
    expect(Calc.div(6, 3)).toBe(2));
  test("division of two integers to give definite floats", () =>
    expect(Calc.div(5, 2)).toBe(2.5));
  test("division of two integers to give an indefinite float", () =>
    expect(Calc.div(22, 7)).toBeCloseTo(3.14285));
  test("division by zero", () => expect(Calc.div(1, 0)).toBe("Infinity!"));
  test("test of nil divided by nil", () =>
    expect(Calc.div(0, 0)).toBe("Infinity!"));
  test("float division", () =>
    expect(Calc.div(1.23, 3.123)).toBeCloseTo(0.39385206532));
  test("negative result division", () =>
    expect(Calc.div(-12, 123)).toBeCloseTo(-0.0975609756));
});

describe("Power", () => {
  test("Normal power", () => expect(Calc.power(2, 3)).toBe(8));
  test("Positive integer power 0", () => expect(Calc.power(9, 0)).toBe(1));
  test("0 to the zeroth power", () => expect(Calc.power(0, 0)).toBe(1));
  test("negative exponent", () => expect(Calc.power(2, -1)).toBe(0.5));
  test("fractional exponentials", () =>
    expect(Calc.power(2, 2 / 3)).toBeCloseTo(1.58740105197));
  test("negative bases", () => expect(Calc.power(-3, 3)).toBe(-27));
});

describe("Squareroot", () => {
  test("Perfect squareroot", () => expect(Calc.squareRoot(49)).toBe(7));
  test("negatives' squareroot", () =>
    expect(Calc.squareRoot(-1)).toBe("Error"));
  test("squareroot of zero", () => expect(Calc.squareRoot(0)).toBe(0));
  test("irrational squareroots", () =>
    expect(Calc.squareRoot(2)).toBeCloseTo(1.41421356237));
});

describe("factorial", () => {
  test("factorial of 0", () => expect(Calc.factorial(0)).toBe(1));
  test("factorial of 1", () => expect(Calc.factorial(1)).toBe(1));
  test("factorial of a non 0 and non 1 number", () =>
    expect(Calc.factorial(5)).toBe(120));
  test("test factorial of slightly larger numbers", () =>
    expect(Calc.factorial(20)).toBe(2432902008176640000));
  test("factorial of numbers that cause overflow", () =>
    expect(Calc.factorial(172)).toBe("Overflow!"));
});

describe("Inverse", () => {
  test("inverse of whole numbers (small)", () =>
    expect(Calc.inv(3)).toBeCloseTo(0.33333333));
  test("inverse of simple fractions", () => expect(Calc.inv(0.5)).toBe(2));
  test("inverse of negatives", () => expect(Calc.inv(-5)).toBe(-0.2));
  test("inverse of 1", () => expect(Calc.inv(1)).toBe(1));
  test("inverse of zero", () => expect(Calc.inv(0)).toBe("Infinity!"));
});

describe("Round", () => {
  test("inverse of an irrational fraction", () =>
    expect(Calc.rnd(1 / 3)).toBe(0.333));
  test("round off negative floats", () =>
    expect(Calc.rnd(-1.5678)).toBe(-1.568));
  test("round-up small floats", () => expect(Calc.rnd(0.0005)).toBe(0.001));
  test("round off the mathematical PI", () =>
    expect(Calc.rnd(Math.PI)).toBe(3.142));
});

describe("Random", () => {
  test("Returns an integer", () =>
    expect(Number.isInteger(Calc.ran())).toBe(true));
  test("Returns values greater than or equal to 0", () =>
    expect(Calc.ran()).toBeGreaterThanOrEqual(0));
  test("Returns values less than 1000", () =>
    expect(Calc.ran()).toBeLessThan(1000));
});

describe("log10", () => {
  test("Operations are well handled for positive integers", () =>
    expect(Calc.log10(2)).toBeCloseTo(0.30102999566));
  test("The tenth logarithm for 1 returns 0", () =>
    expect(Calc.log10(1)).toBe(0));
  test("handles operations for negative inputs", () =>
    expect(Calc.log10(-10)).toBe("Undefined!"));
  test("handles operation on zero inputs", () =>
    expect(Calc.log10(0)).toBe("Infinity!"));
});

describe("natlog", () => {
  test("works for small positive integers", () =>
    expect(Calc.natLog(0.1)).toBeCloseTo(-2.30258509299));
  test("works for e and returns 1", () => expect(Calc.natLog(Math.E)).toBe(1));
  test("works for simple positive integers", () =>
    expect(Calc.natLog(10)).toBeCloseTo(2.30258509299));
  test("works for 1 and returns zero", () => expect(Calc.natLog(1)).toBe(0));
  test("works for large positive integers", () =>
    expect(Calc.natLog(Calc.power(10, 9))).toBeCloseTo(20.7232658369));
});

describe("sine", () => {
  test("the sine of zero yields zero", () => expect(Calc.sine(0)).toBe(0));
  test("the sine of PI / 2 yields one", () =>
    expect(Calc.sine(Math.PI / 2)).toBe(1));
  test("the sine of PI yields zero", () =>
    expect(Calc.sine(Math.PI)).toBeCloseTo(0));
  test("the sine of -PI / 2 degrees", () =>
    expect(Calc.sine((-1 * Math.PI) / 2)).toBeCloseTo(-1));
  test("the sine of 90 degrees after conversion", () =>
    expect(Calc.sine((90 * Math.PI) / 180)).toBeCloseTo(1));
  test("the sine of 180 degrees after conversion", () =>
    expect(Calc.sine((180 * Math.PI) / 180)).toBeCloseTo(0));
});

describe("cosine", () => {
  test("the cosine of zero yeilds one", () =>
    expect(Calc.cosine(0)).toBeCloseTo(1));
  test("the cosine of PI / 2 yeilds zero", () =>
    expect(Calc.cosine(Math.PI / 2)).toBeCloseTo(0));
  test("the cosine of PI yields negative one", () =>
    expect(Calc.cosine(Math.PI)).toBeCloseTo(-1));
  test("the cosine of converted PI / 2 radians to degrees", () =>
    expect(Calc.cosine((90 * Math.PI) / 180)).toBeCloseTo(0));
});

describe("tangent", () => {
  test("the tangent of 0 yields zero as well", () =>
    expect(Calc.tangent(0)).toBeCloseTo(0));
  test("the tangent of 1 is approximately 0.017455", () =>
    expect(Calc.tangent(Math.PI / 180)).toBeCloseTo(0.017455));
  test("the tangent of fourty five degrees is one", () =>
    expect(Calc.tangent(Math.PI / 4)).toBeCloseTo(1));
  test("the tangent of 90 degrees is infinity", () =>
    expect(Calc.tangent(Math.PI / 2)).toBe("Infinity!"));
  test("tangent of a very small value", () =>
    expect(Calc.tangent((0.003 * Math.PI) / 180)).toBeCloseTo(0.00005235987));
  test("tangent that will yield a value close to infinity", () =>
    expect(Calc.tangent((89.9999 * Math.PI) / 180)).toBeCloseTo(572957.795104));
});

describe("arcsine", () => {
  test("the sine inverse of zero must return zero units", () =>
    expect(Calc.arcsin(0)).toBeCloseTo(0));
  test("the sine inverse of 0.5 must return 30 degrees", () =>
    expect((Calc.arcsin(0.5) * 180) / Math.PI).toBeCloseTo(30));
  test("the sine inverse of one must return 90 degrees", () =>
    expect((Calc.arcsin(1) * 180) / Math.PI).toBeCloseTo(90));
  test("the sine inverse of -1 must return -90 degrees", () =>
    expect((Calc.arcsin(-1) * 180) / Math.PI).toBeCloseTo(-90));
  test("The sine inverse of sqrt(2)/2 returns 45 degrees", () =>
    expect((Calc.arcsin(Calc.squareRoot(2) / 2) * 180) / Math.PI).toBeCloseTo(
      45,
    ));
  test("boundary testing for greater than 1", () =>
    expect(Calc.arcsin(1.00001)).toBe("Out of range!"));
  test("boundary testing for values less than -1", () =>
    expect(Calc.arcsin(-2)).toBe("Out of range!"));
});

describe("arccos", () => {
  test("the cosine inverse of one must return 0 units", () =>
    expect(Calc.arccos(1)).toBeCloseTo(0));
  test("the cosinve inverse of zero must return 90 degs", () =>
    expect((Calc.arccos(0) * 180) / Math.PI).toBeCloseTo(90));
  test("the cosine inverse of -1 should return 180 degs", () =>
    expect((Calc.arccos(-1) * 180) / Math.PI).toBeCloseTo(180));
  test("the cosine inverse of 0.5 must return 60 degs", () =>
    expect((Calc.arccos(1 / 2) * 180) / Math.PI).toBeCloseTo(60));
  test("the cosine inverse of -0.5 must return 120 degs", () =>
    expect((Calc.arccos(-1 / 2) * 180) / Math.PI).toBeCloseTo(120));
  test("the cosine inverse of sqrt(2) / 2 must return 45 degs", () =>
    expect((Calc.arccos(Calc.squareRoot(2) / 2) * 180) / Math.PI).toBeCloseTo(
      45,
    ));
  test("upper boundary testing (for values greater than 1)", () =>
    expect(Calc.arccos(1.000001)).toBe("Out of range!"));
  test("lower boundary testing (for values less than -1)", () =>
    expect(Calc.arccos(-2)).toBe("Out of range!"));
});

describe("arctan", () => {
  test("the inverse tangent function on 0 returns exactly 0", () =>
    expect(Calc.arctan(0)).toBe(0));
  test("the inverse tangent function of 1 returns 45 degs", () =>
    expect((Calc.arctan(1) * 180) / Math.PI).toBeCloseTo(45));
  test("the inverse tangent function on -1 must yield -45 degs", () =>
    expect((Calc.arctan(-1) * 180) / Math.PI).toBeCloseTo(-45));
  test("the inverse tangent function on sqrt(3) yields 60 deg", () =>
    expect((Calc.arctan(Calc.squareRoot(3)) * 180) / Math.PI).toBeCloseTo(60));
  test("the inverse tangent function on (1 / sqrt(3)) yields 30 degs", () =>
    expect((Calc.arctan(1 / Calc.squareRoot(3)) * 180) / Math.PI).toBeCloseTo(
      30,
    ));
  test("the inverse tangent fn on a very small number will return a value close to that number", () =>
    expect(Calc.arctan(0.00001)).toBeCloseTo(0.00001));
  test("the inverse tangent fn on a very large number will return a value close to 90 degs", () =>
    expect((Calc.arctan(100000) * 180) / Math.PI).toBeCloseTo(90));
  test("the inverse tangent fn on a very large negative integer returns a value close to -90 degs", () =>
    expect((Calc.arctan(-100000) * 180) / Math.PI).toBeCloseTo(-90));
});

describe("Array sum", () => {
  test("sum of elements of an array with all positives", () =>
    expect(Calc.sumarray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55));
  test("sum of elements of an empty array", () =>
    expect(Calc.sumarray([])).toBe(0));
  test("sum of elements of an empty array with all negatives", () => 
    expect(Calc.sumarray([-1, -2, -3])).toBe(-6));
  test("sum of elements of a combined array (negatives and positives)", () => 
    expect(Calc.sumarray([1, -1, 2, -2, 10, -10, 5])).toBe(5));
  test("sum of elements of an array with a single element", () =>
    expect(Calc.sumarray([100])).toBe(100));
  test("sum of very large elements", () => 
    expect(Calc.sumarray([1234567, 2345678, 3456789])).toBe(7037034))
});
