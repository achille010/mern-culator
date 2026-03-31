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
  test("inverse of whole numbers (small)", () => expect(Calc.inv(3)).toBeCloseTo(0.33333333));
  test("inverse of simple fractions", () => expect(Calc.inv(0.5)).toBe(2));
  test("inverse of negatives", () => expect(Calc.inv(-5)).toBe(-0.2));
  test("inverse of 1", () => expect(Calc.inv(1)).toBe(1));
  test("inverse of zero", () => expect(Calc.inv(0)).toBe("Infinity!"));
});