import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users.repository";
import { UserNotFound } from "./errors/user-not-found.error";

interface FindUserUseCaseRequest {
  id: string
}

interface FindUserUseCaseResponse {
  user: User
}

export class FindUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ id }: FindUserUseCaseRequest): Promise<FindUserUseCaseResponse> {
    const user = await this.usersRepository.findById(id);

    if (!user) throw new UserNotFound();

    return { user };
  }
}
