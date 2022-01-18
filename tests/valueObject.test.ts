import { ValueObject } from "../src";
import { ValueObjectCreationError } from "../src/valueObjectCreationError";

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

  it("should not throw error if it is valid", () => {
    const mockValueObject = MockValidValueObject.create(null);
    expect(mockValueObject.orFail()).toBeUndefined();
  });

  it("should throw error if it is not valid", () => {
    const mockInvalidValueObject = MockInValidValueObject.create(null);
    expect(mockInvalidValueObject.orFail).toThrowError();
  });
});
