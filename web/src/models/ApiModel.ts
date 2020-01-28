import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export abstract class ApiModel<T> {

  public events = new Eventing();
  public sync: Sync<T>;
  public attributes: Attributes<T>;

  constructor(
    attr: T,
    baseURL: string,
  ) { 
    this.sync = new Sync<T>(baseURL);
    this.attributes = new Attributes<T>(attr);
  }

  on(eventName: string, callback: Calllback): void {
    this.events.on(eventName, callback);
  }
}