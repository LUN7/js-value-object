import { ValueObjectCreationError } from "./valueObjectCreationError";

export interface IValueObjectProps<T> {
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
  public orFail(): this | never {
    if (!this.isValid) {
      throw new ValueObjectCreationError(
        `${this.name} is invalid, value: ${this.value}`
      );
    }
    return this;
  }

  protected constructor({ value, name }: IValueObjectProps<T>) {
    this.value = value;
    this.name = name;
  }

  protected abstract validate(): boolean;
  abstract isEqual(vo: ValueObject<unknown>): boolean;
}
