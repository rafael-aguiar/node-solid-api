import { User } from '../../models/User';
import { MailProvider } from '../../providers/MailProvider';
import { UsersRepository } from '../../repositories/UsersRepository';
import { CreateUserRequestDTO } from './DTO';

export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private mailProvider: MailProvider
  ) {}

  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe do meu app',
        email: 'equipe@meuapp.com',
      },
      subject: 'Seja bem-vindo ao meu app!',
      body: '<p>Você já pode fazer login em nossa plataforma</p>',
    });
  }
}
