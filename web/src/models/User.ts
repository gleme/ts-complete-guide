import { HasId } from './Sync';
import { ApiModel } from './ApiModel';

export interface UserProps extends HasId {
  id?: number;
  name?: string;
  age?: number;
}


export class User extends ApiModel<UserProps> {

  constructor(
    attr: UserProps
  ) { 
    super(attr, 'http://localhost:3000');
  }

}