import { ValueObject } from ".";
import { UniqueEntityIdValueObject } from "./uniqueEntityIdValueObject";

export abstract class Entity<
  PropsType extends { [key: string]: ValueObject<unknown> },
  DTOType,
  DBType
> {
  protected id: UniqueEntityIdValueObject;
  protected name: string;
  protected props: PropsType;
  protected constructor(
    props: PropsType,
    name: string,
    id?: UniqueEntityIdValueObject
  ) {
    this.props = props;
    this.name = name;
    this.id = id || UniqueEntityIdValueObject.create(null, `${name}Id`);
  }

  /**
   * @description Throw exception if any of the value objects are invalid
   */
  public orFail(): void | never {
    try {
      for (const propKey in Object.keys(this.props)) {
        this.props[propKey].orFail();
      }
    } catch (err) {
      throw new Error(`Entity ${this.name} is invalid. Value ${err.message}`);
    }
  }
}
