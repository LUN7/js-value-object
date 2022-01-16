import { ValueObject } from "./valueObject";

export class StringValueObject extends ValueObject<string> {
  static create(value: string, name: string): StringValueObject {
    return new StringValueObject({ value, name });
  }

  protected validate(min: number, max: number): boolean {
    return this.value.length >= min && this.value.length <= max;
  }

  public isEqual(vo: ValueObject<unknown>): boolean {
    return vo instanceof StringValueObject && vo.value === this.value;
  }

  public toString(): string {
    return this.value;
  }
}
