import { ValueObjectCreationError } from "../src";

describe("Test ValueObjectCreationError", () => {
  it("should be able to construct a ValueObjectCreationError", () => {
    const mockErrorMessage = "fail to create some value object";
    const error = new ValueObjectCreationError(mockErrorMessage);
    expect(error).toBeInstanceOf(ValueObjectCreationError);
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe(mockErrorMessage);
  });
});
