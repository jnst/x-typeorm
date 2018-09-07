import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {User} from './entity/User';

(async function() {
  let connection;

  try {
    connection = await createConnection();
    const userRepository = connection.getRepository(User);

    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    await userRepository.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await userRepository.find();
    console.log('Loaded users: ', users);
  } catch (err) {
    console.log(err);
  } finally {
    await connection.close();
    console.log('closed.');
  }
})();
