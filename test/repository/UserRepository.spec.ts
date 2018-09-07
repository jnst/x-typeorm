import {User} from "../../src/entity/User";
import {Connection, createConnection, Repository} from "typeorm";

describe('UserRepository', () => {
  let connection: Connection;
  let repository: Repository<User>;

  beforeAll(async () => {
    connection = await createConnection();
    repository = connection.getRepository(User);
  });

  afterAll(async () => {
    await connection.close();
  });

  describe('findOne', () => {
    it('should return one entity', async () => {
      const user = await repository.findOne(1);
      expect(user.id).toBe(1);
    });
  });
});
