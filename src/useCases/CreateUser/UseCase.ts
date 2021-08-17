import { User } from '../../models/User';
import { UsersRepository } from '../../repositories/UsersRepository';
import { CreateUserRequestDTO } from './DTO';

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
