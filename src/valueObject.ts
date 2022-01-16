interface IValueObjectProps<T> {
  value: T;
  name: string;
}

export abstract class ValueObject<T> {
  readonly value: T;
  readonly name: string;
  readonly isValid: boolean;

  protected constructor({ value, name }: IValueObjectProps<T>) {
    this.value = value;
    this.name = name;
    this.isValid = this.validate(value);
  }
  protected abstract validate(...validationOptions: unknown[]): boolean;
  abstract isEqual(vo: ValueObject<unknown>): boolean;

  /**
   * @description Throw exception if the value objects are invalid
   */
  public orFail(): never | void {
    if (!this.isValid) {
      throw new Error(`${this.name} is invalid, value: ${this.value}`);
    }
  }
}
