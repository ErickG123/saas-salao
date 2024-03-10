import { UsersRepository } from "../repositories/users.repository";

interface DeleteUserUseCaseRequest {
  id: string
}

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ id }: DeleteUserUseCaseRequest): Promise<void> {
    this.usersRepository.delete(id);
  }
}
