import { ValueObjectCreationError } from "./valueObjectCreationError";
  value: T;
  name: string;
}

export abstract class ValueObject<T> {
  readonly value: T;
  readonly name: string;

  get isValid(): boolean {
    return this.validate();
  }

  /**
   * @description Throw exception if the value objects are invalid
   */
  public orFail(): never | void {
    if (!this.isValid) {
      throw new ValueObjectCreationError(
        `${this.name} is invalid, value: ${this.value}`
      );
    }
  }
}
