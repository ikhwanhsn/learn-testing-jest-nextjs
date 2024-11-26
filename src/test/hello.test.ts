import { hello } from "@/services/hello";

describe("hello", () => {
  it("should return hello", () => {
    expect(hello("world")).toBe("Hello, world!");
  });

  it("should return Dimas", () => {
    expect(hello("Dimas")).toBe("Hello, Dimas!");
  });
  it("should return Djaka", () => {
    expect(hello("Djaka")).toBe("Hello, Djaka!");
  });
});
