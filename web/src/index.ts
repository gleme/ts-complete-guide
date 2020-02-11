import { UserList } from './views/UserList';
import { User } from './models/User';

const users = User.buildUserCollection();

users.on('change', () => {
  
  const root = document.getElementById('root');
  if (!root) throw new Error('Root element not found');
  
  new UserList(root, users).render();

});

users.fetch();
