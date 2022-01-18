import { NumberValueObject } from "../src";

describe("test numberValueObject", () => {
  it("should be able to construct a number value object", () => {
    const mockNumberValueObject = NumberValueObject.create({
      value: 10,
      name: "mock",
      min: 0,
      max: 64,
    });
    expect(mockNumberValueObject).toBeInstanceOf(NumberValueObject);
  });

  it("should not throw error if it is valid", () => {
    const mockNumberValueObject = NumberValueObject.create({
      value: 10,
      name: "mock",
      min: 0,
      max: 64,
    });
    expect(mockNumberValueObject.orFail()).toBeUndefined();
  });

  it("should throw error if it is not valid", () => {
    const mockNumberValueObject = NumberValueObject.create({
      value: 10,
      name: "mock",
      min: 0,
      max: 5,
    });

    expect(mockNumberValueObject.orFail).toThrowError();
  });

  it("should return true if two string value object is the same", () => {
    const mockNumberValueObjectA = NumberValueObject.create({
      value: 10,
      name: "mock",
      min: 0,
      max: 36,
    });
    const mockNumberValueObjectB = NumberValueObject.create({
      value: 10,
      name: "mock",
      min: 0,
      max: 36,
    });

    expect(mockNumberValueObjectA.isEqual(mockNumberValueObjectB)).toBeTruthy();
  });

  it("should return false if two string value object is the same", () => {
    const mockNumberValueObjectA = NumberValueObject.create({
      value: 10,
      name: "mock",
      min: 0,
      max: 36,
    });
    const mockNumberValueObjectB = NumberValueObject.create({
      value: 20,
      name: "mock",
      min: 0,
      max: 36,
    });

    expect(mockNumberValueObjectA.isEqual(mockNumberValueObjectB)).toBeFalsy();
  });

  it("should return a numeric string", () => {
    const mockNumberValueObject = NumberValueObject.create({
      value: 10,
      name: "mock",
      min: 0,
      max: 36,
    });

    expect(mockNumberValueObject.toString()).toBe("10");
  });
});
