import * as challenge from "./js11";

describe("test for greet function", () => {
  it("should return the correct greeting", () => {
    expect(challenge.greet()).toBe("Hello, nice to meet you");
  });
});

describe("tests for sum function", () => {
  it("should have a return", () => {
    expect(challenge.sumTwoNumbers(5, 8)).toBeDefined();
  });
  it("result should be equal to the sum of the first and second number", () => {
    expect(challenge.sumTwoNumbers(2, 3)).toBe(5);
    expect(challenge.sumTwoNumbers(-23, 6)).toBe(-17);
    expect(challenge.sumTwoNumbers(20.5, 0.3)).toBe(20.8);
  });
});

describe("tests for checkLarger()", () => {
  it("should return correct string for equal numbers", () => {
    expect(challenge.checkLarger(5, 5)).toBe("Both numbers are equal");
  });
  it("should return correct string for different numbers", () => {
    expect(challenge.checkLarger(2, 3)).toBe("3 is bigger than 2");
    expect(challenge.checkLarger(-2, 3.2)).toBe("3.2 is bigger than -2");
    expect(challenge.checkLarger(7.9, 7.8)).toBe("7.9 is bigger than 7.8");
  });
});

describe("tests for filterByLength()", () => {
  it("should return correct string for equal numbers", () => {
    expect(challenge.filterByLength(["Kabir", "Karam"])).toBeDefined;
  });
  it("should return correct string for equal numbers", () => {
    expect(challenge.filterByLength(["Garcelle", "Liliana"])).toBe(
      "Sorry, no valid names supplied"
    );
  });
});

describe("tests for reduceNumbers()", () => {
  it("return the correct array", () => {
    expect(challenge.reduceNumbers([6, 260, -3], 6)).toStrictEqual([0, 254, 0]);
    expect(challenge.reduceNumbers([1000, 900, 800], 200)).toStrictEqual([
      255, 255, 255,
    ]);
    expect(challenge.reduceNumbers([30, 30, 30], 6)).toStrictEqual([
      24, 24, 24,
    ]);
    expect(challenge.reduceNumbers([6, 5, 4], 6)).toStrictEqual([0, 0, 0]);
  });
});
