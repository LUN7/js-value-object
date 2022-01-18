import { IValueObjectProps, ValueObject } from "./valueObject";

export interface IStringValueObjectProps extends IValueObjectProps<string> {
  min: number;
  max: number;
}

export class StringValueObject extends ValueObject<string> {
  private min: number;
  private max: number;
  private constructor(props: IStringValueObjectProps) {
    super(props);
    this.min = props.min;
    this.max = props.max;
  }

  static create(props: IStringValueObjectProps): StringValueObject {
    return new StringValueObject(props);
  }

  protected validate(): boolean {
    return this.value.length >= this.min && this.value.length <= this.max;
  }

  public isEqual(vo: ValueObject<unknown>): boolean {
    return vo instanceof StringValueObject && vo.value === this.value;
  }

  public toString(): string {
    return this.value;
  }
}
