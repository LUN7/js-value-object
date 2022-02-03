# js-value-object

A value object library for nodejs

> API reference can be found at [Here](https://lun7.github.io/js-value-object/)

# Installation

Using npm:

```
> npm install js-value-object
```

Using yarn:

```
> yarn add js-value-object
```

# Import the library

```ts
import {
  Entity,
  ValueObject,
  DateValueObject,
  NumberValueObject,
  StringValueObject,
  UniqueEntityIdValueObject,
} from "js-value-object";
```

# Example

## Using predefined value object

```ts
const username = StringValueObject.create({
  value: "some-username",
  name: "username",
  min: 8,
  max: 50,
});
```

```ts
// Check if it is valid value-object
username.isValid;
```

```ts
// Check if username is valid value-object. Return this if valid, otherwise throw Error
username.orFail();
```

```ts
// Check if two value object is equal
username.isEqual(anotherUsername);
```

```ts
// throw Error right after creation if not valid
> const invalidUsername = StringValueObject.create({
  value: "name", // <-- invalid value, too short
  name: "username",
  min: 8,
  max: 50,
}).orFail()
```

## Customize value object

```ts
import { ValueObject, IValueObjectProps } from "js-value-object";

export enum AccountType {
  USER = "user",
  ADMIN = "admin",
}

export type IAccountTypeValueObjectProps = IValueObjectProps<AccountType>;

export class AccountTypeValueObject extends ValueObject<AccountType> {
  private constructor(props: IAccountTypeValueObjectProps) {
    super(props);
  }

  static create(value: string): AccountTypeValueObject {
    return new AccountTypeValueObject({
      value: value as AccountType,
      name: "accountType",
    });
  }

  public isEqual(vo: ValueObject<unknown>): boolean {
    return vo instanceof AccountTypeValueObject && vo.value === this.value;
  }

  protected validate(): boolean {
    return Object.values(AccountType).includes(this.value);
  }
}
```

### Create Entity

```ts
import {
  Entity,
  StringValueObject,
  UniqueEntityIdValueObject,
} from "js-value-object";
import { AccountType, AccountTypeValueObject } from "./accountType";

export interface IAccount {
  accountId: string;
  username: string;
  password: string;
  type: AccountType;
}

export interface AccountProps {
  username: StringValueObject;
  password: StringValueObject;
  type: AccountTypeValueObject;
}

export class Account extends Entity<AccountProps> {
  get accountId(): IAccount["accountId"] {
    return this.id.value;
  }

  get username(): IAccount["username"] {
    return this.props.username.value;
  }

  get password(): IAccount["password"] {
    return this.props.password.value;
  }

  get type(): IAccount["type"] {
    return this.props.type.value;
  }

  static createOne(obj: Record<string, string>): Account {
    const accountId = UniqueEntityIdValueObject.create(
      obj.accountId,
      "accountId"
    );
    const username = StringValueObject.create({
      value: obj.username,
      name: "username",
      min: 8,
      max: 50,
    });
    const password = StringValueObject.create({
      value: obj.password,
      name: "password",
      min: 8,
      max: 50,
    });
    const type = AccountTypeValueObject.create(obj.type);
    const account = new Account(
      {
        username,
        password,
        type,
      },
      "account",
      accountId
    );
    // return this if valid, otherwise throw Error
    return account.orFail();
  }
}
```
