import { UserProps, User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {

  constructor(
    public parent: Element,
    public model: User,
  ) {
    super(parent, model);
  }


  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onSetNameClick,
      'click:.set-age': this.onSetRandomAgeClick
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

  onSetRandomAgeClick = (): void => {
    this.model.setRandomAge();
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <p>Name: ${this.model.get('name')}</p>
        <p>Age: ${this.model.get('age')}</p>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }

}