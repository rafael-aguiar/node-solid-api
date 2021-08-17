import { User } from '../../models/User';
import { UsersRepository } from '../UsersRepository';

export class PostgresUsersRepository implements UsersRepository {
	private users: User[] = [];
	async findByEmail(email: string): Promise<User> {
		const user = this.users.find(user => user.email === email);

		return user;
	}

	async save(user: User): Promise<void> {
		this.users.push(user);
	}
}
