import { DateValueObject } from "../src";

describe("test dateValueObject", () => {
  it("should be able to construct a date value object", () => {
    const mockDateValueObject = DateValueObject.create({
      value: new Date(),
      name: "mock",
      min: new Date(0),
      max: new Date(Date.now() + 1000000),
    });
    expect(mockDateValueObject).toBeInstanceOf(DateValueObject);
  });

  it("should not throw error if it is valid", () => {
    const mockDateValueObject = DateValueObject.create({
      value: new Date(),
      name: "mock",
      min: new Date(0),
      max: new Date(Date.now() + 1000000),
    });
    expect(mockDateValueObject.orFail()).toBeInstanceOf(DateValueObject);
  });

  it("should throw error if it is not valid", () => {
    const mockDateValueObject = DateValueObject.create({
      value: new Date(),
      name: "mock",
      min: new Date(0),
      max: new Date(Date.now() - 1000000),
    });

    expect(mockDateValueObject.orFail).toThrowError();
  });

  it("should return true if two date value object is the same", () => {
    const currentTimestamp = Date.now();
    const mockDateValueObjectA = DateValueObject.create({
      value: new Date(currentTimestamp),
      name: "mock",
      min: new Date(0),
      max: new Date(Date.now() + 1000000),
    });
    const mockDateValueObjectB = DateValueObject.create({
      value: new Date(currentTimestamp),
      name: "mockB",
      min: new Date(0),
      max: new Date(Date.now() + 1000000),
    });

    expect(mockDateValueObjectA.isEqual(mockDateValueObjectB)).toBeTruthy();
  });

  it("should return false if two date value object is not the same", () => {
    const mockDateValueObjectA = DateValueObject.create({
      value: new Date(1000),
      name: "mock",
      min: new Date(0),
      max: new Date(Date.now() - 1000000),
    });
    const mockDateValueObjectB = DateValueObject.create({
      value: new Date(2000),
      name: "mock",
      min: new Date(0),
      max: new Date(Date.now() - 1000000),
    });

    expect(mockDateValueObjectA.isEqual(mockDateValueObjectB)).toBeFalsy();
  });

  it("should return a date string", () => {
    const mockDate = new Date();
    const mockDateValueObject = DateValueObject.create({
      value: mockDate,
      name: "mock",
      min: new Date(0),
      max: new Date(Date.now() + 1000000),
    });
    expect(mockDateValueObject.toString()).toBe(mockDate.toString());
  });
});
