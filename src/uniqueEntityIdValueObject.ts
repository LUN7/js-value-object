import { v4 as uuid } from "uuid";
import { ValueObject } from "./valueObject";

export class UniqueEntityIdValueObject extends ValueObject<string> {
  static create(value: string | null, name: string): UniqueEntityIdValueObject {
    return new UniqueEntityIdValueObject({ value: value || uuid(), name });
  }

  protected validate(): boolean {
    return this.value.length === 36;
  }

  public isEqual(vo: ValueObject<unknown>): boolean {
    return vo instanceof UniqueEntityIdValueObject && vo.value === this.value;
  }

  public toString(): string {
    return this.value.toString();
  }
}
