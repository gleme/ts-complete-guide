
type Callback = () => void;

export class Eventing  {

  private subscribers: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.subscribers[eventName] || [];
    handlers.push(callback);
    this.subscribers[eventName] = handlers;
  }

  trigger = (eventName: string): void => {
    const handlers = this.subscribers[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => callback());
  }

}