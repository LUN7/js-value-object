import { ValueObject } from "../src";

describe("test value object", () => {
  class MockValidValueObject extends ValueObject<null> {
    protected validate() {
      return true;
    }
    public isEqual() {
      return true;
    }
    static create(value: null) {
      return new MockValidValueObject({ value, name: "mock" });
    }
  }

  class MockInValidValueObject extends ValueObject<null> {
    protected validate() {
      return false;
    }
    public isEqual() {
      return true;
    }
    static create(value: null) {
      return new MockInValidValueObject({ value, name: "mock" });
    }
  }

  it("should be able to construct a value object", () => {
    const mockValueObject = MockValidValueObject.create(null);
    expect(mockValueObject).toBeInstanceOf(MockValidValueObject);
  });

  it("should return this if it is valid", () => {
    const mockValueObject = MockValidValueObject.create(null);
    expect(mockValueObject.orFail()).toBeInstanceOf(MockValidValueObject);
  });

  it("should throw error if it is not valid", () => {
    const mockInvalidValueObject = MockInValidValueObject.create(null);
    expect(mockInvalidValueObject.orFail).toThrowError();
  });
});
