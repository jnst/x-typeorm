import {Connection, createConnection} from 'typeorm';
import {UserRepository} from '../../src/repository/UserRepository';

describe('UserRepository', () => {
  let connection: Connection;
  let userRepository: UserRepository;

  beforeAll(async () => {
    connection = await createConnection();
    userRepository = connection.getCustomRepository(UserRepository);
  });

  afterAll(async () => {
    await connection.close();
  });

  describe('findByFirstName', () => {
    it('should return one entity', async () => {
      const users = await userRepository.findByFirstName('Timber');
      expect(users.length).toBeGreaterThanOrEqual(1);
      users.forEach(user => {
        expect(user.firstName).toBe('Timber');
      });
    });
  });
});
