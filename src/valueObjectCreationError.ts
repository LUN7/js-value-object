export class ValueObjectCreationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ValueObjectCreationError.name;
  }
}
