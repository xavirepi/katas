import { narcissistic } from "./narcissisticNumber";

describe("Basic tests", () => {
  test("7 is narcissistic", () => {
    expect(narcissistic(7)).toBe(true);
  });

  test("153 is narcissistic", () => {
    expect(narcissistic(153)).toBe(true);
  });

  test("1634 is narcissistic", () => {
    expect(narcissistic(1634)).toBe(true);
  });

  test("10 is not narcissistic", () => {
    expect(narcissistic(10)).toBe(false);
  });

  test("9647 is not narcissistic", () => {
    expect(narcissistic(9647)).toBe(false);
  });

  test("1991 is not narcissistic", () => {
    expect(narcissistic(1991)).toBe(false);
  });
});
