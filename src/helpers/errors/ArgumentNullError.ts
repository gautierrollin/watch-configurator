export default class ArgumentNullError extends Error {

  public constructor(argumentName: string) {
    const message = `${argumentName} is null or undefined`;
    super(message);
    this.name = "ArgumentNullError";
  }

}
