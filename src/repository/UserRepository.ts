import {EntityRepository, Repository} from 'typeorm';
import {User} from '../entity/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByFirstName(firstName: string): Promise<User[]> {
    return this.find({firstName: firstName});
  }
}
