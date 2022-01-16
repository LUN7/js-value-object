import { ValueObject } from "./valueObject";

export class DateValueObject extends ValueObject<Date> {
  static create(value: Date, name: string): DateValueObject {
    return new DateValueObject({ value, name });
  }

  protected validate(value: Date, min: Date, max: Date): boolean {
    return value >= min && value <= max;
  }

  public isEqual(vo: ValueObject<unknown>): boolean {
    return vo instanceof DateValueObject && vo.value === this.value;
  }

  public toString(): string {
    return this.value.toString();
  }
}
