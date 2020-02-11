import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {

  regions: { [key: string]: Element } = { };
  
  constructor(
    public parent: Element,
    public model: T,
  ) {
    this.bindModel();
  }
  
  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
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

  mapRegions(fragment: DocumentFragment): void {
    for (let [key, selector] of Object.entries(this.regionsMap())) {
      let element = fragment.querySelector(selector);
      if (element) this.regions[key] = element;
    }
  }

  onRender(): void { }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }

}