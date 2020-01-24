import { User } from './models/User';

const user = new User({ name: 'Gustavo', age: 26 });

user.set({ age: 999 });

console.log(`
  User Info:
  - Name: ${user.get('name')}
  - Age: ${user.get('age')}
`);