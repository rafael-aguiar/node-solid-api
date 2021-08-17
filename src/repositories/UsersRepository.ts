import { User } from '../models/User';

export interface UsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
