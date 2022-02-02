import { StringValueObject } from "../src";

describe("test stringValueObject", () => {
  it("should be able to construct a string value object", () => {
    const mockStringValueObject = StringValueObject.create({
      value: "test",
      name: "mock",
      min: 0,
      max: 64,
    });
    expect(mockStringValueObject).toBeInstanceOf(StringValueObject);
  });

  it("should not throw error if it is valid", () => {
    const mockStringValueObject = StringValueObject.create({
      value: "test",
      name: "mock",
      min: 0,
      max: 64,
    });
    expect(mockStringValueObject.orFail()).toBeInstanceOf(StringValueObject);
  });

  it("should throw error if it is not valid", () => {
    const mockStringValueObject = StringValueObject.create({
      value: "test",
      name: "mock",
      min: 0,
      max: 64,
    });

    expect(mockStringValueObject.orFail).toThrowError();
  });

  it("should return true if two string value object is the same", () => {
    const mockStringValueObjectA = StringValueObject.create({
      value: "test",
      name: "mockA",
      min: 0,
      max: 64,
    });
    const mockStringValueObjectB = StringValueObject.create({
      value: "test",
      name: "mockB",
      min: 0,
      max: 64,
    });

    expect(mockStringValueObjectA.isEqual(mockStringValueObjectB)).toBeTruthy();
  });

  it("should return false if two string value object is the same", () => {
    const mockStringValueObjectA = StringValueObject.create({
      value: "testA",
      name: "mockA",
      min: 0,
      max: 64,
    });
    const mockStringValueObjectB = StringValueObject.create({
      value: "testB",
      name: "mockB",
      min: 0,
      max: 64,
    });

    expect(mockStringValueObjectA.isEqual(mockStringValueObjectB)).toBeFalsy();
  });
});
