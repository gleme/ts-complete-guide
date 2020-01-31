export class UserForm {

  constructor(
    public parent: Element,
  ) {}


  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick
    };
  }

  onButtonClick(): void {
    console.log('Hi there');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me!</button>
      </div>
    `;
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

}