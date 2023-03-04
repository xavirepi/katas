const narcissitic = require("./narcissisticNumber");

describe("Basic tests", () => {
  test("7 is narcissistic", () => {
    expect(narcissitic(7)).toBe(true);
  });

  test("153 is narcissistic", () => {
    expect(narcissitic(153)).toBe(true);
  });

  test("1634 is narcissistic", () => {
    expect(narcissitic(1634)).toBe(true);
  });

  test("10 is not narcissistic", () => {
    expect(narcissitic(10)).toBe(false);
  });

  test("9647 is not narcissistic", () => {
    expect(narcissitic(9647)).toBe(false);
  });

  test("1991 is not narcissistic", () => {
    expect(narcissitic(1991)).toBe(false);
  });
});
