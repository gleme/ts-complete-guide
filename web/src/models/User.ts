export interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {

  private subscribers: { [key: string]: Callback[] } = { };

  constructor(
    private data: UserProps
  ) { }

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
  }

}