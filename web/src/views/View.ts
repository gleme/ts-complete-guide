import { Model } from "../models/Model";


export abstract class View<T extends Model<K>, K> {
  
  constructor(
    public parent: Element,
    public model: T,
  ) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let [key, handler] of  Object.entries(eventsMap)) {
      const [eventName, selector] = key.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, handler);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  abstract template(): string;

  abstract eventsMap(): { [key: string]: () => void };

}