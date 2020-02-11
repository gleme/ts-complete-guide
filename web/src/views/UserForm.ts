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
      'click:.set-age': this.onSetRandomAgeClick,
      'click:.save-model': this.onSaveClick
    };
  }

  onSaveClick = (): void => {
    this.model.save();
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
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }

}