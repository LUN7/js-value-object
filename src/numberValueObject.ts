import { ValueObject } from "./valueObject";

export class NumberValueObject extends ValueObject<number> {
  static create(value: number, name: string): NumberValueObject {
    return new NumberValueObject({ value, name });
  }

  protected validate(min: number, max: number): boolean {
    return this.value >= min && this.value <= max;
  }

  public isEqual(vo: ValueObject<unknown>): boolean {
    return vo instanceof NumberValueObject && vo.value === this.value;
  }

  public toString(): string {
    return this.value.toString();
  }
}
