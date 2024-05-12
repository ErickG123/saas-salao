import { User } from "@prisma/client";
import { UsersRepository } from "../../repositories/users.repository";
import { NoUsersFound } from "../errors/no-users-found.error";

interface FindAllUsersUseCaseResponse {
  users: User[]
}

export class FindAllUsersUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute(): Promise<FindAllUsersUseCaseResponse> {
    const users = await this.usersRepository.findAll();

    if (!users) throw new NoUsersFound();

    return { users };
  }
}
