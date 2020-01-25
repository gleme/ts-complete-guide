import axios, { AxiosResponse } from 'axios';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

const baseUrl = 'http://localhost:3000';

export class User {

  private subscribers: { [key: string]: Callback[] } = {};

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
    const handlers = this.subscribers[eventName] || [];
    handlers.push(callback);
    this.subscribers[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.subscribers[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => callback());
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
        console.log(`
          User Info:
          - Name: ${this.get('name')}
          - Age: ${this.get('age')}
        `);
      }
    );
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }

  }

}