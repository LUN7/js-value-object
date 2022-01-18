import { IValueObjectProps, ValueObject } from "./valueObject";

export interface INumberValueObjectProps extends IValueObjectProps<number> {
  min: number;
  max: number;
}

export class NumberValueObject extends ValueObject<number> {
  private min: number;
  private max: number;

  private constructor(props: INumberValueObjectProps) {
    super(props);
    this.min = props.min;
    this.max = props.max;
  }

  static create(props: INumberValueObjectProps): NumberValueObject {
    return new NumberValueObject(props);
  }

  protected validate(): boolean {
    return this.value >= this.min && this.value <= this.max;
  }

  public isEqual(vo: ValueObject<unknown>): boolean {
    return vo instanceof NumberValueObject && vo.value === this.value;
  }

  public toString(): string {
    return this.value.toString();
  }
}
