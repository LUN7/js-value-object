import { Entity, NumberValueObject } from "../src";

interface EntityProps {
  count: NumberValueObject;
}

class MockEntity extends Entity<EntityProps> {
  static createOne(): MockEntity {
    return new MockEntity(
      {
        count: NumberValueObject.create({
          value: 999,
          name: "count",
          max: 1000,
          min: 0,
        }),
      },
      "mockEntity"
    );
  }
}

describe("test entity", () => {
  it("should be able to create entity", () => {
    const mockEntity = MockEntity.createOne();

    expect(mockEntity).toBeInstanceOf(MockEntity);
    expect(mockEntity.orFail()).toBeInstanceOf(MockEntity);
  });
});
