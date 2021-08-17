import { UsersRepository } from '../../repositories/UsersRepository';

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute() {
    this.usersRepository.findByEmail('');
  }
}
