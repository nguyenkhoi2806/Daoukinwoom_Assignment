import { formatNumberToMoney } from "../String";

describe("Test string service", () => {
  it("Will format number to string money in the right way", () => {
    expect(formatNumberToMoney(200)).toBe("200");
    expect(formatNumberToMoney(200000)).toBe("200.000");
    expect(formatNumberToMoney(0)).toBe("0");
  });
});
