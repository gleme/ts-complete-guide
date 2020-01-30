import { User } from './models/User';


async function run() {
  const user = User.buildUser()
  await user.fetch();
}


run().then(() => console.log('finished'));
