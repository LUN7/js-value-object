import { IValueObjectProps, ValueObject } from "./valueObject";

export interface IDateValueObjectProps extends IValueObjectProps<Date> {
  min: Date;
  max: Date;
}

export class DateValueObject extends ValueObject<Date> {
  private min: Date;
  private max: Date;
  private constructor(props: IDateValueObjectProps) {
    super(props);
    this.min = props.min;
    this.max = props.max;
  }

  static create(props: IDateValueObjectProps): DateValueObject {
    return new DateValueObject(props);
  }

  protected validate(): boolean {
    return this.value >= this.min && this.value <= this.max;
  }

  public isEqual(vo: ValueObject<unknown>): boolean {
    return (
      vo instanceof DateValueObject &&
      vo.value.getTime() === this.value.getTime()
    );
  }

  public toString(): string {
    return this.value.toString();
  }
}
